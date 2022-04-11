import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBug, loadBugs, getBugs, resolveBug } from "../store/bugs";

const BugsList = () => {
  const dispatch = useDispatch();
  const bugs = useSelector(getBugs);

  useEffect(() => {
    dispatch(loadBugs());
  }, []);

  const handleAddBug = () => {
    dispatch(addBug({ description: "New Bug" }));
  };

  const handleResolveBug = (id) => {
    dispatch(resolveBug(id));
  };

  return (
    <ul>
      <button onClick={handleAddBug}>Add bug</button>
      {bugs.map((bug) => (
        <li
          key={bug.id}
          style={{ cursor: "pointer", padding: "5px" }}
          onClick={() => handleResolveBug(bug.id)}
        >
          {bug.description} - {bug.resolved ? "resolved" : "not resolved"}
        </li>
      ))}
    </ul>
  );
};

export default BugsList;
