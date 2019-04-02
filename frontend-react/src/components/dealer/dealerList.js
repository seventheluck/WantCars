import React from 'react';
import { connect } from 'react-redux';
import DealerRecord from './dealerRecord';

class DealerList extends React.Component {
    // changing of this.props.list will not cause the changing of list.
    // state = {
    //     list : this.props.list
    // }
    displayDealerRecords(list) {
        if(list === null) {
            return (
                    <div className="ui segment">
                        <div className="ui active inverted dimmer">
                            <div className="ui large loader">Loading</div>
                        </div>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
            );
        } else {
            const data = list;
            const array = [];
            for(let i = 0; i < data.length; i++) {
                const dealer = data[i];
                array.push(<DealerRecord key={dealer.id} id={dealer.id} dealerName={dealer.name} address={dealer.address.address1} />);
            }       
            return (
                <div className="list">
                    {array}
                </div>
            );
        }
    }
    displaySearchDealerError(errorMessage) {
        return (
            <div className="ui negative message">
                <i className="close icon"></i>
                <div className="header">
                    We're sorry: {errorMessage}
                </div>
                <p>
                    You can have a try minutes later!
                </p>
            </div>
        );
    }
    render() {
        if(this.props.searchDealerError !== null) {
            return this.displaySearchDealerError(this.props.searchDealerError);
        } else {
            return this.displayDealerRecords(this.props.dealerList);
        }
        
    }
}

const mapStateToProps =  (state) => {
    return { 
        dealerList : state.searchDealer.list,
        searchDealerError : state.searchDealerError  
    }
}
export default connect(mapStateToProps)(DealerList);