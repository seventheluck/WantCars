import React from 'react';

class VehicleRecord extends React.Component {
    render() {
        return (
            <div className="ui segment">
                <div className="ui two column very relaxed grid">
                    <div className="column">
                        <div className="ui medium rounded image">
                            <img className="car-photo" src="./resources/Cadillac.jpeg" alt="Car Photo" />
                        </div>
                    </div>
                    <div className="column">
                        <div className="car-detail-panel">
                            <div className="car-title">
                                <input className="car-id" type="hidden" value="${item.id}" />
                                <p className="car-new-used">New</p>
                                <p className="car-year">2019</p>
                                <p className="car-brand">Ford</p>
                                <p className="car-model">Fiesta</p>
                            </div>
                            <div className="car-price">
                                <p className="price">$19999</p>
                            </div>
                            <div className="car-color">
                                <p className="car-exterior-color">Exterior Color: Blue</p>
                                <p className="car-interior-color">Interior Color: Black</p>
                            </div>
                            <div className="car-type">
                                <p className="car-type-detail">Sedan</p>
                            </div>
                            <div className="car-miles">
                                <p className="car-miles-number">0 Miles</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default VehicleRecord;