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

const searchDealerReducer = (dealer={list : [], totalNumber : 0}, action) => {
    if(action.type === 'SEARCH_DEALER') {
        return action.payload;
    }

    return dealer;
}

export default combineReducers({
    dealer: dealerReducer,
    selectedDealer: selectedDealerReducer,
    searchDealer : searchDealerReducer
});