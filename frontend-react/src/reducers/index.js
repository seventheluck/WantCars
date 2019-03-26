import { combineReducers } from 'redux';

const dealerReducer = () => {
    return {id : null}
};

const selectedDealerReducer = (selectedDealer=null, action) => {
    if(action.type === 'DEALER_SELECTED') {
        return action.payload;
    }

    return selectedDealer;
};

export default combineReducers({
    dealer: dealerReducer,
    selectedDealer: selectedDealerReducer
});