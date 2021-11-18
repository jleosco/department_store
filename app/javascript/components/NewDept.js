import React from "react";

const NewDept = () =>{
  return(
    <div>
      <h1>New Department</h1>
      <form action="/departments" method="post">
        <p>Department Name:</p>
        <input name="department[name]" />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default NewDept;