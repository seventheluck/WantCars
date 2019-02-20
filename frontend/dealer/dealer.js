(function IIFE() {

})();

const HOST = "http://localhost";
const PORT = "8090";
const URL = HOST + ":" + PORT +"/";

function httpGet(url, parameter) {

    const http = new XMLHttpRequest();
    http.open("GET", url, false);
    //http.responseType = "json";
    if (parameter !== null)
        http.send(parameter);
    else
        http.send(null);
    return JSON.parse(http.responseText);
}

const searchButton = document.querySelector(".search-button");
searchButton.addEventListener('click', (e) => {
    searchDealerInfo('1');
    const dealerNameField = document.querySelector(".dealer-name");
    dealerNameField.addEventListener('click', (e) => {
        highlightField(e.target);
    });
});

function highlightField(targetField) {
    targetField.classList.toggle("click-on");
}

function searchDealerInventory(dealerID){
    const url = URL + "vehicle?dealerID=" + dealerID;
}

function searchDealerInfo(pageNumber) {
    const nameInput = document.querySelector(".name-text");
    const cityInput = document.querySelector(".city-text");
    const name = nameInput.value;
    const city = cityInput.value;
    const url = URL + "dealer?name=" + name + "&location=" + city + "&limit=" + pageNumber + "&pageSize=20";
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
        const state = dealer['state'];
        unsortedList.insertAdjacentHTML('beforeend',
            `<li class="dealer-item">
        <div class="dealer-img">
            <img class="dealer-img-field" src="../resources/dealer.jpg" alt="Dealer" />
        </div>
        <div class="dealer-info">
            <p class="dealer-name">Name: ${name}</p>
            <input type="hidden"  value="${id}"/>
            <p>Address: ${state}</p>
        </div>
    </li>`);
    }
}