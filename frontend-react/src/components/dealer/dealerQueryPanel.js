import React from 'react';
import { connect } from 'react-redux';
import { searchDealerAction } from '../../actions';

class DealerQueryPanel extends React.Component {
    
        state = {
            dealerName: '',
            city: ''
        }
    
    onSearchSubmit = event => {
        event.preventDefault();
        this.props.searchDealerAction(this.state.dealerName, this.state.city, '98006', 1, 20);
    }
    render() {
        return (
            <div className="ui container dealer-container">
                <div className="ui segment">
                    <form className="ui form" onSubmit={this.onSearchSubmit}>
                            <div className="field">
                                <label>Dealer Name</label>
                                <input type="text" value={this.state.dealerName} placeholder="Please input dealer name" onChange={event => this.setState({dealerName: event.target.value})} />
                            </div>
                            <div className="field">
                                <label>City</label>
                                <input type="text" value={this.state.city} placeholder="Please input city" onChange={event => this.setState({city: event.target.value})} />
                            </div>
                            <div>
                                <button className="positive ui button" onClick={this.onSearchSubmit}>Search</button>
                            </div>
                    </form>
                <p />
                </div>
                <div className="ui divider"></div>
            </div>
        );
    }
    
};

const mapDispatchToProps = {
    searchDealerAction
}

export default connect(null, mapDispatchToProps)(DealerQueryPanel);