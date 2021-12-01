import React from "react";

const Departments = (props) => {
  const renderIndex = () => {
    return props.departments.map((dept) => {
      return (
        <div>
          <h3>{dept.name}</h3>
          <h6>Dept ID: {dept.id}</h6>
          <a href={`/departments/${dept.id}`}>Items List</a>
          <a href={`/departments/${dept.id}/edit`}>Edit</a>
          <a 
          href={`/departments/${dept.id}`} data-method="delete">
            Delete
          </a>
        </div>
      );
    });
  };
  return(
    <div>
      <h1>Departments:</h1>
      <a href={"/departments/new"}>New Department</a>
      {renderIndex()}
    </div> 
  );
};
       
export default Departments