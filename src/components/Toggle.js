import React from "react";
import { useState } from "react";

function Toggle() {

  const [isOn, setIsOn] = useState(false);

  const color = isOn ? "blue" : "red";

  function handleClick() {
    setIsOn(isOn => !isOn);
  }

  return (
    <button style={{background: color}} onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>
  );
}

export default Toggle;