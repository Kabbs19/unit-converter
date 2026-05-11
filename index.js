
const numberInput = document.getElementById("number-input")
const inputValues = document.querySelectorAll(".input-value")
const convertBtn = document.getElementById("convert-btn") 
const meters = document.getElementById("meters-el")
const feet = document.getElementById("feet-el")
const liters = document.getElementById("liters-el")
const gallons = document.getElementById("gallons-el")
const kilograms = document.getElementById("kilograms-el")
const pounds = document.getElementById("pounds-el")

numberInput.addEventListener("input", convertNumber)

function convertNumber() {
    const number = Number(numberInput.value)

    inputValues.forEach(el => {
        el.innerHTML = `${number}`
    })

    meters.innerHTML = `${(number / 3.281).toFixed(3)}`
    feet.innerHTML = `${(number * 3.281).toFixed(3)}`
    liters.innerHTML = `${(number * 4.546).toFixed(3)}`
    gallons.innerHTML = `${(number / 4.546).toFixed(3)}`
}
