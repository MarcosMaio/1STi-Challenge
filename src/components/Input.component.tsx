import { useAppContext } from "@/hooks/useAppContext.hook"
import getWeatherForecastApi from "@/services/getWeatherApi"
import { ChangeEvent, useCallback, useState, KeyboardEvent } from "react"
import React from 'react'

export default function Input() {
  const [inputValue, setInputValue] = useState('')
  const { setShowCard, setLocation, setCurrent, setForecast } = useAppContext();

  const handleInputValue = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }, [])

  const handleKeyDown = async (event: KeyboardEvent<HTMLInputElement>): Promise<void> => {
    if (event.key === 'Enter' && event.currentTarget.value !== '') {
      await getWeatherForecastApi(inputValue).then((response) => {
        setLocation(response.location)
        setCurrent(response.current);
        setForecast(response.forecast)
      });

      setInputValue('');
      setShowCard(true);

    }
  };

  return (
    <div className="relative">
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      </div>
      <input id="default-search" className="block w-96 p-4 pl-10 text-sm" placeholder="Insira aqui o nome da cidade" onChange={(e) => handleInputValue(e)} value={inputValue} onKeyDown={handleKeyDown} required />
    </div>

  )
}