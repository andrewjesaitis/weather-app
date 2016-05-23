var axios = require('axios');

// Open Weather API Config
const APIKEY = '6c6c24c22fd26543e4ec7be6ff04e1b5';
const APIVERSION = '2.5';
const URL = 'http://api.openweathermap.org/data/';
const CURRENT = '/weather';
const FORECAST = '/forecast/daily';

var api = {
  getCurrentWeather(city) {
    var currentUrl = URL.concat(APIVERSION, CURRENT);
    var config = {
      params: {
        q: city,
        type: 'accurate',
        units: 'imperial',
        APPID: APIKEY,
      },
    };
    return axios.get(currentUrl, config)
         .then(function (res) {
           return res.data;
         })
         .catch(function (err) {
           console.warn(`Error in getCurrentWeather:  ${err}`);
         });
  },
  getForecastWeather(city, numDays) {
    var forcastUrl = URL.concat(APIVERSION, FORECAST);
    var config = {
      params: {
        q: city,
        cnt: numDays,
        type: 'accurate',
        units: 'imperial',
        APPID: APIKEY,
      },
    };
    return axios.get(forcastUrl, config)
       .then(function (res) {
         return res.data;
       })
       .catch(function (err) {
         console.warn(`Error in getCurrentWeather: ${err}`);
       });
  },
};

module.exports = api;

