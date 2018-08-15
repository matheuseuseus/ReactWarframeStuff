import React, { Component } from 'react';
import AlertList from './AlertList';
import './styles/App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      alerts: [],
      nodes: []
    }
  }

  componentDidMount() {
    fetch(`https://desolate-waters-47187.herokuapp.com/http://content.warframe.com/dynamic/worldState.php`)
      .then(res => res.json())
      .then(data => {
        this.setState({ alerts: data })
      })

    fetch(`https://desolate-waters-47187.herokuapp.com/http://deathsnacks.com/wf/api/nodes.php`, {
    })
      .then(res => res.text())
      .then(data => {
        this.setState({ nodes: data })
      })
  }
  
  render() {
    return(
      <div className="App">
        { this.state.alerts.Alerts && this.state.nodes &&
          <AlertList alerts={this.state.alerts.Alerts} nodes={this.state.nodes} />
        }
      </div>
    )
  }
}

export default App;
