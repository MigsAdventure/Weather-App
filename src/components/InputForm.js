import React, {Component} from 'react';
import WeatherActions from '../actions/WeatherActions'
import WeatherStore from '../stores/WeatherStore'

export default class InputForm extends Component {
  constructor() {
    super();
    this.submit = this.submit.bind(this);
    this.state = {
      autoLoc: WeatherStore.getAuto()
    }
    this._onChange = this._onChange.bind(this);
    this.updateZip = this.updateZip.bind(this);
  }

  componentWillMount() {
    WeatherStore.startListening(this._onChange);
   
  }

  componentWillUnmount () {
    WeatherStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      autoLoc: WeatherStore.getAuto()
    })
  }

  updateZip(e) {
    let temp = e.target.value;
    this.setState({
      autoLoc: temp
    })
  }
  
   submit(e) {
    e.preventDefault();
    let {weatherInput} = this.refs;
    let location = weatherInput.value;
    WeatherActions.sendLocation(location);
    location = ''; 
  }

  render() {
    let zip = this.state.autoLoc;
    return (
      <form onSubmit = {this.submit}>
        <div className="row">
          <label htmlFor="inputForm" >Enter Zip: </label>
          <input type="text" ref="weatherInput" onChange={this.updateZip} name="inputForm" value={zip}/>
        </div>
        <button className="btn btn-primary btn-lg">Check Weather</button>
      </form>
      )
  }
}