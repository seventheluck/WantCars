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
    if(action.type === 'FETCH_DATA_ERROR') {
        return action.payload;
    } else if (action.type === 'SEARCH_DEALER') {
        return null;
    } else if (action.type === 'SEARCH_VEHICLE') {
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

const searchVehicleReducer = (vehicleResponse={ list: null, totalNumber : 0}, action) => {
    if(action.type === 'SEARCH_VEHICLE') {
        return action.payload;
    }

    return vehicleResponse;
}

const searchVehicleFilterReducer = (vehicleFilterResponse={}, action) => {
    if(action.type === 'SEARCH_VEHICLE_FILTER') {
        return action.payload;
    }

    return vehicleFilterResponse;
}

const checkBoxReducer = (checkBoxParam={}, action) => {
    if(action.type === 'CHECK_BOX_CHANGED') {
        return action.payload;
    }

    return checkBoxParam;
}

export default combineReducers({
    dealer: dealerReducer,
    selectedDealer: selectedDealerReducer,
    searchDealer : searchDealerReducer,
    searchDealerError : searchDealerErrorReducer,
    inputDealerSearchInfo : inputDealerSearchInfoReducer,
    vehicleResponse : searchVehicleReducer,
    vehicleFilterResponse : searchVehicleFilterReducer,
    checkBoxParam: checkBoxReducer
});