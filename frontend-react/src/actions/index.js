import wantcarsapi from '../api/wantcarsapi';

export const selectDealer = (id) => {
    return {
        type: 'DEALER_SELECTED',
        payload: id
    };
};

export const searchDealerAction = (dealerName, city, postCode, pageNumber, pageSize) => {
    return function(dispatch){
        wantcarsapi.get('/dealer/',
                {
                    params: {
                                name: dealerName,
                                location: city,
                                postCode: postCode,
                                limit: pageNumber - 1,
                                pageSize: pageSize
                            }
                }
            ).then(
                res => dispatch({ type: 'SEARCH_DEALER', payload: res.data }),
                err => dispatch({ type: 'FETCH_DATA_ERROR', payload: err.message})
            )
    }
}

export const inputDealerSearchInfoAction = (dealerName, city, postCode, pageNumber, pageSize) => {
    return {
        type: 'INPUT_DEALER_SEARCH_INFO',
        payload: { 
            dealerName : dealerName,
            city : city,
            postCode : postCode,
            pageNumber : pageNumber,
            pageSize : pageSize
        }
    }
}


export const searchVehicleAction = ( param,
        pageSize=20,
        pageNumber=1
    ) => {
    return function(dispatch) {
        param.pageSize = pageSize;
        param.pageNumber = pageNumber - 1;
        wantcarsapi.get('/vehicle/',
        {
            params: param
        }
        ).then(
            res => dispatch({ type: 'SEARCH_VEHICLE', payload : res.data }),
            err => dispatch({ type: 'FETCH_DATA_ERROR', payload : err.message})
        );
    }
}

export const searchVehicleFilterAction = ( param
    ) => {
       return function(dispatch) {
            wantcarsapi.get('/filter/',
            { params : param }
            ).then(
                res => dispatch({ type: 'SEARCH_VEHICLE_FILTER', payload : res.data }),
                err => dispatch({ type: 'FETCH_DATA_ERROR', payload : err.message})
            );
       }
}