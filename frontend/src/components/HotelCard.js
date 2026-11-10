import React from "react";

function HotelCard({ hotel, role,onEdit, onDelete, onView }) {
  const openDetails = () => onView();
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openDetails();
    }
  };

  return (
    <div className="hotel-card" role="link" tabIndex={0} aria-label={`View details for ${hotel.title}`} onClick={openDetails} onKeyDown={handleKeyDown}>
      <img src={hotel.image} alt={`${hotel.title} hotel`}loading="lazy"/>
      <div className="card-content">
        <h3>{hotel.title}</h3>
        <p className="hotel-location">{hotel.location}</p>
        {hotel.address && <p className="hotel-address">{hotel.address}</p>}
        <p className="hotel-description">{hotel.description}</p>
        <h4>₹{Number(hotel.price).toLocaleString("en-IN")} / night</h4>
        <div className="card-actions" onClick={event => event.stopPropagation()}>
          {role === "user" ? (
            <button className="primary-button" onClick={onView}>View Details</button>
          ) : (
            <>
              <button className="secondary-button" onClick={onEdit}>Edit</button>
              <button className="danger-button" onClick={onDelete}>Delete</button>
            </>
          )}
        </div>    
      </div>
    </div>
  );
}

export default HotelCard;