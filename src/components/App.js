import React, { Component } from 'react';
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
        this.setState({ alerts: data.Alerts })
      })
  }
  
  render() {
    const { alerts } = this.state;

    return(
      <div className="App">
        <h1>Alerts</h1>
          { !alerts ?
              <h1>No alerts available.</h1>
            :
              alerts.map(alert => 
                <div className="card" key={alert._id}>
                  <h2>{alert.MissionInfo.location}</h2>
                  <h3>{alert.MissionInfo.missionType}</h3>
                  Rewards<br />
                  Credits: {alert.MissionInfo.missionReward.credits}<br />
                  { alert.MissionInfo.missionReward.items ?
                      alert.MissionInfo.missionReward.items.map(item => {
                        return <span>Item: {item.substring(item.lastIndexOf("/") + 1)}</span>
                      })
                    :
                      <span>No items</span>
                  }
                </div>
              )
          }
      </div>
    )
  }
}

export default App;
