const logger = (store) => (next) => (action) => {
  console.log(action.payload?.message);
  next(action);
};

export default logger;
