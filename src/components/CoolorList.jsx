import React, { useState } from "react";

const Dropdown2 = () => {
  const items = [
    { name: "Item 1", isSelected: false },
    { name: "Item 2", isSelected: false },
    { name: "Item 3", isSelected: false },
    { name: "Item 4", isSelected: false },
    { name: "Item 5", isSelected: false },
    { name: "Item 6", isSelected: false }
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [mainDivColor, setMainDivColor] = useState("green");

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function handleItemClick(index) {
    setSelectedItem(index);
    
    setMainDivColor(getRandomColor());
  }


  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 10)];
    }
    return color;
  }

  return (
    <div style={{ backgroundColor: mainDivColor }}>
      <label
        style={{
          backgroundColor: "yellow",
          color: "blue",
          marginTop: "30px"
        }}
      >
        Label Items
      </label>
      <div
        style={{
          marginLeft: "40px",
          position: "relative",
          display: "inline-block",
          marginTop: "3rem"
        }}
      >
        <button onClick={toggleDropdown}>{isOpen ? "▲" : "▼"}</button>
        {isOpen && (
          <div style={{ position: "absolute", top: "100%" }}>
            <ul style={{ color: "green", padding: "20px" }}>
              {items.map((item, index) => (
                <li
                  key={index}
                  style={{
                    backgroundColor:
                      selectedItem === index ? "blue" : "ThreeDLightShadow"
                  }}
                  onClick={() => handleItemClick(index)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown2;
