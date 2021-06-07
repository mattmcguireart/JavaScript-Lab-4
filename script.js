"use strict";

let total = 0;
let totalPara = document.querySelector(".total");
let colaButton = document.querySelector(".cola");
let peanutsButton = document.querySelector(".peanuts");
let chocolateButton = document.querySelector(".chocolate");
let gummiesButton = document.querySelector(".gummies");
let makeMoney = document.querySelector(".make-money-form");
let coinContainer = document.querySelector(".coins");
let bulb = document.querySelector(".bulb");
let on = document.querySelector(".on");
let off = document.querySelector(".off");
let toggle = document.querySelector(".toggle");
let end = document.querySelector(".end");

colaButton.addEventListener("click", () => {
  let amount = parseFloat(colaButton.getAttribute("data-amount"));
  total += amount;
  totalPara.innerText = `Total: $${total}`;
});

peanutsButton.addEventListener("click", () => {
  let amount = parseFloat(peanutsButton.getAttribute("data-amount"));
  total += amount;
  totalPara.innerText = `Total: $${total}`;
});

chocolateButton.addEventListener("click", () => {
  let amount = parseFloat(chocolateButton.getAttribute("data-amount"));
  total += amount;
  totalPara.innerText = `Total: $${total}`;
});

gummiesButton.addEventListener("click", () => {
  let amount = parseFloat(gummiesButton.getAttribute("data-amount"));
  total += amount;
  totalPara.innerText = `Total: $${total}`;
});

makeMoney.addEventListener("submit", (e) => {
  e.preventDefault();
  let howMany = document.querySelector("#number").value;
  let coinType = document.querySelector("#coin").value;
  console.log(howMany, coinType);
  for (let i = 0; i < howMany; i++) {
    let newCoin = document.createElement("div");
    newCoin.classList.add("coin", coinType);
    newCoin.innerText = coinType;
    coinContainer.append(newCoin);
    newCoin.addEventListener("click", () => {
      newCoin.remove();
    });
  }
});

on.addEventListener("click", () => {
  bulb.classList.add("light");
});

off.addEventListener("click", () => {
  bulb.classList.remove("light");
});

toggle.addEventListener("click", () => {
  bulb.classList.toggle("light");
});
