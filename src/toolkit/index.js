import store from "./store";
// import * as bugs from "./bugs1";
// import * as bugs from "./bugs2";
import * as projects from "./projects";

const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

// store.dispatch(bugs.bugAdded({ description: "Bug1" }));
// store.dispatch(bugs.bugAdded({ description: "Bug2" }));
// store.dispatch(bugs.bugAdded({ description: "Bug3" }));
// store.dispatch(bugs.bugResolved({ id: 1 }));

store.dispatch(projects.projectAdded({ name: "Project1" }));
store.dispatch(projects.projectAdded({ name: "Project2" }));
store.dispatch(projects.projectAdded({ name: "Project3" }));
store.dispatch(projects.projectRemoved({ id: 1 }));

unsubscribe();
