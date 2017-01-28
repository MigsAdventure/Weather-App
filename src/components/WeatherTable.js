import React, {Component} from 'react';
import WeatherStore from '../stores/WeatherStore';

export default class WeatherTable extends Component {
  constructor() {
    super();
    this.state = {
      conditions: WeatherStore.getConditions()
    }
    console.log('table', this.state.conditions)
    this._onChange = this._onChange.bind(this);
   } //end of constructor

    componentWillMount() {
      WeatherStore.startListening(this._onChange); 
    }

    componentWillUnmount() {
      WeatherStore.stopListening(this._onChange);
    }
  
    _onChange() {
      this.setState({
        conditions: WeatherStore.getConditions()
      })
    }
 


  render() {
    let {conditions} = this.state;
    console.log('Full array: ', conditions)
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Today</th>
              <th>Location</th>
              
            </tr>
          </thead>
          <tbody>
          {
            conditions.map((day) => (
              <tr>
                <td>
                  <img src={day.image}/>
                </td>
                <td>
                  <p>{day.observation.status}</p>
                  <p>{`${day.observation.temp}F`}</p>
                  <p>{day.observation.windDir}</p>
                  <p>{`${day.observation.windSpeed}mph`}</p>
                </td>
                <td>
                  <p>{day.location.city}</p>
                  <p>{day.location.state}</p>
                  <p>{day.location.country}</p>
                  <p>{day.location.zip}</p>
                </td>
            
              </tr>
              ) //end of map return
            ) //end of map
          }
          </tbody>
        </table>
      </div>
      )
  }
}