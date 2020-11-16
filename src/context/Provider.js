import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({children}) {
  const [carState, setCarState] = useState({
    red: false,
    blue: false,
    yellow: false,
  })
  const [signalState, setSignalState] = useState({
    color: 'red',
  })
  
  function moveCar(car, side) {
    setCarState({...carState, [car]: side })
  }
  
  function changeSignal(newColor) {
    setSignalState({color: newColor})
  }
  
  const contextValue = {
    carState,
    setCarState,
    moveCar,
    signalState,
    setSignalState,
    changeSignal,
  };
  
  return (
    <CarsContext.Provider value={contextValue}>
      {children}
    </CarsContext.Provider>
  )
}

export default Provider;
