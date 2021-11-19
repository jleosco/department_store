import React from "react";

const Items = (props) => {
  const itemIndex = () => {
    return props.items.map((item) => {
      return (
        <div>
          <h3>{item.name} - ${item.price}</h3>
          <a href={`/departments/${props.depts.id}/items/${item.id}`}>Info</a>
       </div>
      );
    });
  };
  return (
    <div>
      <h1>Items available in {props.depts.name}</h1>
      <a href={`/departments`}>Department List</a>
      {itemIndex()}
    </div>
  );
};


export default Items