//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";

var today = new Date();
console.log(today);
const currentTime = today.getHours();

const customStyle = {
  color: ""
};

let greeting;

if (currentTime < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (currentTime > 12) {
  greeting = "Good afternoon";
  customStyle.color = "green";
}

// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
ReactDOM.render(
  // <h1> Today is {currentTime}</h1>,
  <h1 style={customStyle}>{greeting} </h1>,

  document.getElementById("root")
);

//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
