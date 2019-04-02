import React from 'react';
import { connect } from 'react-redux';
import { checkBoxAction, searchVehicleAction, searchVehicleFilterAction } from '../../actions';

class CheckBox extends React.Component {
    state = {
        checked : false
    }

    toggleCheckbox = (name, item) => {
        const obj = {};
        const result = Object.assign(obj, this.props.checkBoxParam);
        if(!this.state.checked) {
            if(result[name] !== undefined && result[name] !== null) {
                result[name] = [...result[name], item];
            } else {
                const newArray = [item];
                result[name] = newArray;
            }
        } else {
            if(result[name] !== undefined && result[name] !== null) {
                result[name] = result[name].filter(value => {
                    return value!==item;
                });
            }
        }
        this.props.checkBoxAction(result);
        this.setState({ checked : !this.state.checked });
        const dealerId = { dealerID : this.props.id };
        const param = Object.assign(dealerId, result);
        this.props.searchVehicleFilterAction(param);
        this.props.searchVehicleAction(param, 20, 1);
    }

    render() {
        const key = this.props.name + '_' + this.props.item;
        const item = this.props.name === 'isNew' ? ( this.props.item === '1' ? 'New' : 'Used') : this.props.item;
        return(
            <div key={key} className="item">
                        <div className="ui checkbox">
                                <input type="checkbox" name={item} onChange={() => this.toggleCheckbox(this.props.name, this.props.item)} />
                                <label>
                                    <h4 className="ui grey inverted header">{item}</h4>
                                </label>
                        </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { id : state.selectedDealer, checkBoxParam : state.checkBoxParam };
}

const mapDispatchToProps = {
    checkBoxAction,
    searchVehicleAction,
    searchVehicleFilterAction
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckBox);