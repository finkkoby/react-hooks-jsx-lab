import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  return (
  <div id='home'>
    <h1 style={divStyle}>{ name } is a Web Developer from { city }</h1>
  </div>
)
}

const divStyle = {
  color: 'firebrick'
}

export default Home;
