/* Imports */

/* Get DOM Elements */
const wigSelect = document.getElementById('wig-select');
const wigImg = document.getElementById('wig-img');
const wigChangeCounter = document.getElementById('wig-change-counter');

const locationSelect = document.getElementById('location-select');
const locationImg = document.getElementById('location-img');
const locationChangeCounter = document.getElementById('location-counter');

const aphorismInput = document.getElementById('aphorism-input');
const addButton = document.getElementById('add-button');
const aphorismList = document.getElementById('aphorism-list');

/* State */
let wigCounter = 0;
let locationCounter = 0;
let aphorisms = [];

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

addButton.addEventListener('click', (e) => {
    aphorisms.push(aphorismInput.value);
    displayAphorisms();
    aphorismInput.value = '';
});

/* Display Functions */
function displayStats() {
    wigChangeCounter.textContent = wigCounter;
    locationChangeCounter.textContent = locationCounter;
}

function displayAphorisms() {
    aphorismList.textContent = '';
    for (let aphorism of aphorisms) {
        const p = document.createElement('p');
        p.textContent = aphorism;
        aphorismList.append(p);
    }
}

// (don't forget to call any display functions you want to run on page load!)
