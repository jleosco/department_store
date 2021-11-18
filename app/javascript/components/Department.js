import React from "react"

const Department = (props) => {
  return (
    <div>
      <h1>{props.dept.name}</h1>
      <p>ID: {props.dept.id}</p>
      <a href="/">Home</a>
      <a href="/departments">Department List</a>
    </div>
  );
};

export default Department