import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import logger from "./middleware/logger";
import toast from "./middleware/toast";
import api from "./middleware/api";

const store = configureStore({
  reducer,
  middleware: [logger({ destination: "console" }), toast, api],
});

export default store;
