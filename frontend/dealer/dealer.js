(function IIFE() {

})();

// const HOST = "http://localhost";
// const PORT = "8090";
// const URL = HOST + ":" + PORT + "/";

// function httpGet(url, parameter) {

//     const http = new XMLHttpRequest();
//     http.open("GET", url, false);
//     //http.responseType = "json";
//     if (parameter !== null)
//         http.send(parameter);
//     else
//         http.send(null);
//     return JSON.parse(http.responseText);
// }

const searchButton = document.querySelector(".search-button");
searchButton.addEventListener('click', (e) => {
    searchDealerInfo('1');
    const dealerNameFields = document.querySelectorAll(".dealer-name");
    for(let i = 0; i < dealerNameFields.length; i++) {
        const dealerNameField = dealerNameFields[i];
        dealerNameField.addEventListener('mouseenter', (e) => {
            highlightField(e.target);
        });
        dealerNameField.addEventListener('mouseleave', (e) => {
            resetField(e.target);
        });
        dealerNameField.addEventListener('click', (e) => {
            const dealerName = dealerNameField.parentElement.querySelector("input");
            window.location.href = "../vehicle/vehicle.html?dealerID=" + dealerName.value;
        });
    }
});


function highlightField(targetField) {
    targetField.classList.toggle("click-on");
}

function resetField(targetField) {
    targetField.classList.toggle("click-on");
}

function searchDealerInventory(dealerID) {
    const url = URL + "vehicle?dealerID=" + dealerID;
}

function searchDealerInfo(pageNumber) {
    const nameInput = document.querySelector(".name-text");
    const cityInput = document.querySelector(".city-text");
    const name = nameInput.value;
    const city = cityInput.value;
    const url = URL + "dealer?name=" + name + "&location=" + city + "&limit=" + pageNumber + "&pageSize=20" + "&postCode=";
    // const url = "http://localhost:8090/dealer";
    const responseText = httpGet(url, null);
    displayDealerList(responseText);
}

function displayDealerList(response) {

    const jsonResponse = response;
    const unsortedList = document.querySelector(".dealer-list");
    for (let index = 0; index < jsonResponse.length; index++) {
        const dealer = jsonResponse[index];
        const id = dealer['id'];
        const name = dealer['name'];
        const address = dealer['address'];
        const address1 = address['address1'];
        const address2 = address['address2'];
        const city = address['city'];
        const state = address['state'];
        unsortedList.insertAdjacentHTML('beforeend',
            `<li class="dealer-item">
        <div class="dealer-img">
            <img class="dealer-img-field" src="../resources/dealer.jpg" alt="Dealer" />
        </div>
        <div class="dealer-info">
            <p class="dealer-name">Name: ${name}</p>
            <input type="hidden"  value="${id}"/>
            <p>Address: ${address1}, ${address1}, ${city}, ${state}</p>
        </div>
    </li>`);
    }
}