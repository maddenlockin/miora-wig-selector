/* Imports */

/* Get DOM Elements */
const wigSelect = document.getElementById('wig-select');
const wigImg = document.getElementById('wig-img');
const wigChangeCounter = document.getElementById('wig-change-counter');

const locationSelect = document.getElementById('location-select');
const locationImg = document.getElementById('location-img');
const locationChangeCounter = document.getElementById('location-change-counter');

let wigCounter = 0;
let locationCounter = 0;

wigSelect.addEventListener('change', (e) => {
    const value = e.target.value;
    wigImg.src = `./assets/${value}.png`;
    wigCounter++;
    displayStats();
});

locationSelect.addEventListener('change', (e) => {
    const value = e.target.value;
    locationImg.src = `./assets/${value}.png`;
    locationCounter++;
    displayStats();
});

function displayStats() {
    wigChangeCounter.textContent = `You have changed wigs ${wigCounter} times`;
    locationChangeCounter.textContent = `You have changed location ${locationCounter} times`;
}
