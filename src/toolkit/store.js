import { configureStore } from "@reduxjs/toolkit";
// import reducer from "./bugs1";
// import reducer from "./bugs2";
import reducer from "./projects";

const store = configureStore({ reducer });

export default store;
