import store from "./store";
import { loadBugs } from "./bugs";

const unsubscribe = store.subscribe(() => {
  console.log("State has changes!", store.getState());
});

store.dispatch(loadBugs());

setTimeout(() => store.dispatch(loadBugs()), 2000);

unsubscribe();
