import React from "react";
import MyCards from "../components/card/MyCards";
import Slider from "../components/Slider";
/*import data from "../data/data";*/

const Home = () => {
  return(
  <div>
    <Slider />
    <h1>What you need to learn?</h1>
    <MyCards firstIndex = {0} lastIndex= {5} />
  </div>) ;
};

export default Home;
