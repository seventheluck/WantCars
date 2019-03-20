import React from 'react';

class DealerRecord extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dealerName: props.dealerName,
            address: props.address
        }
    }
    render() {
        return (
            <div className="ui segment">
                    <div className="ui two column very relaxed grid">
                        <div className="column">
                            <div className="ui medium rounded image">
                                <img src="./resources/dealer.jpg" alt="Dealer" />
                            </div>
                        </div>
                        <div className="column">
                            <div className="dealer-info">
                                <p className="dealer-name">Name: {this.state.dealerName}</p>
                                <input type="hidden"  value="id"/>
                                <p>Address: {this.state.address}</p>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
};

export default DealerRecord;