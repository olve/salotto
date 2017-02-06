import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import RaisedButton from 'material-ui/RaisedButton'

//material-ui dependency
injectTapEventPlugin();



export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <RaisedButton label="Default" onTouchTap={function() {alert(1)}}/>
      </MuiThemeProvider>
    )
  }
}
