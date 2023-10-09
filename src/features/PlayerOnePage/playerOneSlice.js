import { createSlice } from "@reduxjs/toolkit";

const playerOneSlice = createSlice({
  name: "playerOne",
  initialState: {
    gameBoard: [],
    shipCoordinates: [],
    hideBoard: false,
  }
});

export default playerOneSlice.reducer;