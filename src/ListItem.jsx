import React from "react";

const ListItem = () => {
  const frouts = ["apple", "orange", "mango", "banana", "dragon", "limes"];
  return (
    <>
      <h2>List of frouts are - </h2>
      <ul>
        {frouts.map((frout, index) => {
          return <li key={index}>{frout}</li>;
        })}
      </ul>
    </>
  );
};

export default ListItem;
