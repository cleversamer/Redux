import store from "./store";
// import * as bugs from "./bugs1";
import * as bugs from "./bugs2";
import * as projects from "./projects";
import * as users from "./users";

const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

store.dispatch(users.userAdded({ name: "User1" }));
store.dispatch(users.userAdded({ name: "User2" }));

store.dispatch(projects.projectAdded({ name: "Project1" }));
store.dispatch(projects.projectAdded({ name: "Project2" }));
store.dispatch(projects.projectAdded({ name: "Project3" }));
store.dispatch(projects.projectRemoved({ id: 1 }));

store.dispatch(bugs.bugAdded({ description: "Bug1" }));
store.dispatch(bugs.bugAdded({ description: "Bug2" }));
store.dispatch(bugs.bugAdded({ description: "Bug3" }));
store.dispatch(bugs.bugResolved({ id: 1 }));
store.dispatch(bugs.bugAssignedToUser({ bugId: 3, userId: 1 }));

const unresolved = bugs.getUnresolvedBugs(store.getState());
console.log(unresolved);

const bugsAssigned = bugs.getAssignedBugs(1)(store.getState());
console.log(bugsAssigned);

unsubscribe();
