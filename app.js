/* Imports */

/* Get DOM Elements */
const wigSelect = document.getElementById('wig-select');
const wigImg = document.getElementById('wig-img');
const wigChangeCounter = document.getElementById('wig-change-counter');

let wigCounter = 0;

wigSelect.addEventListener('change', (e) => {
    const value = e.target.value;
    wigImg.src = `./assets/${value}.png`;
    wigCounter++;
    wigChangeCounter.textContent = wigCounter;
});
