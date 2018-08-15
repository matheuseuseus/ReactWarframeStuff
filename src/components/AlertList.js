import React from 'react';

const AlertList = (props) => {
    const { alerts, nodes } = props;

    return(
        <div className="AlertList">
                <h1>Alerts</h1>
                { !alerts ?
                    <h1>No alert available.</h1>
                :
                    alerts.map((alert) => 
                        <div className="card" key={alert._id}>
                            <h2>
                                {nodes.toString().substring(nodes.indexOf('":"', nodes.indexOf(alert.MissionInfo.location + '":"')) + 3, 
                                                            nodes.indexOf('-', nodes.indexOf(alert.MissionInfo.location + '":"')) - 3)}
                            </h2>
                            <h3>{alert.MissionInfo.missionType}</h3>
                            Rewards<br />
                            Credits: {alert.MissionInfo.missionReward.credits}<br />
                            
                            { alert.MissionInfo.missionReward.items ?
                                alert.MissionInfo.missionReward.items.map(item => {
                                    return <span key={item}>Item: {item.substring(item.lastIndexOf("/") + 1)}</span>
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

export default AlertList;