/* Imports */

/* Get DOM Elements */
const wigSelect = document.getElementById('wig-select');
const wigImg = document.getElementById('wig-img');
const wigChangeCounter = document.getElementById('wig-change-counter');

const aphorismInput = document.getElementById('aphorism-input');
const aphorismList = document.getElementById('aphorism-list');
const addButton = document.getElementById('add-button');

/* State */
let wigCounter = 0;
let aphorisms = [];

/* Events */
wigSelect.addEventListener('change', (e) => {
    // user selection used for img display
    const value = e.target.value;
    wigImg.src = `./assets/${value}.png`;
    //increment counter
    wigCounter++;
    // update the view (display state change)
    wigChangeCounter.textContent = wigCounter;
});

addButton.addEventListener('click', () => {
    aphorisms.push(aphorismInput.value);
    // display all phrases
    displayAphorisms();
});

/* Display Functions */
function displayAphorisms() {
    aphorismList.textContent = '';
    for (let aphorism of aphorisms) {
        const p = document.createElement('p');
        p.textContent = aphorism;
        aphorismList.append(p);
    }
}
