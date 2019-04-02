import React from 'react';
import VehicleQueryPanel from './vehicleQueryPanel';
import VehicleList from './vehicleList';
import Pagination from '../pagination/pagination';

class VehicleContent extends React.Component {

    totalRecordsToPageNumbers = (totalRecords) => {
        const pageSize = 20;
        if(totalRecords % pageSize === 0) {
            return parseInt(totalRecords / pageSize);
        } else {
            return parseInt(totalRecords / pageSize) + 1;
        }
    }

    render() {
        return (
            <div className="ui container">
                <VehicleQueryPanel />
                <div className="ui divider"></div>
                <div className="list" >
                    <VehicleList />
                    <Pagination queryType="vehicle" />
                </div>
            </div>
        );
    }
};

export default VehicleContent;