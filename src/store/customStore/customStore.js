export const createStore = (reducer) => {
  let state;
  const listeners = [];

  const subscribe = (listener) => {
    listeners.push(listener);
  };

  const dispatch = (action) => {
    state = reducer(state, action);

    for (let listener of listeners) {
      listener();
    }
  };

  const getState = () => state;

  return {
    subscribe,
    dispatch,
    getState,
  };
};
