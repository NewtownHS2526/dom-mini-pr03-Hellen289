console.log("Script Running");


const shift = (sprite, col) => (col <= 7 ? sprite.style.setProperty("grid-column", col) : null);

let pepperoni_step = 1;
let veggie_step = 1;
let bbq_step = 1;



// Query selectors for all buttons and scooters go here
const pepperoniBtn = document.querySelector("#pepperoni-button");
const veggieBtn = document.querySelector("#veggie-button");
const bbqBtn = document.querySelector("#bbq-button");

const pepperoniScooter = document.querySelector("#pepperoni-scooter");
const veggieScooter = document.querySelector("#veggie-scooter");
const bbqScooter = document.querySelector("#bbq-scooter");

const winnerText = document.querySelector("#winner");
// Write the function that moves the pepperoni scooter forward
// Increase the pepperoni position
// Call the helper function to update the scooter position
// Call the winner check function
const deliverPepperoni = (e) => {
    pepperoni_step += 1;
    shift(pepperoniScooter, pepperoni_step);
    checkWinner(pepperoni_step, "Pepperoni");
    pepperoniScooter.alt = `Pepperoni is at spot ${pepperoni_step} out of 7`;
};
// Write the function that moves the veggie scooter forward
const deliverVeggie = (e) => {
    veggie_step += 1;
    shift(veggieScooter, veggie_step);
    checkWinner(veggie_step, "Veggie");
    veggieScooter.alt = `Veggie is at spot ${veggie_step} out of 7`;
};


// Write the function that moves the bbq scooter forward
const deliverBbq = (e) => {
    bbq_step += 1;
    shift(bbqScooter, bbq_step);
    checkWinner(bbq_step, "Bbq");
    bbqScooter.alt = `Bbq is at spot ${bbq_step} out of 7`;
};


// Write a function that checks if a scooter reached column 7
// If so, display the winner message
// Disable all buttons when a winner is found
const checkWinner = (step, name) => {
    if(step === 7){
        winnerText.innerHTML = name + "is the Winner!";
        pepperoniBtn.disabled = true;
        veggieBtn.disabled = true;
        bbqBtn.disabled = true;
    }
};


// Add event listeners for each button
// Each button should trigger its own movement function
pepperoniBtn.addEventListener("click", deliverPepperoni);
veggieBtn.addEventListener("click", deliverVeggie);
bbqBtn.addEventListener("click", deliverBbq);