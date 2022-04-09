import store from "./store";
import * as bugs from "./bugs";

store.subscribe(() => console.log("Store changed!", store.getState()));

store.dispatch(bugs.bugAdded("Bug1"));
store.dispatch(bugs.bugAdded("Bug2"));
store.dispatch(bugs.bugAdded("Bug3"));
store.dispatch(bugs.bugResolved(1));
