import React from 'react';
import { connect } from 'react-redux';
import { searchVehicleAction } from '../../actions';
import VehicleRecord from './vehicleRecord';

class VehicleList extends React.Component {
    
    componentDidMount() {
        if(this.props.id !== null) {
            const param = { dealerID : this.props.id };
            this.props.searchVehicleAction(param);
        }
        
    }

    display = (vehicles) => {
        const vehicleRecords = [];
        if(vehicles !== null && vehicles.list !== null) {
            vehicles.list.map(
                oneVehicle => vehicleRecords.push(<VehicleRecord key={oneVehicle.id} vehicle={oneVehicle}/>)
            );
        }
       
        return vehicleRecords;
    }

    render() {
        return (
            <div className="ui items">
                {this.display(this.props.vehicleResponse)}
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {id: state.selectedDealer, vehicleResponse : state.vehicleResponse };
}

const mapDispatchToProps = {
    searchVehicleAction
}

export default connect(mapStateToProps, mapDispatchToProps)(VehicleList);