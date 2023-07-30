//methode 01

// fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json")
//       .then(result => result.json())
//       .then(data => get(data))

// let numberInput = document.querySelector("input");
// let aedPrice = document.querySelector(".aed span");
// let dzdPrice = document.querySelector(".dzd span");
// let usdPrice = document.querySelector(".usd span");

// function get(data) {
//   numberInput.addEventListener("input", function() {
//     aedPrice.innerHTML = (numberInput.value * data.eur["aed"]).toFixed(2);
//     dzdPrice.innerHTML = (numberInput.value * data.eur["dzd"]).toFixed(2);
//     usdPrice.innerHTML = (numberInput.value * data.eur["usd"]).toFixed(2);
//   })
// }

//methode 02

  let numberInput = document.querySelector("input");
  let aedPrice = document.querySelector(".aed span");
  let dzdPrice = document.querySelector(".dzd span");
  let usdPrice = document.querySelector(".usd span");

  async function get() {
    let response = await fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json");
    let data = await response.json();
    
    numberInput.addEventListener("input", function() {
      aedPrice.innerHTML = (numberInput.value * data.eur["aed"]).toFixed(2);
      dzdPrice.innerHTML = (numberInput.value * data.eur["dzd"]).toFixed(2);
      usdPrice.innerHTML = (numberInput.value * data.eur["usd"]).toFixed(2);
    })
  }

  get();