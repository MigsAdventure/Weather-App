import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  receiveLocation(today) {
    AppDispatcher.dispatch({
      type: 'NEW_REQUEST',
      payload: {today}
    })
  },

  receiveAutoLocation(autoLoc) {
    AppDispatcher.dispatch({
      type: "AUTO_LOCATION",
      payload: {autoLoc}
    })
  }
    
}

export default ServerActions;