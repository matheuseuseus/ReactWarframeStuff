import React, { Component } from 'react';
import AlertList from './AlertList';
import './styles/App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      alerts: []
    }
  }

  componentDidMount() {
    fetch(`https://desolate-waters-47187.herokuapp.com/http://content.warframe.com/dynamic/worldState.php`)
      .then(res => res.json())
      .then(data => {
        this.setState({ alerts: data })
      })
  }
  
  render() {
    return(
      <div className="App">
        { this.state.alerts.Alerts &&
          <AlertList alerts={this.state.alerts.Alerts} />
        }
      </div>
    )
  }
}

export default App;
