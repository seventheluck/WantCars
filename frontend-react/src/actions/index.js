export const selectedDealer = (id) => {
    console.log('selectedDealer action created!');
    return {
        type: 'DEALER_SELECTED',
        payload: id
    };
};