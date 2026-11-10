import { configureStore } from "@reduxjs/toolkit";
import hotelReducer from "./hotelSlice";
import hotelsData from "../data/hotels";

const STORAGE_KEY = "waynest_hotels_v2";
let savedHotels = hotelsData;

try {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    const parsed = JSON.parse(saved);
    if (Array.isArray(parsed)) savedHotels = parsed;
  }
} catch (error) {
  console.warn("Unable to load saved Waynest hotels:", error);
}

const store = configureStore({
  reducer: { hotels: hotelReducer },
  preloadedState: { hotels: savedHotels }
});

store.subscribe(() => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store.getState().hotels));
  } catch (error) {
    console.warn("Unable to save Waynest hotels:", error);
  }
});

export default store;
