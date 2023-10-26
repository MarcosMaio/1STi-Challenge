import Current from "@/interfaces/Current.interface"

const currentMock: Current = {
  "last_updated_epoch": 1683914400,
  "last_updated": "2023-05-12 15:00",
  "temp_c": 27.0,
  "temp_f": 80.6,
  "is_day": 1,
  "condition": {
    "text": "Partly cloudy",
    "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
    "code": 1003
  },
  "wind_mph": 5.6,
  "wind_kph": 9.0,
  "wind_degree": 240,
  "wind_dir": "WSW",
  "pressure_mb": 1018.0,
  "pressure_in": 30.06,
  "precip_mm": 0.0,
  "precip_in": 0.0,
  "humidity": 42,
  "cloud": 75,
  "feelslike_c": 26.9,
  "feelslike_f": 80.5,
  "vis_km": 10.0,
  "vis_miles": 6.0,
  "uv": 7.0,
  "gust_mph": 8.3,
  "gust_kph": 13.3
};

export default currentMock;