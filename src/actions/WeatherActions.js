import API from '../API';

const WeatherActions = {
  sendLocation(location) {
    API.receiveLocation(location);
  },
  autoLocation() {
    API.autoLocation();
  }
}

export default WeatherActions;