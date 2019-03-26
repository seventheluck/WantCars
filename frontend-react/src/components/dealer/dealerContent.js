import React from 'react';
import DealerQueryPanel from './dealerQueryPanel';
import DealerRecord from './dealerRecord';
import '../../css/components.css';
import wantcarsapi from '../../api/wantcarsapi';
import Pagination from '../pagination/pagination';

class DealerContent extends React.Component {
    state = {
        array: null,
        errorMessage: null
    }

    componentDidMount() {
        this.search('','', 1, 20);
    }

    show = (err) => {
        this.setState({errorMessage: err.message})
    }
        // avoiding this is undefined error, use arrow function!
        search = (dealerName, city, pageNumber, pageSize) => {
            this.setState({currentPageNumber: pageNumber,
                dealerName: dealerName,
                city: city
            });
            wantcarsapi.get('/dealer/',
                {
                    params: {
                                name: dealerName,
                                location: city,
                                postCode: '98006',
                                limit: pageNumber - 1,
                                pageSize: pageSize
                            }
                }
            ).then(
                res => this.displayDealerRecords(res.data),
                err => this.show(err)
            )
        }

        totalRecordsToPageNumbers = (totalRecords) => {
            const pageSize = 20;
            if(totalRecords % pageSize === 0) {
                return parseInt(totalRecords / pageSize);
            } else {
                return parseInt(totalRecords / pageSize) + 1;
            }
        }

        displayDealerRecords(res) {
            const data = res.list;
            this.setState({totalNumber: this.totalRecordsToPageNumbers(res.totalNumber)});
            let array = [];
            for(let i = 0; i < data.length; i++) {
                const dealer = data[i];
                array.push(<DealerRecord key={dealer.id} id={dealer.id} dealerName={dealer.name} address={dealer.address.address1} />);
            }       
            this.setState({array: array});
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
                        <Pagination queryType="dealer" totalNumber={this.state.totalNumber} currentNumber={this.state.currentPageNumber} dealerName={this.state.dealerName} city={this.state.city} onSubmit={this.search} />
                    </div>
                </div>
            );
        }
    }

        
};

export default DealerContent;