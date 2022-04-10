import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import logger from "./middleware/logger";
import func from "./middleware/func";
import toast from "./middleware/toast";

const store = configureStore({
  reducer,
  middleware: [logger({ destination: "console" }), func, toast],
});

export default store;
