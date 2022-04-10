import store from "./store";
import { loadBugs } from "./bugs";

const unsubscribe = store.subscribe(() => {
  console.log("State changed!", store.getState());
});

store.dispatch(loadBugs());

unsubscribe();
