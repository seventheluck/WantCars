import React from 'react';
import DealerQueryPanel from './dealerQueryPanel';
import DealerList from './dealerList';
import DealerRecord from './dealerRecord';
import '../../css/components.css';
import { searchDealerAction } from '../../actions';
import wantcarsapi from '../../api/wantcarsapi';
import Pagination from '../pagination/pagination';
import { connect } from 'react-redux';

class DealerContent extends React.Component {
    state = {
        array: null,
        errorMessage: null
    }

    componentDidMount() {
        this.props.searchDealerAction('', '', '98006', 1, 20);
    }

    show = (err) => {
        this.setState({errorMessage: err.message})
    }

        totalRecordsToPageNumbers = (totalRecords) => {
            const pageSize = 20;
            if(totalRecords % pageSize === 0) {
                return parseInt(totalRecords / pageSize);
            } else {
                return parseInt(totalRecords / pageSize) + 1;
            }
        }

    render() {
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
                        <DealerList />
                        <Pagination queryType="dealer" totalNumber={this.state.totalNumber} currentNumber={this.state.currentPageNumber} dealerName={this.state.dealerName} city={this.state.city} onSubmit={this.search} />
                    </div>
                </div>
            );
        }   
};

export default connect(null, { searchDealerAction })(DealerContent);