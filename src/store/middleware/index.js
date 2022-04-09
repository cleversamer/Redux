import store from "./store";
import * as bugs from "./bugs";
import * as projects from "./projects";
import * as users from "./users";

const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store);
});

store.dispatch({ type: "error", payload: { message: "An error occurred." } });

unsubscribe();
