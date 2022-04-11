import configureStore from "./configureStore";
import { addBug, loadBugs } from "./bugs";

const store = configureStore();

const unsubscribe = store.subscribe(() => {
  console.log("State has changes!", store.getState());
});

store.dispatch(addBug({ description: "A" }));

// store.dispatch(loadBugs());

unsubscribe();
