import React from "react";

const Items = (props) => {
  const itemIndex = () => {
    return props.items.map((item) => {
      <div>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p>${item.price}</p>
      </div>
    });
  };
  return (
    <div>
      {itemIndex}
    </div>
  );
};


export default Items