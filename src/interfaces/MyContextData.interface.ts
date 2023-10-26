import React from "react";
import Location from "./Location.interface";
import Current from "./Current.interface";
import Forecast from "./Forecast.interface";

export default interface MyContextData {
  location: Location;
  setLocation: React.Dispatch<React.SetStateAction<Location>>;
  forecast: Forecast;
  setForecast: React.Dispatch<React.SetStateAction<Forecast>>;
  current: Current;
  setCurrent: React.Dispatch<React.SetStateAction<Current>>;
  showCard: boolean;
  setShowCard: React.Dispatch<React.SetStateAction<boolean>>;
}