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
    const param = objectToUrl(filtersObject);
    const filterUrl = URL + 'filter' + "/" + param;
    const vehicleUrl = URL + 'vehicle' + "/" + param;

    //const filters = query('filter');
    // const vehicles = query('vehicle');
    // displayVehicle(vehicles);
    queryAndDisplayFilter(filterUrl);
    queryAndDisplayVehicle(vehicleUrl);
})();

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

function displayFilter(response) {
    const filtersBlock = document.querySelector('.filters-block');
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
    for (let index = 0; index < response.length; index++) {
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

function newOrUsed(type) {
    if (type == 'true') {
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

    return result.substring(0, result.length - 1);
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

// function getCustomerFilters() {
//     const filters = document.querySelectorAll('.filter-block');
//     for(let i = 0; i < filters.length; i++) {
//         const nameField = filters[i].querySelector('p');
//         const name = nameField.innerText;

//     }
// }
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