const BASE_URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/`;
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");


// Populate dropdowns with currency codes
for (let select of dropdowns) {
    for (let currCode in countryList) { 
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;

        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        } else if (select.name === "to" && currCode === "BDT") {
            newOption.selected = "selected";
        }

        select.append(newOption);
    }

    // Change flag on currency selection
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};


// Convert currency on button click
btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
});

const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = "1";
    }

    const URL = `${BASE_URL}${fromCurr.value.toLowerCase()}.json`;
    try {
        let response = await fetch(URL); //response is a promise
        let data = await response.json();

        let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
        if (!rate) {
            msg.innerText = "Conversion rate not available!";
            return;
        }

        let finalAmount = (amtVal * rate).toFixed(2);
        msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
    } catch (error) {
        msg.innerText = "Error fetching exchange rate!";
        console.error("API Fetch Error:", error);
    }
};

// Convert on page load
window.addEventListener("load", () => {
    updateExchangeRate();
});
