import { createAction, createReducer } from "@reduxjs/toolkit";

// Action creators
export const bugAdded = createAction("bugAdded");
export const bugRemoved = createAction("bugRemoved");
export const bugResolved = createAction("bugResolved");

// Reducer
let lastId = 0;

const reducer = createReducer([], {
  [bugAdded.type]: (bugs, action) => {
    bugs.push({
      id: ++lastId,
      description: action.payload.description,
      resolved: false,
    });
  },

  [bugRemoved.type]: (bugs, action) =>
    bugs.filter((bug) => bug.id !== action.payload.id),

  [bugResolved.type]: (bugs, action) => {
    const index = bugs.findIndex((bug) => bug.id === action.payload.id);
    if (index >= 0) {
      bugs[index].resolved = true;
    }
    return bugs;
  },
});

export default reducer;
