import dotenv from 'dotenv';

dotenv.config();

import axios from 'axios';

export default async function getWeatherForecastApi(city: string) {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const data = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=no&alerts=no&lang=pt`);
  const returnData = data.data;
  return returnData;
}