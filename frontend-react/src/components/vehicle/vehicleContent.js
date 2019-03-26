import React from 'react';
import VehicleRecord from './vehicleRecord';
import VehicleQueryPanel from './vehicleQueryPanel';
import wantcarsapi from '../../api/wantcarsapi';
import { connect } from 'react-redux';
import Pagination from '../pagination/pagination';

class VehicleContent extends React.Component {

    state = {
        id: this.props.id,
        vehicles: []
    }

    componentDidMount() {
        console.log("2");
        console.log("*****************");
        console.log(this.state);
        this.searchVehicles(1);
    }

    searchVehicles = (pageNumber) => {
        this.setState({ currentPageNumber: pageNumber});
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
                pageNumber: pageNumber - 1
            }
        }
        ).then(
            success => this.setState({ vehicles : success.data.list,
                totalNumber: this.totalRecordsToPageNumbers(success.data.totalNumber)
            }),
            err => this.displayErrors()
        );
    }

    totalRecordsToPageNumbers = (totalRecords) => {
        const pageSize = 20;
        if(totalRecords % pageSize === 0) {
            return parseInt(totalRecords / pageSize);
        } else {
            return parseInt(totalRecords / pageSize) + 1;
        }
    }

    displayErrors = () => {

    }
    render() {
        return (
            <div className="ui container">
                <VehicleQueryPanel />
                <div className="ui divider"></div>
                <div className="list" >
                <VehicleRecord id={this.state.id} vehicles={this.state.vehicles}/>
                <Pagination queryType="vehicle" totalNumber={this.state.totalNumber} currentNumber={this.state.currentPageNumber} onSubmit={this.searchVehicles} />
                </div>
            </div>
        );
    }
};

// this.props = {dealer: state.dealer};
const mapStateToProps = (state) => {
    console.log("1");
    console.log('dealerRecord mapStateToProps state start: ');
    console.log(state);
    console.log('dealerRecord mapStateToProps state end: ');
    return {id: state.selectedDealer};
}

export default connect(mapStateToProps)(VehicleContent);