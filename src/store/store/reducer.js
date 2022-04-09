import * as actions from "./actionTypes";

let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];

    case actions.BUG_REMOVED:
      return state.filter((bug) => bug.id !== action.payload.id);

    case actions.BUG_RESOLVED:
      const result = [...state];
      const index = result.findIndex((bug) => bug.id === action.payload.id);
      if (index >= 0) {
        result[index].resolved = true;
      }
      return result;

    default:
      return state;
  }
}
