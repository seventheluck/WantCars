import React from 'react';
import VehicleRecord from './vehicleRecord';
import VehicleQueryPanel from './vehicleQueryPanel';
import wantcarsapi from '../api/wantcarsapi';

class VehicleContent extends React.Component {

    state = {
        id: this.props.id,
        vehicles: []
    }

    componentDidMount() {
        this.searchVehicles();
    }

    searchVehicles = () => {
        wantcarsapi.get('/vehicle/',
        {
            params: {
                dealerID: this.props.id,
                years: [],
                brand: [],
                model: [],
                isNew: [],
                price: [],
                exteriorColor: [],
                interiorColor: [],
                bodyType: [],
                miles: [],
                pageSize: 20,
                pageNumber: 0
            }
        }
        ).then(
            success => this.setState({ vehicles : success.data}),
            err => this.displayErrors()
        );
    }

    render() {
        return (
            <div className="ui container">
                <VehicleQueryPanel />
                <div className="ui divider"></div>
                <div className="list" key={this.state.vehicles.length}>
                {/* Did not update component as the state changed when component as the element */}
                <VehicleRecord id={this.state.id} vehicles={this.state.vehicles}/>
                </div>
            </div>
        );
    }
};

export default VehicleContent;