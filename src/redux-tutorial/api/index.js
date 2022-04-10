import store from "./store";
import { loadBugs, assignBugToUser } from "./bugs";

const unsubscribe = store.subscribe(() => {
  console.log("State has changes!", store.getState());
});

store.dispatch(loadBugs());

setTimeout(() => store.dispatch(assignBugToUser(1, 4)), 2000);

unsubscribe();
