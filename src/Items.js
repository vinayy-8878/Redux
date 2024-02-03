
import React from "react";
import "./Items.css";  
import { useDispatch } from "react-redux";
import { addItem } from "./utils/cartSlice";

export default function Items() {
  const dispatch = useDispatch();

  const handleAddItem = (itemName) => {
    // When clicked, dispatch an action with the item name
    dispatch(addItem({ name: itemName }));
  };

  return (
    <div className="totalItems">
      <div className="item">
        <h2>Burger</h2>
        <button
          onClick={() => handleAddItem("Burger")}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#0056b3";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#007bff";
            e.target.style.transform = "scale(1)";
          }}
        >
          +
        </button>
      </div>

      <div className="item">
        <h2>Pizza</h2>
        <button
          onClick={() => handleAddItem("Pizza")}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#0056b3";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#007bff";
            e.target.style.transform = "scale(1)";
          }}
        >
          +
        </button>
      </div>

      <div className="item">
        <h2>Pasta</h2>
        <button
          onClick={() => handleAddItem("Pasta")}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#0056b3";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#007bff";
            e.target.style.transform = "scale(1)";
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
