'use strict';

const cityInput = document.querySelector('input');
const btnSearch = document.querySelector('#btnSearch');
let city;
const apiKey = '71ed81d40ebe81b90dd73796d52d5748';

/////////////////////EventListenersSubmit//////////////////
btnSearch.addEventListener('click', function(){
   city = cityInput.value;
   

   apiDale(city, '71ed81d40ebe81b90dd73796d52d5748');
   cityInput.value =''
})
cityInput.addEventListener('keydown', function(e){
    if(e.key == 'Enter'){
        city = cityInput.value;
        
        apiDale(city, '71ed81d40ebe81b90dd73796d52d5748')
        cityInput.value =''
    }
});
///////////////API////////////////////
const apiDale = async function(city, apiKey){
    const res = await fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" + "&appid=" + apiKey);

    const data = await res.json();
    renderData(city, data);
}

/////////////////////////////////////////
const renderData = function(city, data){
    const cardArea = document.querySelector('.cardArea');
    const here = document.querySelector('.here')
    const html = 
    `
    <div class=" square shadow m-3  p-3 text-start">
        <div class="cityCountryDiv d-flex flex-row">
            <h2 class="cityName text-black-50 me-3">${city}</h2>
            <p class="countryName p-1">${data.sys.country}</p>
        </div>
        <div class="tempDiv d-flex flex-row">
            <h2 class="temp text-black-50  ">${data.main.temp.toFixed(0)}</h2>
            <p style="font-size: 2rem;" class="text-black-50 ">°C</p>
        </div>
        <div class="imgDiv">
            <img class="img-fluid h-25" src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png">
            <p>${data.weather[0].description}.</p>
        </div>
    </div>   
    `;
    here.insertAdjacentHTML('beforeend', html); 
};

