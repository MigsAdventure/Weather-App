import {EventEmitter} from 'events';
import AppDispatcher from '../AppDispatcher'

let _allData = [];
let _location = 'temp';

class WeatherStore extends EventEmitter {
  constructor() {
    super();
    AppDispatcher.register(action => {
      let {type, payload} = action;
      switch(type) {
        case 'NEW_REQUEST' : 
          let day = payload.today;
          let loc = day.display_location;
          console.log(day);
          console.log('Target',day);
          let currWeather = {
            image: day.icon_url,
            observation: {
              status: day.weather,
              temp: day.temp_f,
              windDir: day.wind_dir,
              windSpeed: day.wind_mph
            },
            location: {
              city: loc.city,
              state: loc.state,
              country: loc.country,
              zip: loc.zip
            },
            
            
          }
          _allData.push(currWeather)
          console.log('Store fullArray: ', _allData);
          this.emit('CHANGE');
        break;

        case 'AUTO_LOCATION': {
          console.log('store auto',payload.autoLoc)
          _location = payload.autoLoc;
          this.emit('CHANGE');
          break;
        }
      }
    })//end of AppDispatcher
  }//end of constructor

  startListening(cb){
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE',cb);
  }

  getAuto() {
    return _location;
  }

  getConditions() {
    return _allData;
  }
}

export default new WeatherStore();