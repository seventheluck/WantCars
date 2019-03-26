import React from 'react';

class Pagination extends React.Component {
    state = {
        currentPageNumber: this.props.currentNumber,
        totalPageNumber: this.props.totalNumber,
        dealerName: this.props.dealerName,
        city: this.props.city
    }

    onClickPageNumber = (dealerName, city, index, type) => {
        if(type === 'dealer') {
            this.props.onSubmit(dealerName, city,index, 20);
        } else if (type === 'vehicle') {
            this.props.onSubmit(index);
        }
            
    }

    pageItem = (index) => {
        return (
            // onClick={this.props.onSubmit('','',index, 20)}  is wrong!
            <a key={index} className={index === this.props.currentNumber ? "active item" : "item"} onClick={ () => this.onClickPageNumber(this.props.dealerName, this.props.city, index, this.props.queryType)} > 
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

    render() {
        const totalNumber = this.props.totalNumber;
        const currentNumber = this.props.currentNumber;
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

export default Pagination;