import { createStore } from "./customStore";
import reducer from "../store/reducer";
import * as actionCreators from "../store/actions";

const store = createStore(reducer);

store.subscribe(() => console.log("Store changed!", store.getState()));

store.dispatch(actionCreators.bugAdded("Bug1"));

store.dispatch(actionCreators.bugResolved(1));
