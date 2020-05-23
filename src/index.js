import React from "react";
import ReactDOM from "react-dom";

const img = "https://i.picsum.photos/id/588/200/200.jpg";

const customStyle = {
  color: "red",
  fontSize: "25px",
  border: "2px solid black"
};

ReactDOM.render(
  <div>
    <h1 style={customStyle}>My Favorite Foods</h1>
    <div>
    <img 
      className="food"
      src="https://www.helpguide.org/wp-content/uploads/table-with-grains-vegetables-fruit-1536.jpg" />
      <img
      src={img} />
    </div>
  </div>,
  document.getElementById("root")
);
