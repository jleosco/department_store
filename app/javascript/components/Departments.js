import React from "react";

const Departments = (props) => {
  const renderIndex = () => {
    return props.departments.map((dept) => {
      return (
        <div>
          <h3>{dept.name}</h3>
          <p>Dept ID: {dept.id}</p>
          <a href={`/departments/${dept.id}`}>Info</a>
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
      {renderIndex()}
    </div> 
  );
};
       
export default Departments