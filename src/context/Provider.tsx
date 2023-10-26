import React, { useState } from "react";
import AppContext from ".";
import MyContextData from "@/interfaces/MyContextData.interface";
import currentMock from "@/mocks/current.mock";
import forecastMock from "@/mocks/forecast.mock";
import locationMock from "@/mocks/location.mock";
import IProps from "@/interfaces/IProps.interface";



const Provider = ({ children }: IProps) => {

  const [location, setLocation] = useState(locationMock);
  const [forecast, setForecast] = useState(forecastMock);
  const [current, setCurrent] = useState(currentMock);
  const [showCard, setShowCard] = useState(false);

  const context: MyContextData = {
    location,
    forecast,
    current,
    showCard,
    setLocation,
    setForecast,
    setCurrent,
    setShowCard
  };

  return <AppContext.Provider value={context}>
    {children}
  </AppContext.Provider>
}

export default Provider;