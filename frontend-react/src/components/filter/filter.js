import React from 'react';
import wantcarsapi from '../../api/wantcarsapi';
import { connect } from 'react-redux';

class Filter extends React.Component {

    state = {
        id : this.props.id
    }

    componentDidMount() {
        wantcarsapi.get('/filter/',
            { params : {
                    dealerID: this.state.id,
                    years: [],
                    brand: [],
                    model: [],
                    isNew: [],
                    price: [],
                    exteriorColor: [],
                    interiorColor: [],
                    bodyType: [],
                    miles: []
                }
            }
        ).then(
            success => (this.display(success.data)),
            error => (this.displayError(error.message))
        );
    }

    displayError = (message) => {

    }

    display = (data) => {
        const blocks = [];
        blocks.push(this.displayBlock('Year', data['years']));
        blocks.push(this.displayBlock('Brand', data['brand']));
        blocks.push(this.displayBlock('Model', data['model']));
        blocks.push(this.displayBlock('Type', data['isNew']));
        blocks.push(this.displayBlock('Price', data['price']));
        blocks.push(this.displayBlock('Exterior Color', data['exteriorColor']));
        blocks.push(this.displayBlock('Interior Color', data['interiorColor']));
        blocks.push(this.displayBlock('Body Type', data['bodyType']));
        blocks.push(this.displayBlock('Mile', data['miles']));
        this.setState({
            blocks : blocks
        })
    }

    displayBlock = (name, items) => {
        const allItems = [];
        items.map(
            item => allItems.push(this.generateItems(name, item))
        )
        return this.generateBlock(name, allItems);
    }

    generateBlock = (name, items) => {
        return (
            <div key={name}>
                <div className="header">{name}</div>
                <div className="menu">
                    <a className="item" >
                    <div className="ui list">
                     {items}
                    </div>
                    </a>
                </div>
            </div>
        );
    }

    generateItems = (name, item) => {
        const key = name + '_' + item;
        return (
            <div key={key} className="item">
                        <div className="ui checkbox">
                                <input type="checkbox" name="{item}" />
                                <label>
                                <h4 className="ui grey inverted header">{item}</h4>
                                </label>
                        </div>
            </div>
        );
    }

    render() {
        return (
            <div className="ui vertical inverted sidebar menu left overlay visible ">
            <div className="item">
                {this.state.blocks}
            </div>
            </div>
        );
    }
};


// this.props = {dealer: state.dealer};
const mapStateToProps = (state) => {
    console.log("1");
    console.log('dealerRecord mapStateToProps state start: ');
    console.log(state);
    console.log('dealerRecord mapStateToProps state end: ');
    return {id: state.selectedDealer};
}

export default connect(mapStateToProps)(Filter);