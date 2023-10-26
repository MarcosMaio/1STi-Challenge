import { useAppContext } from "@/hooks/useAppContext.hook";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faArrowDown,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import states from "@/utils/stateAbbreviationMap";

export default function WeatherCard() {
  const { location, current, forecast, setShowCard, showCard } =
    useAppContext();
  const [wheatherCardAnimation, setwheatherCardAnimation] = useState(true);
  const forecastDay = forecast.forecastday.at(0);
  const dayOfTheWeek = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];

  const handlerAnimationCard = () => {
    setwheatherCardAnimation(false);
    setTimeout(() => {
      setShowCard(false);
    }, 500);
  };

  return (
    <section>
      <div
        className={`bg-white p-7 relative w-100 opacity-0 ${
          wheatherCardAnimation ? "slide-in" : "slide-out"
        }`}
      >
        <div className="absolute top-0 right-1 p-2">
          <FontAwesomeIcon
            className="text-orange text-2xl font-twin cursor-pointer"
            icon={faXmark}
            onClick={() => handlerAnimationCard()}
          />
        </div>
        <h1 className="open-sans px-2">
          <strong>{`${location.name}, ${states[location.region]} - ${
            location.country
          }`}</strong>
        </h1>
        <p className="p-5 px-2 text-2xl open-sans-bold text-dark-gray-700">{`${Math.round(
          current.temp_c
        )}°C ${current.condition.text}`}</p>
        <div className="flex justify-around items-center">
          <div>
            <p className="p-2 px-1 open-sans-bold text-dark-gray-700 col-span-1 row-span-1">
              <FontAwesomeIcon className="text-orange" icon={faArrowDown} />
              {` ${Math.floor(Number(forecastDay?.day.mintemp_c))}° `}
              <FontAwesomeIcon className="text-orange" icon={faArrowUp} />
              {` ${Math.floor(Number(forecastDay?.day.maxtemp_c))}°`}
            </p>
            <p className="p-1 mt-1">
              Sensação{" "}
              <strong>{Math.floor(Number(current.feelslike_c))}°C</strong>
            </p>
          </div>
          <div>
            <p className="p-1 mt-1">
              Vento <strong>{Math.floor(current.wind_kph)}km/h</strong>
            </p>
            <p className="p-1 mt-1">
              Umidade <strong>{current.humidity}%</strong>
            </p>
          </div>
        </div>
        <div className="mt-3 border-t border-orange flex justify-center items-center">
          <table className="table-fixed text-center">
            <thead>
              {forecast.forecastday.slice(2, 7).map((day) => {
                const myDate = new Date(day.date);
                return (
                  <td
                    className=" px-4 pt-4 text-gray-700 open-sans-bold text-sm w-1/5 truncate"
                    key={dayOfTheWeek[myDate.getDay()]}
                  >
                    {dayOfTheWeek[myDate.getDay()]}
                  </td>
                );
              })}
            </thead>
            <tbody>
              {forecast.forecastday.slice(2, 7).map((day) => {
                return (
                  <td
                    className="p-1 text-orange open-sans-bold text-xs w-1/5 truncate"
                    key={`${day.date}`}
                  >{`${Math.floor(day.day.mintemp_c)}° ${Math.floor(
                    day.day.maxtemp_c
                  )}°`}</td>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
