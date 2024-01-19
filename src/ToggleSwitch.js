import React, { useState } from "react";

const ToggleSwitch = () => {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };
  
  return (
    <>
      <h2>Toggle Switch Example</h2>
      <input type="checkbox" onChange={handleToggle} />
      <span>{isToggle ? "Yes" : "No"}</span>
    </>
  );
};

export default ToggleSwitch;
