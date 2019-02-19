(function IIFE() {

})();

function httpGet(url, parameter) {

    const http = new XMLHttpRequest();
    http.open("GET", url, false);
    //http.responseType = "json";
    if (parameter !== null)
        http.send(parameter);
    else
        http.send(null);
    return http.responseText;
}

const searchButton = document.querySelector(".search-button");
searchButton.addEventListener('click', (e) => {
    searchDealerInfo('1');
});

function searchDealerInfo(pageNumber){
    const nameInput = document.querySelector(".name-text");
    const cityInput = document.querySelector(".city-text");
    const name = nameInput.value;
    const city = cityInput.value;
    const url = "http://localhost:8090/dealer?name=" + name + "&location=" + city + "&limit="+pageNumber+"&pageSize=20";
    // const url = "http://localhost:8090/dealer";
    const responseText = httpGet(url, null);
    displayDealerList(responseText);
}

function displayDealerList(responseText) {

    const jsonResponse = JSON.parse(responseText);
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
            <p>Name: ${name}</p>
            <input type="hidden"  value="${id}"/>
            <p>Address: ${state}</p>
        </div>
    </li>`);
    }
}