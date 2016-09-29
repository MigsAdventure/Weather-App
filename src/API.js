import axios from 'axios';
import ServerActions from './actions/ServerActions';


const API = {
  receiveLocation(location) {

    axios.get(`http://api.wunderground.com/api/284ad04f85f4fc17/conditions/q/${location}.json`)
      .then(data => {
        console.log(data.data.current_observation);
        ServerActions.receiveLocation(data.data.current_observation);
      })
      .catch(err => {
        console.log('err: ', err);
      })
      
  },

  autoLocation() {
    axios.get('http://api.wunderground.com/api/284ad04f85f4fc17/geolookup/q/autoip.json')
    .then(autoLoc => {
      ServerActions.receiveAutoLocation(autoLoc.data.location.zip);
    })
    .catch(err => {
      console.log('err:', err)
    })
  }

}

export default API;


// https://icons.wxug.com/i/c/v4/nt_${current_something.icon}.svg
// const API = {
// receiveLocation(location) {
//     let x = []  

//     axios.get(`http://api.wunderground.com/api/284ad04f85f4fc17/forecast/q/${location}.json`)
//       .then(forecast => {
//         x.push(forecast)
//         axios.get(`http://api.wunderground.com/api/284ad04f85f4fc17/conditions/q/${location}.json`)
//           // .then(res => x = res.data)
//         // let temp = [forecast, x]
//         // return temp;
//       })
//       .then( response => {
        
//         x.push(response);
//         console.log('API LOCATIONL ', x)
//         ServerActions.receiveLocation(x);
//       })
//       .catch(err => {
//         console.log('err: ', err);
//       })

//     }
// }

// export default API
