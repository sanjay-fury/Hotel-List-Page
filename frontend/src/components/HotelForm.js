import React, { useEffect, useState } from "react";

const emptyForm = {
  title: "", address: "", description: "", price: "",
  latitude: "", longitude: "", image: ""
};
const MAX_IMAGE_SIZE = 1 * 1024 * 1024;

function HotelForm({ hotel, onSave, onCancel }) {
  const [form, setForm] = useState(hotel || emptyForm);
  const [error, setError] = useState("");

  useEffect(() => {
    setForm(hotel || emptyForm);
    setError("");
  }, [hotel]);

  const change = (event) => {
    const { name, value } = event.target;
    setForm(current => ({ ...current, [name]: value }));
  };

  const uploadImage = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    if (!["image/jpeg", "image/png", "image/webp", "image/gif"].includes(file.type)) {
      setError("Please select a valid image file.");
      event.target.value = "";
      return;
    }
    if (file.size > MAX_IMAGE_SIZE) {
      setError("Image size must be 1 MB or less.");
      event.target.value = "";
      return;
    }
    const reader = new FileReader();
    reader.onload = () => setForm(current => ({ ...current, image: reader.result }));
    reader.onerror = () => setError("Unable to read this image. Please try another.");
    reader.readAsDataURL(file);
    setError("");
  };

  const submit = (event) => {
    event.preventDefault();
    const title = String(form.title || "").trim();
    const description = String(form.description || "").trim();
    const price = Number(form.price);
    const latitude = Number(form.latitude);
    const longitude = Number(form.longitude);

    if (!title || !description) return setError("Hotel name and description cannot be empty.");
    if (form.price === "" || !Number.isFinite(price) || price <= 0)
      return setError("Enter a valid price greater than zero.");
    if (form.latitude === "" || !Number.isFinite(latitude) || latitude < -90 || latitude > 90)
      return setError("Latitude must be between -90 and 90.");
    if (form.longitude === "" || !Number.isFinite(longitude) || longitude < -180 || longitude > 180)
      return setError("Longitude must be between -180 and 180.");
    if (!form.image) return setError("Please upload a hotel image.");

    onSave({ ...form, title, description, price, latitude, longitude,
      address: String(form.address || "").trim() });
  };

  return (
    <form className="hotel-form" onSubmit={submit}>
      <h2>{hotel ? "Edit Hotel" : "Add Hotel"}</h2>
      {error && <p className="form-error" role="alert">{error}</p>}
      <label>Hotel name<input name="title" value={form.title} onChange={change} placeholder="Hotel name" /></label>
      <label>Address / Location<input name="address" value={form.address || ""} onChange={change} placeholder="Area, city" /></label>
      <label>Description<textarea name="description" value={form.description} onChange={change} placeholder="Hotel description" /></label>
      <label>Price per night (₹)<input type="number" min="0.01" step="0.01" name="price" value={form.price} onChange={change} placeholder="Price" /></label>
      <div className="coordinate-fields">
        <label>Latitude<input type="number" step="any" min="-90" max="90" name="latitude" value={form.latitude} onChange={change} placeholder="-90 to 90" /></label>
        <label>Longitude<input type="number" step="any" min="-180" max="180" name="longitude" value={form.longitude} onChange={change} placeholder="-180 to 180" /></label>
      </div>
      <label>Hotel image (maximum 1 MB)<input type="file" accept="image/png,image/jpeg,image/webp,image/gif" onChange={uploadImage} /></label>
      {form.image && <img className="image-preview" src={form.image} alt="Selected hotel preview" />}
      <div className="form-actions">
        <button className="primary-button" type="submit">Save Hotel</button>
        <button className="secondary-button" type="button" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
}

export default HotelForm;
