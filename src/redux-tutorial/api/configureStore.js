/* eslint-disable import/no-anonymous-default-export */
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducer from "./reducer";
import logger from "./middleware/logger";
import toast from "./middleware/toast";
import api from "./middleware/api";

// DEV: excluded the logging services for testing purposes
export default function () {
  return configureStore({
    reducer,
    // middleware: [thunk, logger({ destination: "console" }), toast, api],
    middleware: [thunk, api],
  });
}
