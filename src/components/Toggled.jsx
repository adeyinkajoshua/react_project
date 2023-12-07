import React, { useState } from "react";

const Dropdown = () => {  
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen); 
  }

  return (
    <div style={{backgroundColor:"green",}} >
        <label style={{backgroundColor:"Yellow",color:"blue", marginTop:"30px",}}> Label Items</label>
    <div style={{ marginLeft:"40px",position: "relative", display: "inline-block",marginTop:"3rem" }}>
      <button onClick={toggleDropdown}>{isOpen ? "▲" : "▼"}</button>
      {isOpen && (
        <div style={{ position: "absolute", top: "100%"}}>
          <ul style={{ color:"green", padding: "20px" }}>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
            <li>Item 6</li> 
          </ul>
        </div>
      )}
      <div style={{backgroundColor:""}}>

      </div>
    </div>
    </div>
  );
};

export default Dropdown;
