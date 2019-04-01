import React from 'react';
import { connect } from 'react-redux';
import { searchDealerAction, inputDealerSearchInfoAction } from '../../actions';

class Pagination extends React.Component {

    onClickPageNumber = (index) => {
        if(this.props.queryType === 'dealer') {
            this.props.searchDealerAction(this.props.dealerName, this.props.city, this.props.postCode, index, this.props.pageSize);
            this.props.inputDealerSearchInfoAction(this.props.dealerName, this.props.city, this.props.postCode, index, this.props.pageSize);
        } else if (this.props.queryType === 'vehicle') {
            this.props.onSubmit(index);
        } else {

        }
            
    }

    pageItem = (index) => {
        return (
            // onClick={this.props.onSubmit('','',index, 20)}  is wrong!
            <a key={index} className={index === this.props.pageNumber ? "active item" : "item"} onClick={ () => this.onClickPageNumber(index)} > 
                {index}
            </a>
        );
    }

    apostrophe = () => {
        return (
            <div className="disabled item">
                ...
            </div>
        );
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
        const totalNumber = this.totalRecordsToPageNumbers(this.props.totalNumber);
        const currentNumber = this.props.pageNumber;
        const pageContent = [];

        if(totalNumber <= 16) {
            for( let i = 1; i <= totalNumber; i++) {
                pageContent.push(this.pageItem(i));
            }
        } else {

            if(currentNumber <= 7) {
                for( let i = 1; i <= totalNumber; i++) {
                    if(i < 9) {
                        pageContent.push(this.pageItem(i));
                    } else if (i === 9) {
                        pageContent.push(this.apostrophe());
                    } else if (i >= totalNumber - 9) {
                        pageContent.push(this.pageItem(i));                      
                    }
                }
            } else {
                for( let i = 1; i <= 4; i++) {
                        pageContent.push(this.pageItem(i));
                }

                pageContent.push(this.apostrophe());               

                for( let i = currentNumber - 2 ; i <= currentNumber + 2 && i <= totalNumber; i++) {
                    pageContent.push(this.pageItem(i));
                }
                if(currentNumber + 2 < totalNumber - 1) {
                    pageContent.push(this.apostrophe()); 
                    pageContent.push(this.pageItem(totalNumber));
                } else if(currentNumber + 2 === totalNumber - 1){
                    pageContent.push(this.pageItem(totalNumber));
                }
            }
        }
        
        return (
                <div className="ui pagination menu">
                    {pageContent}
                </div>
        );
    }
}

const mapStateToProps = (state) => {
    if(state.inputDealerSearchInfo === null) {
        return {
            dealerName : '',
            city : '',
            postCode : '',
            pageNumber : 1,
            pageSize : 20,
            totalNumber : 0           
        }
    } else {
        return { 
            dealerName : state.inputDealerSearchInfo.dealerName,
            city : state.inputDealerSearchInfo.city,
            postCode : state.inputDealerSearchInfo.postCode,
            pageNumber : state.inputDealerSearchInfo.pageNumber,
            pageSize : state.inputDealerSearchInfo.pageSize,
            // total records number, not total page number
            totalNumber : state.searchDealer.totalNumber
         };
    }
}

const mapDispatchToProps = {
    searchDealerAction,
    inputDealerSearchInfoAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);