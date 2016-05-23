const weatherCodes = {
  200: 'wi-day-thunderstorm',
  201: 'wi-thunderstorm',
  202: 'wi-thunderstorm',
  210: 'wi-day-thunderstorm',
  211: 'wi-thunderstorm',
  212: 'wi-thunderstorm',
  221: 'wi-day-thunderstorm',
  230: 'wi-day-storm-showers',
  231: 'wi-storm-showers',
  232: 'wi-storm-showers',
  300: 'wi-day-showers',
  301: 'wi-showers',
  302: 'wi-showers',
  310: 'wi-day-showers',
  311: 'wi-showers',
  312: 'wi-showers',
  313: 'wi-day-showers',
  314: 'wi-showers',
  321: 'wi-showers',
  500: 'wi-day-sprinkle',
  501: 'wi-day-showers',
  502: 'wi-day-rain',
  503: 'wi-rain',
  504: 'wi-rain-wind',
  511: 'wi-sleet',
  520: 'wi-day-showers',
  521: 'wi-day-showers',
  522: 'wi-showers',
  531: 'wi-showers',
  701: 'wi-fog',
  711: 'wi-smoke',
  721: 'wi-dust',
  731: 'wi-dust',
  741: 'wi-fog',
  751: 'wi-dust',
  761: 'wi-dust',
  762: 'wi-volcano',
  771: 'wi-gale-warning',
  781: 'wi-tornado',
  800: 'wi-day-sunny',
  801: 'wi-day-sunny-overcast',
  802: 'wi-day-cloudy-high',
  803: 'wi-day-cloudy-high',
  804: 'wi-cloudy',
  900: 'wi-tornado',
  901: 'wi-storm-warning',
  902: 'wi-hurricane',
  903: 'wi-snowflake-cold',
  904: 'wi-hot',
  905: 'wi-strong-wind',
  906: 'wi-hail',
  951: 'wi-wind-beaufort-0',
  952: 'wi-wind-beaufort-2',
  953: 'wi-wind-beaufort-3',
  954: 'wi-wind-beaufort-4',
  955: 'wi-wind-beaufort-5',
  956: 'wi-wind-beaufort-6',
  957: 'wi-wind-beaufort-7',
  958: 'wi-wind-beaufort-8',
  959: 'wi-wind-beaufort-9',
  960: 'wi-wind-beaufort-10',
  961: 'wi-wind-beaufort-11',
  962: 'wi-wind-beaufort-12',
};

const days = ['Sunday', 'Monday', 'Tuesday',
            'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const months = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];


var utils = {
  formatDateString(dt) {
    var d = new Date(dt * 1000);
    return `${days[d.getDay()]} ${months[d.getMonth()]} ${d.getDate()}`;
  },
  getWeatherIconString(code) {
    var iconStr;
    if (weatherCodes.hasOwnProperty(code)) {
      iconStr = weatherCodes[code];
    } else {
      iconStr = 'wi-alien';
    }
    return iconStr;
  },
  getWeatherIconClass(code) {
    var iconClass = 'wi fa-5x ';
    iconClass += this.getWeatherIconString(code);
    return iconClass;
  },
  formatUTCTime(s) {
    var d = new Date(s * 1000);
    return d.toLocaleTimeString('en-US');
  },
  normalizeCurrentData(raw) {
    var processed = {
      dt: raw.dt,
      weatherCode: raw.weather[0].id,
      weatherDescription: raw.weather[0].description,
      temperature: [raw.main.temp],
      humidity: raw.main.humidity,
      pressure: raw.main.pressure,
      wind: raw.main.wind,
      sunrise: utils.formatUTCTime(raw.sys.sunrise),
      sunset: utils.formatUTCTime(raw.sys.sunset),
    };
    return processed;
  },
  normalizeForecastData(raw) {
    var processed = raw.list.map(function(item) {
      return {
        dt: item.dt,
        weatherCode: item.weather[0].id,
        weatherDescription: item.weather[0].description,
        temperature: [item.temp.min, item.temp.max],
        humidity: item.humidity,
        pressure: item.pressure,
        wind: item.wind,
      };
    });
    return processed;
  },
};

module.exports = utils;
