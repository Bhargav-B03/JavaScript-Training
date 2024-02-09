'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

function renderCountry(data, className = "") {
    let html = `
        <article class="country ${className}">
        <img class="country__img" src="${data.flags.svg}" />
        <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(1)} M people</p>
            <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
        </div>
        </article>
    `
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
}

function getCountryDetails(country) {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            // rendering the country data
            renderCountry(data[0]);

            // fetching neighbours
            if (!data[0].borders) return;

            return Promise.all(data[0].borders.map((n) => fetch(`https://restcountries.com/v3.1/alpha/${n}`)))
        })
        .then(response => {
            console.log(response);
            // return 
            return Promise.all(response.map(res => res.json()));
        })
        .then(d => d.forEach(country => renderCountry(country[0], 'neighbour')))
        .catch(e => {
            throw new Error('No Neighbour country !!');
        })
}

let country = prompt('Enter the country name : ');
getCountryDetails(country);