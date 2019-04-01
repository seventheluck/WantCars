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

const searchDealerReducer = (dealer={list : null, totalNumber : 0}, action) => {
    if(action.type === 'SEARCH_DEALER') {
        return action.payload;
    }

    return dealer;
}

const searchDealerErrorReducer = (error=null, action) => {
    if(action.type === 'SEARCH_DEALER_FETCH_DATA_ERROR') {
        return action.payload;
    } else if (action.type === 'SEARCH_DEALER') {
        return null;
    }

    return error;
}

const inputDealerSearchInfoReducer = (info=null, action) => {
    if(action.type === 'INPUT_DEALER_SEARCH_INFO') {
        return action.payload;
    }

    return info;
}

export default combineReducers({
    dealer: dealerReducer,
    selectedDealer: selectedDealerReducer,
    searchDealer : searchDealerReducer,
    searchDealerError : searchDealerErrorReducer,
    inputDealerSearchInfo : inputDealerSearchInfoReducer
});