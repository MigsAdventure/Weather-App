import React, { Component } from 'react'
import InputForm from './InputForm';
import WeatherTable from './WeatherTable';
import WeatherStore from '../stores/WeatherStore';
import WeatherActions from '../actions/WeatherActions';

export default class Layout extends Component {
  constructor() {
    super();
  
  }

  componentDidMount() {
       WeatherActions.autoLocation();
  }

  render() {
    return (
      <div className='container text-center'>
        <h1 className='text-center'>Weather API</h1>
        <h4>Check the Weather Before It's Too Late!</h4>
        <InputForm/>
        <WeatherTable/>
      </div>
    )
  }
}
