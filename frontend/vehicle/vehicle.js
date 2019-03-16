function getUrlVars() {
    const vars = {};
    const parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}

const lableMap = {
    "Year": "years",
    "Brand": "brand",
    "Model": "model",
    "Type": "isNew",
    "Price": "price",
    "Exterior Color": "exteriorColor",
    "Interior Color": "interiorColor",
    "Body Type": "bodyType",
    "Miles": "miles"
}

const customerFilterObject = {
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
//init

const serverFilterObject = {
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
// combined
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
    refresh(filtersObject);
})();

function refresh(paramObject) {
    dealerID = getUrlVars()['dealerID'];
    filtersObject['dealerID'] = dealerID;
    customerFilterObject['dealerID'] = dealerID;
    const param = objectToUrl(paramObject);
    const filterUrl = URL + 'filter' + "/" + param;
    const vehicleUrl = URL + 'vehicle' + "/" + param;

    //const filters = query('filter');
    // const vehicles = query('vehicle');
    // displayVehicle(vehicles);
    queryAndDisplayFilter(filterUrl);
    queryAndDisplayVehicle(vehicleUrl);
}

function refreshVehicles(paramObject) {
    dealerID = getUrlVars()['dealerID'];
    filtersObject['dealerID'] = dealerID;
    customerFilterObject['dealerID'] = dealerID;
    const param = objectToUrl(paramObject);
    const vehicleUrl = URL + 'vehicle' + "/" + param;

    //const filters = query('filter');
    // const vehicles = query('vehicle');
    // displayVehicle(vehicles);
    //queryAndDisplayFilter(filterUrl);
    queryAndDisplayVehicle(vehicleUrl);
}

function refreshFilters(paramObject) {
    dealerID = getUrlVars()['dealerID'];
    filtersObject['dealerID'] = dealerID;
    customerFilterObject['dealerID'] = dealerID;
    const param = objectToUrl(paramObject);
    const filterUrl = URL + 'filter' + "/" + param;

    //const filters = query('filter');
    // const vehicles = query('vehicle');
    // displayVehicle(vehicles);
    queryAndDisplayFilter(filterUrl);
    //queryAndDisplayVehicle(vehicleUrl);
}

function queryAndDisplayFilter(url) {
    fetch(url, {
        method: "GET",
        // body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
        // credentials: "include"
    }).then(function (response) {
        response.json().then(
            function (json) {
                combine(json, customerFilterObject);
                displayFilter(json);
            });
    }, function (error) {
        displayErrorMessages(error);
    }).then(() => addListener());
}

function queryAndDisplayVehicle(url) {
    fetch(url, {
        method: "GET",
        // body: JSON.stringify(data),
        // headers: {
        //     "Content-Type": "application/json"
        // },
        credentials: "same-origin"
    }).then(function (response) {
        response.json().then(function (json) {
            displayVehicle(json);
        });
    }, function (error) {
        displayErrorMessages(error);
    })
}

function displayFilter(response, name) {
    const filtersBlock = document.querySelector('.filters-block');
    removeChildren(filtersBlock);
    const years = response['years'];
    filtersBlock.insertAdjacentHTML('beforeend', displayFilterItems('Year', years));
    const brands = response['brand'];
    filtersBlock.insertAdjacentHTML('beforeend', displayFilterItems('Brand', brands));
    const models = response['model'];
    filtersBlock.insertAdjacentHTML('beforeend', displayFilterItems('Model', models));
    const isnew = response['isNew'];
    filtersBlock.insertAdjacentHTML('beforeend', displayFilterItems('Type', isnew));
    const price = response['price'];
    filtersBlock.insertAdjacentHTML('beforeend', displayFilterItems('Price', price));
    const excolor = response['exteriorColor'];
    filtersBlock.insertAdjacentHTML('beforeend', displayFilterItems('Exterior Color', excolor));
    const incolor = response['interiorColor'];
    filtersBlock.insertAdjacentHTML('beforeend', displayFilterItems('Interior Color', incolor));
    const bodyType = response['bodyType'];
    filtersBlock.insertAdjacentHTML('beforeend', displayFilterItems('Body Type', bodyType));
    const miles = response['miles'];
    filtersBlock.insertAdjacentHTML('beforeend', displayFilterItems('Miles', miles));
}

function displayFilterItems(name, list) {
    let htmlContent = '';
    const div = `<li class="filter-block">
    <div class="filter-title">
        <p>${name}</p>
    </div>`
    if (list == null) {
        htmlContent = div + `</li>`;
    } else {
        htmlContent = div + `
            <ul class="checkbox-items">
                ${list.map(item => yearItem(item)).join('')}
            </ul>
        </li>`;
    }

    return htmlContent;
}

function yearItem(item) {
    return `<li class="checkbox-item">
    <div class="checkbox-box">
        <input type="checkbox">${item}</input>
    </div>
</li>`;
}

function displayVehicle(response) {
    const vehicleList = document.querySelector('.car-info-panel-list');
    removeChildren(vehicleList);
    for (let index = 0; index < response.length; index++) {
        const item = response[index];
        
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

function newOrUsed(type) {
    if (type == 1) {
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
    for (let attribute in object) {
        const value = object[attribute];
        result = result + attribute + '=' + stringify(value) + '&';
    }

    return result.substring(0, result.length - 1) + "&pageSize=20&pageNumber=0";
};

function stringify(array) {
    if (typeof (array))
        return array;
    let result = "";
    for (let items in array) {
        result = items + ",";
    }
    return result.substring(0, result.length - 1);
};

// event ==> checkbox-box
//  <div class="checkbox-box">
//  <input type="checkbox">${item}</input>
//  </div>
function clickFilters(event, source) {
    const filter = event.parentElement.parentElement.parentElement;
    const nameField = filter.querySelector('p');
    const name = nameField.innerText;
    const filterContent = event.innerText;
    const arr = customerFilterObject[lableMap[name]];
    let flag = false;
    if(source === 'input') {
        flag = event.querySelector('input').checked;
    } else {
        flag = !event.querySelector('input').checked;
    }
    if(flag) {
        arr.push(filterContent);
        event.querySelector('input').checked = true;
    } else {
        //arr.push(filterContent);
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === filterContent) {
                arr.splice(i, 1);
                break;
            }
        }
        event.querySelector('input').checked = false;
    }
    refreshVehicles(customerFilterObject);
}

function addListener() {
    const checkBox = document.querySelectorAll('.checkbox-box');
    for (let i = 0; i < checkBox.length; i++) {
        checkBox[i].addEventListener('click', (e) => {
            if ("INPUT" === e.target.nodeName) {
                clickFilters(e.target.parentElement, "input");
            } else {
                clickFilters(e.target, 'others');
            }
        });
    }
}
// filtersBlock.addEventListener('click', e => clickFilters(e));


function removeChildren(element) {
    const nodes = element.childNodes;
    for(let i = nodes.length - 1; i >= 0; i--) {
        element.removeChild(nodes[i]);
    }
}

function combine(responseObject, customerObject) {
    for(let prop in responseObject) {
        const resArr = responseObject[prop];
        const cusArr = customerObject[prop];
    }
}