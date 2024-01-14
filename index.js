/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


//Get the input field and get the value entered by the user
const input = document.getElementById('input-el')

// Get the button and paragraph elements to show the results
const convertBtn = document.getElementById('btn-convert')
const lengthEl = document.getElementById('length-el')
const volumeEl = document.getElementById('volume-el')
const massEl = document.getElementById('mass-el')


convertBtn.addEventListener('click', function() {
    
    // Get the value entered by the user from the input field   
    const inputEl = input.value

    // Conversion factors
    const metersToFeetFactor = 3.281;
    const litersToGallonsFactor = 0.264;
    const kilosToPoundsFactor = 2.204;

    // Calculations for length
    const metersToFeet = input.value * metersToFeetFactor;
    const feetToMeters = input.value / metersToFeetFactor;

    // Calculations for volume
    const litersToGallons = input.value * litersToGallonsFactor;
    const gallonsToLiters = input.value / litersToGallonsFactor;

    // Calculations for mass
    const kilosToPounds = input.value * kilosToPoundsFactor;
    const poundsToKilos = input.value / kilosToPoundsFactor;

   // Update the output paragraphs with the results

   //length
   lengthEl.textContent = `${input.value} meters = ${metersToFeet.toFixed(3)} feet | ${input.value} feet = ${feetToMeters.toFixed(3)} meters`;
   //volume
   volumeEl.textContent = `${input.value} liters = ${litersToGallons.toFixed(3)} gallons | ${input.value} gallons = ${gallonsToLiters.toFixed(3)} liters`;
   //mass
   massEl.textContent = `${input.value} kilos = ${kilosToPounds.toFixed(3)} pounds | ${input.value} pounds = ${poundsToKilos.toFixed(3)} kilos`;
    

})

