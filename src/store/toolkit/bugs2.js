import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    bugRemoved: (bugs, action) =>
      bugs.filter((bug) => bug.id !== action.payload.id),

    bugResolved: (bugs, action) => {
      const result = [...bugs];
      const index = result.findIndex((bug) => bug.id === action.payload.id);
      if (index >= 0) {
        result[index].resolved = true;
      }
      return result;
    },
  },
});

export const { bugAdded, bugRemoved, bugResolved } = slice.actions;

export default slice.reducer;
