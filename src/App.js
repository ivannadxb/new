import { useState } from "react";
import { data } from "./data";
import './App.css';

function App () {

  const [place, setPlace] = useState (0);
  const {title, id, city, description, age, image} = data[place];

  const previousPlace = () => {
    setPlace((place => {
      place --;
      if (place < 0) {
      return data.length-1;
      }
      return place;
    }))
  }

  const nextPlace = () => {
    setPlace((place =>{
      place ++;
      if (place > data.length -1) {
        place =0;
      }
      return place;
    }))
  }


return(<div>
  <div className="container">
  <h2> {title} </h2>
</div>

  <div className="container">
  <img src={image} width="300px" height="300px" alt="Place"/>
</div>

<div className="container">
  <h1> {id} - {city} </h1>
</div>

<div className="container">
  <h2> {description} </h2>
</div>

<div className="container">
  <h2> {age} </h2>
</div>

<div className="btn container">
<button onClick={previousPlace}>Previous</button>
<button onClick={nextPlace}>Next</button>
</div>


</div>)
 }

export default App;
