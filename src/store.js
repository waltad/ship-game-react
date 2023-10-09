import { configureStore } from "@reduxjs/toolkit";
import playerOneReducer from "./features/PlayerOnePage/playerOneSlice";

const store = configureStore({
  reducer: {
    playerOne: playerOneReducer,
  },
});

export default store;