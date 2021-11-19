import React from "react";

const Item =(props) => {
  const itemDesc = () => {
    return (
      <div>
        <h1>{props.items.name}</h1>
        <h3>${props.items.price}</h3>
        <p>{props.items.description}</p>
      </div>
    );
  };
  return (
    <div>
      {itemDesc()}
      <a href={`/departments/${props.items.department_id}/items`}>Back</a>
    </div>
  );
};

export default Item