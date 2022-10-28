/* Imports */

/* Get DOM Elements */
const wigSelect = document.getElementById('wig-select');
const wigImg = document.getElementById('wig-img');
const wigChangeCounter = document.getElementById('wig-change-counter');

const locationSelect = document.getElementById('location-select');
const locationImg = document.getElementById('location-img');
const locationChangeCounter = document.getElementById('location-counter');

/* State */
let wigCounter = 0;
let locationCounter = 0;

/* Events */
wigSelect.addEventListener('change', (e) => {
    // on change, grab the user selection and save to a variable
    const value = e.target.value;
    // apply value to img src with template literal
    wigImg.src = `./assets/${value}.png`;
    //increment wigCounter by 1 for the one change
    wigCounter++;
    displayStats();
});

locationSelect.addEventListener('change', (e) => {
    const value = e.target.value;
    locationImg.src = `./assets/${value}.png`;
    locationCounter++;
    displayStats();
});

/* Display Functions */
function displayStats() {
    wigChangeCounter.textContent = wigCounter;
    locationChangeCounter.textContent = locationCounter;
}

// (don't forget to call any display functions you want to run on page load!)
