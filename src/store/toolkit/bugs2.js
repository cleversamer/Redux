import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

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

    bugResolved: (bugs, action) =>
      bugs.map((bug) =>
        bug.id === action.payload.id ? { ...bug, resolved: true } : bug
      ),
    bugAssignedToUser: (bugs, action) => {
      const { bugId, userId } = action.payload;
      const bugIndex = bugs.findIndex((bug) => bug.id === bugId);
      if (bugIndex >= 0) {
        bugs[bugIndex].userId = userId;
      }
    },
  },
});

/* Not efficient way */
// export const getUnresolvedBugs = (state) =>
//   state.entities.bugs.map((bug) => !bug.resolved);

export const getUnresolvedBugs = createSelector(
  (state) => state.entities.bugs,
  (state) => state.entities.projects,
  (bugs, projects) => bugs.filter((bug) => !bug.resolved)
);

export const getAssignedBugs = (userId) =>
  createSelector(
    (state) => state.entities.bugs,
    (bugs) => bugs.filter((bug) => bug.userId === userId)
  );

export const { bugAdded, bugRemoved, bugResolved, bugAssignedToUser } =
  slice.actions;

export default slice.reducer;
