
const numberInput = document.getElementById("number-input")
const inputValues = document.querySelectorAll(".input-value")
const convertBtn = document.getElementById("convert-btn") 
const meters = document.getElementById("meters-el")
const feet = document.getElementById("feet-el")
const liters = document.getElementById("liters-el")
const gallons = document.getElementById("gallons-el")
const kilograms = document.getElementById("kilograms-el")
const pounds = document.getElementById("pounds-el")

numberInput.addEventListener("input", () => {
    resizeNumberInput()
    convertNumber()
})

resizeNumberInput()

function resizeNumberInput() {
    const characterCount = Math.max(numberInput.value.length, 1)
    numberInput.style.width = `${characterCount + 2}ch`
}

function convertNumber() {
    const number = Number(numberInput.value)

    inputValues.forEach(el => {
        el.innerHTML = `${number}`
    })

    meters.innerHTML = `${(number / 3.281).toFixed(3)}`
    feet.innerHTML = `${(number * 3.281).toFixed(3)}`
    liters.innerHTML = `${(number * 4.546).toFixed(3)}`
    gallons.innerHTML = `${(number / 4.546).toFixed(3)}`
    kilograms.innerHTML = `${(number / 2.205).toFixed(3)}`
    pounds.innerHTML = `${(number * 2.205).toFixed(3)}`
}
