import React from 'react';

class VehicleRecord extends React.Component {
    state = {
        dealerID: this.props.id,
        vehicles: this.props.vehicles,
    }

    render() {
        return (
                <div className="ui items">
                    {this.display(this.props.vehicles)}
                </div>
        );
    }

    newOrUsed = (flag) => {
        if(flag) return 'New';
        else return 'Used';
    }

    vehicle= (vehicle) => {
        return (
            
                <div key={vehicle.id} className="ui raised very padded text container segment">
                <div className="ui grid">
                <div className="ten wide column">
                    <div className="ui raised segment">
                        <a className="ui red ribbon label">{this.newOrUsed(vehicle.isNew)}</a>
                        <div className="ui medium rounded image">
                            <img src="./resources/Cadillac.jpeg" alt="Photo" description="car"/>
                        </div>
                    </div>
                </div>
                <div className="six wide column">
                <div className="content">
                        <h3 className="ui header">{vehicle.year} {vehicle.brand} {vehicle.model}</h3>
                        <div className="ui divider"></div>
                        <div className="meta">
                            <span className="price">${vehicle.price}</span>
                        </div>
                        <div className="description">
                        <span >Miles: {vehicle.miles}</span>
                        <br/>
                        <span >Body Type: {vehicle.bodyType}</span>
                        <br/>
                        <span >Exterior Color: {vehicle.exteriorColor}</span>
                        <br/>
                        <span >Interior Color: {vehicle.interiorColor}</span>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }

    display = (vehicles) => {
        const vehicleRecords = [];
        vehicles.map(
            oneVehicle => vehicleRecords.push(this.vehicle(oneVehicle))
        );
        return vehicleRecords;
    }
};

export default VehicleRecord;