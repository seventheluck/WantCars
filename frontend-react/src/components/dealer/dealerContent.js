import React from 'react';
import DealerQueryPanel from './dealerQueryPanel';
import DealerRecord from './dealerRecord';
import components from '../../css/components.css';
import axios from 'axios';
import URL from '../configue';

class DealerContent extends React.Component {
    state = {
        array: null,
        errorMessage: null
    }

    componentDidMount() {
        this.search('','');
    }

    show = (err) => {
        this.setState({errorMessage: err.message})
    }
        // avliding this is undefined error, use arrow function!
        search = (dealerName, city) => {
            const url = URL + '/dealer/?name=' + dealerName +'&location='+ city+'&postCode=98006&limit=0&pageSize=20';
            axios.get(url).then(
                res => this.displayDealerRecords(res.data),
                err => this.show(err)
            )
        }
        displayDealerRecords(data) {
            window.navigator.geolocation.getCurrentPosition(
                success => {
                    let array = [];
                    for(let i = 0; i < data.length; i++) {
                        const dealer = data[i];
                        array.push(<DealerRecord key={dealer.id} id={dealer.id} dealerName={dealer.name} address={dealer.address.address1} />);
                    }
                    this.setState({array: array});
                }
            );
            
        }
    render() {
        if(!this.state.array && !this.state.errorMessage) {
            return (
                <div className="ui  container dealer-container">
                    {/* <div className="ui centered large leaderboard test ad" data-text="Wantcars">
                    </div> */}
                    <div className="ui breadcrumb">
                    <div className="section">Home</div>
                        <div className="divider"> / </div>
                        <div className="active section">Dealer</div>
                    </div>
                    <DealerQueryPanel onSubmit={this.search}/>
                    <div className="ui segment">
                        <div className="ui active inverted dimmer">
                            <div className="ui large loader">Loading</div>
                        </div>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                </div>
            );
        } else if(!this.state.array){
            return (
                <div className="ui  container dealer-container">
                    {/* <div className="ui centered large leaderboard test ad" data-text="Wantcars">
                    </div> */}
                    <div className="ui breadcrumb">
                    <div className="section">Home</div>
                        <div className="divider"> / </div>
                        <div className="active section">Dealer</div>
                    </div>
                    <DealerQueryPanel onSubmit={this.search}/>
                    <div className="ui segment">
                    <div className="list">
                        {this.state.errorMessage}
                    </div>
                    </div>
                </div>
                
            );
        } else {
            return (
                <div className="ui  container dealer-container">
                    {/* <div className="ui leaderboard test ad" data-text="Wantcars">
                    </div> */}
                    <div className="ui breadcrumb">
                    <div className="section">Home</div>
                        <div className="divider"> / </div>
                        <div className="active section">Dealer</div>
                    </div>
                    <DealerQueryPanel onSubmit={this.search}/>
                    <div className="ui segment">
                        <div className="list">
                            {this.state.array}
                        </div>
                    </div>
                    <div className="ui pagination menu">
                        <a className="active item">
                            1
                        </a>
                        <div className="disabled item">
                            ...
                        </div>
                        <a className="item">
                            10
                        </a>
                        <a className="item">
                            11
                        </a>
                        <a className="item">
                            12
                        </a>
                    </div>
                </div>
            );
        }
    }

        
};

export default DealerContent;