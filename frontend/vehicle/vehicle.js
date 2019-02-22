function getUrlVars() {
    const vars = {};
    const parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}

const filtersObject = {
    "dealerID": '',
    "years": [],
    "brand": [],
    "model": [],
    "isNew": [],
    "price": [],
    "exteriorColor": [],
    "interiorColor": [],
    "bodyType": [],
    "miles": []
};
(function IIFE() {
    dealerID = getUrlVars()['dealerID'];
    filtersObject['dealerID'] = dealerID;
    const filters = query('filter');
    const vehicles = query('vehicle');
    displayVehicle(vehicles);
})();


function displayVehicle(response){
    for(let index = 0; index < response.length; index++) {
        const item = response[index];
        const vehicleList = document.querySelector('.car-info-panel-list');
        vehicleList.insertAdjacentHTML('beforeend', `<li class="car-info-panel-item">
        <div class="car-photo-panel">
            <img class="car-photo" src="../resources/Cadillac.jpeg" alt="Car Photo" />
        </div>
        <div class="car-detail-panel">
            <div class="car-title">
                <input class="car-id" type="hidden" value="${item.id}"/>
                <p class="car-new-used">${newOrUsed(item.isNew)}</p>
                <p class="car-year">${item.year}</p>
                <p class="car-brand">${item.brand}</p>
                <p class="car-model">${item.model}</p>
            </div>
            <div class="car-price">
                <p class="price"> ${item.price} </p>
            </div>
            <div class="car-color">
                <p class="car-exterior-color">Exterior Color: ${item.exteriorColor}</p>
                <p class="car-interior-color">Interior Color: ${item.interiorColor}</p>
            </div>
            <div class="car-type">
                <p class="car-type-detail">${item.bodyType}</p>
            </div>
            <div class="car-miles">
                <p class="car-miles-number">${item.miles} Miles</p>
            </div>
        </div>
    </li>`);
    }
}

function newOrUsed(type){
    if(type == 'true'){
        return 'New';
    } else {
        return 'Used';
    }
}

function query(type) {
    
    const param = objectToUrl(filtersObject);
    const url = URL + type + "/" + param;
    const response = httpGet(url, null);
    return response;
}
function objectToUrl(object) {
    let result = '?';
    for(let attribute in object){
        const value = object[attribute];
        result = result + attribute + '=' + stringify(value) + '&';
    }

    return result;
};

function stringify(array) {
    if(typeof(array))
        return array;
    let result = "";
    for(let items in array){
        result = items+",";
    }
    return result.substring(0, result.length - 1);
};

