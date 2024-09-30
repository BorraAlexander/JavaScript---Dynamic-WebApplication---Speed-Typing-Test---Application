let timer = document.getElementById("timer");
let quoteDisplay = document.getElementById("quoteDisplay");
let result = document.getElementById("result");
let quoteInput = document.getElementById("quoteInput");
let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");
let spinner = document.getElementById("spinner");

let counter = 0;
spinner.classList.toggle("d-none");

function startCounter() {
    counter += 1;
    timer.textContent = counter;
    console.log(counter);
}

let counterValue = setInterval(startCounter, 1000);

function getQuotation() {
    let options = {
        method: "GET"
    };
    fetch("https://apis.ccbp.in/random-quote", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinner.classList.add("d-none");
            let quotation = jsonData.content;
            quoteDisplay.textContent = quotation;
            console.log(jsonData.content);
        });
}

getQuotation();
startCounter();

resetBtn.onclick = function() {
    //clearInterval(counterValue);
    counter = 0;
    getQuotation();
    startCounter();
    spinner.classList.remove("d-none");
    result.textContent = "";
    quoteInput.value = "";
};

submitBtn.onclick = function() {
    if (quoteInput.value === quoteDisplay.textContent) {
        clearInterval(counterValue);
        result.textContent = "You Typed in " + counter + " seconds";
    } else {
        result.textContent = "You Typed Incorrect Sentence";
    }
};