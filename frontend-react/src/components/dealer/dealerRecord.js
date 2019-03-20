import React from 'react';

class DealerRecord extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            dealerName: props.dealerName,
            address: props.address
        }
    }
    searchVehicle = dealerID => {
        console.log(this.state.id);
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
                                <button className="ui button" onClick={this.searchVehicle}>{this.state.dealerName}</button>
                                <input type="hidden"  value="id"/>
                                <p>Address: {this.state.address}</p>
                            </div>
                        </div>
                    </div>
            </div>
        );
        // return (
            
        //         <div className="item">
        //             <div className="image">
        //             <img src="./resources/dealer.jpg" alt="Dealer" />
        //             </div>
        //             <div className="content">
        //                 <button className="header">Header</button>
        //                 <div className="meta">
        //                     <span>Description</span>
        //                 </div>
        //                 <div className="description">
        //                     <p></p>
        //                 </div>
        //                 <div className="extra">
        //                     Additional Details
        //                 </div>
        //             </div>
        //         </div>
        // );
    }
};

export default DealerRecord;