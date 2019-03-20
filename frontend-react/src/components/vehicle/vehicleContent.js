import React from 'react';
import VehicleRecord from './vehicleRecord';
import VehicleQueryPanel from './vehicleQueryPanel';

class VehicleContent extends React.Component {
    render() {
        return (
            <div className="ui container">
                <VehicleQueryPanel />
                <div className="ui divider"></div>
                <div className="list">
                <VehicleRecord />
                </div>
            </div>
        );
    }
};

export default VehicleContent;