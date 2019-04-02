import React from 'react';
import { searchVehicleFilterAction, searchVehicleAction } from '../../actions';
import { connect } from 'react-redux';

class Filter extends React.Component {

    componentDidMount() {
        if(this.props.id !== null) {
            const param = { dealerID : this.props.id };
            this.props.searchVehicleFilterAction(param);
            this.props.searchVehicleAction(param);
        }
    }

    displayError = (message) => {

    }

    display = (data) => {
        const blocks = [];

        if(data !== null) {
            blocks.push(this.displayBlock('Year', data['years']));
            blocks.push(this.displayBlock('Brand', data['brand']));
            blocks.push(this.displayBlock('Model', data['model']));
            blocks.push(this.displayBlock('Type', data['isNew']));
            blocks.push(this.displayBlock('Price', data['price']));
            blocks.push(this.displayBlock('Exterior Color', data['exteriorColor']));
            blocks.push(this.displayBlock('Interior Color', data['interiorColor']));
            blocks.push(this.displayBlock('Body Type', data['bodyType']));
            blocks.push(this.displayBlock('Mile', data['miles']));
        }
        
        return blocks;
    }

    displayBlock = (name, items) => {
        const allItems = [];
        if(items !== null && items !== undefined) {
            items.map(
                item => allItems.push(this.generateItems(name, item))
            )
        }
        
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
                {this.display(this.props.filterObject)}
            </div>
            </div>
        );
    }
};


// this.props = {dealer: state.dealer};
const mapStateToProps = (state) => {
    return {id: state.selectedDealer, filterObject : state.vehicleFilterResponse};
}

const mapDispatchToProps = {
    searchVehicleFilterAction,
    searchVehicleAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);