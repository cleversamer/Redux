import store from "./store";
import * as actionCreators from "./actions";

const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

store.dispatch(actionCreators.bugAdded("Bug1"));
store.dispatch(actionCreators.bugAdded("Bug2"));
store.dispatch(actionCreators.bugAdded("Bug3"));
store.dispatch(actionCreators.bugResolved(1));

unsubscribe();
