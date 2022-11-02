/* Imports */

/* Get DOM Elements */
const wigSelect = document.getElementById('wig-select');
const wigImg = document.getElementById('wig-img');
const wigChangeCounter = document.getElementById('wig-change-counter');

const locationSelect = document.getElementById('location-select');
const locationImg = document.getElementById('location-img');
const locationChangeCounter = document.getElementById('location-change-counter');

const aphorismInput = document.getElementById('aphorism-input');
const aphorismList = document.getElementById('aphorism-list');
const addButton = document.getElementById('add-button');

let wigCounter = 0;
let locationCounter = 0;
let aphorisms = [];

wigSelect.addEventListener('change', (e) => {
    const value = e.target.value;
    console.log('value', value);
    wigImg.src = `./assets/${value}.png`;
    wigImg.alt = `${value} wig`;
    wigCounter++;
    displayStats();
});

locationSelect.addEventListener('change', (e) => {
    const value = e.target.value;
    locationImg.src = `./assets/${value}.png`;
    locationImg.alt = value;
    locationCounter++;
    displayStats();
});

addButton.addEventListener('click', () => {
    aphorisms.push(aphorismInput.value);
    // display all phrases (state change)
    displayAphorisms();
    aphorismInput.value = '';
});

function displayStats() {
    wigChangeCounter.textContent = `You have changed wigs ${wigCounter} times`;
    locationChangeCounter.textContent = `You have changed location ${locationCounter} times`;
}

function displayAphorisms() {
    aphorismList.textContent = '';
    for (let aphorism of aphorisms) {
        const p = document.createElement('p');
        p.textContent = aphorism;
        aphorismList.append(p);
    }
}
