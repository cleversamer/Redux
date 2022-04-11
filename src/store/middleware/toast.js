const toast = (store) => (next) => (action) => {
  console.log("Toastify:", action.payload?.message);
  return next(action);
};

export default toast;
