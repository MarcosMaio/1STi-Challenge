import '@testing-library/jest-dom/extend-expect'
import axios from 'axios'
import CapitalsWeatherMock from '@/mocks/capitalsWeather.mock'
import MockAdapter from 'axios-mock-adapter';


describe('Capitals component tests', () => {


  CapitalsWeatherMock.map(capital => {
    test(`should return mocked data for ${capital.name}`, async () => {
      const mock = new MockAdapter(axios);
      mock.onGet(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${capital.name}&days=1&aqi=no&alerts=no`).reply(200, { data: capital });
      const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${capital.name}&days=1&aqi=no&alerts=no`);

      expect(response.status).toBe(200);
      expect(response.data).toEqual({ data: capital });
    });
})
})