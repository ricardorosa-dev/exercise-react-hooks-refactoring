// src/Cars.jsx

import React, { useContext } from 'react';
import CarsContext from './context/CarsContext';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';

function Cars() {
  const {carState, setCarState, moveCar} = useContext(CarsContext);
  
  return (
    <div>
        <div>
          <img
            className={carState.red ? 'car-right' : 'car-left'}
            src={carRed}
            alt="red car"
          />
          <button
            onClick={() => moveCar('red', !carState.red)}
            type="button"
          >
            Move
        </button>
        </div>
        <div>
          <img
            className={carState.blue ? 'car-right' : 'car-left'}
            src={carBlue}
            alt="blue car"
          />
          <button
            onClick={() => moveCar('blue', !carState.blue)}
            type="button"
          >
            Move
        </button>
        </div>
        <div>
          <img
            className={carState.yellow ? 'car-right' : 'car-left'}
            src={carYellow}
            alt="yellow car"
          />
          <button
            onClick={() => moveCar('yellow', !carState.yellow)}
            type="button"
          >
            Move
        </button>
        </div>
      </div>
  )
}

export default Cars;
