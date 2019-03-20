import React from 'react';
import DealerRecord from './dealerRecord';
import axios from 'axios';
import URL from '../configue';

class DealerQueryPanel extends React.Component {
    state = {
        dealerName: '',
        city: ''
    }
    displayDealerRecords(data) {
        
    }
    search = () => {
        axios.get(URL + '/dealer/?name=g&location=seattle&postCode=98006&limit=10&pageSize=20').then(
            res => this.displayDealerRecords(res.data),
            err => console.log(err)
        )
    }
    
    render() {
        return (
            <div className="ui container dealer-container">
                <div className="ui segment">
                    <div className="ui form">
                        <div className="field">
                            <label>Dealer Name</label>
                            <input type="text" value={this.state.dealerName} placeholder="Please input dealer name" onChange={event => this.setState({dealerName: event.target.value})} />
                        </div>
                        <div className="field">
                            <label>City</label>
                            <input type="text" value={this.state.city} placeholder="Please input city" onChange={event => this.setState({city: event.target.value})} />
                        </div>
                        <div>
                            <button className="positive ui button" onClick={this.search}>Search</button>
                        </div>
                    </div>
                <p />
                </div>
                <div className="ui divider"></div>
                <div className="list">
                    <DealerRecord dealerName="Ford Bellevue Dealer" address="575 Bellevue Square, Bellevue, WA 98004"/>
                </div>
            </div>
        );
    }
    
};

export default DealerQueryPanel;