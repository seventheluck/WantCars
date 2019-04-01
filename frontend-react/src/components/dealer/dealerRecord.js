import React from 'react';
import { connect } from 'react-redux';
import { selectDealer } from '../../actions';
import { Link } from "react-router-dom";
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
        //console.log(this.state.id);
    }
    render() {
        console.log('dealerRecord props start: ');
        console.log(this.props);
        console.log('dealerRecord props end: ');
        return (
            <div className="ui segment">
                    <div className="ui two column very relaxed grid">
                        <div className="column">
                            <div className="ui medium rounded image">
                                <img src="./resources/dealer.jpg" alt="Dealer" />
                            </div>
                        </div>
                        <div className="column">
                            <div>
                                <h2 className="ui">{this.state.dealerName}</h2>
                                <p>Address: {this.state.address}</p>
                            </div>
                            <div>
                            <Link to={{pathname : "/vehicle", state: { id : this.state.id}}} >
                                <button className="fluid red ui button" 
                                // create an action of selectedDealer
                                    onClick={() => this.props.selectDealer(this.state.id)}>
                                    Check Inventory
                                </button>
                            </Link>
                                
                                {/* <Link to="/vehicle">
                                    Check Inventory
                                </Link> */}
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
};
// this.props = {dealer: state.dealer};
const mapStateToProps = (state) => {
    return {dealer: state.selectedDealer};
}

const mapDispatchToProps = { 
    selectDealer
}

export default connect(mapStateToProps,mapDispatchToProps)(DealerRecord);