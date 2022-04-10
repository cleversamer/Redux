const toast = (store) => (next) => (action) => {
  console.log("Toastify:", action.payload?.message);
  next(action);
};

export default toast;
