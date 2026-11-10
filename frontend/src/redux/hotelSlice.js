import { createSlice } from "@reduxjs/toolkit";
import hotelsData from "../data/hotels";

const hotelSlice = createSlice({
  name: "hotels",
  initialState: hotelsData,
  reducers: {
    addHotel: (state, action) => {
      state.push(action.payload);
    },
    updateHotel: (state, action) => {
      const index = state.findIndex(h => h.id === action.payload.id);
      if (index !== -1) state[index] = action.payload;
    },
    deleteHotel: (state, action) => {
      return state.filter(h => h.id !== action.payload);
    }
  }
});

export const { addHotel, updateHotel, deleteHotel } = hotelSlice.actions;
export default hotelSlice.reducer;