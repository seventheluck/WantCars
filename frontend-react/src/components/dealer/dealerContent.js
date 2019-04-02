import React from 'react';
import DealerQueryPanel from './dealerQueryPanel';
import DealerList from './dealerList';
import '../../css/components.css';
import { searchDealerAction, inputDealerSearchInfoAction } from '../../actions';
import Pagination from '../pagination/pagination';
import { connect } from 'react-redux';

class DealerContent extends React.Component {
    state = {
        array: null,
        errorMessage: null
    }

    componentDidMount() {
        this.props.inputDealerSearchInfoAction('', '', '98006', 1, 20);
        this.props.searchDealerAction('', '', '98006', 1, 20);
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
                        <Pagination queryType="dealer"/>
                    </div>
                </div>
            );
        }   
};

export default connect(null, { searchDealerAction,  inputDealerSearchInfoAction})(DealerContent);