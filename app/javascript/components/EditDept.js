import React from "react";

const EditDept = (props) => {
  return (
    <div>
      <form action={`/departments/${props.dept.id}`} method="post">
      <input type="hidden" name="_method" value="patch" />
      <p>Department</p>
      <input defaultValue={props.dept.name} name="department[name]" />
      <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditDept