import React, { useState } from "react";
import data from "./data";
import Tours from './Components/Tours';
import Refresh from './Components/Refresh';

const App = () => {
  const [tour, setTour] = useState(data);

  // -- remove tour --
  function removeTour(id) {
    const newTour = tour.filter(tour => tour.id !== id)
    // console.log(id);
    setTour(newTour);
  }

  // -- no tour left --
  if (tour.length === 0) {
    return <Refresh setTour={setTour} data={data}/>
  }

  return (
    <Tours tours={tour} removeTour={removeTour} />
  )
};

export default App;