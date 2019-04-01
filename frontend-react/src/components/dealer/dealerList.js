import React from 'react';
import { connect } from 'react-redux';
import DealerRecord from './dealerRecord';

class DealerList extends React.Component {
    // changing of this.props.list will not cause the changing of list.
    // state = {
    //     list : this.props.list
    // }
    displayDealerRecords(list) {
        if(list === undefined) {
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

    render() {
        return this.displayDealerRecords(this.props.dealerList);
    }
}

const mapStateToProps =  (state) => {
    return { dealerList : state.searchDealer.list }
}
export default connect(mapStateToProps)(DealerList);