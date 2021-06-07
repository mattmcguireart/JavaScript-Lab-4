"use strict";

let total = 0;
let totalPara = document.querySelector(".total");
let colaButton = document.querySelector(".cola");
let peanutsButton = document.querySelector(".peanuts");
let chocolateButton = document.querySelector(".chocolate");
let gummiesButton = document.querySelector(".gummies");
let howMany = document.querySelector("#number");
let coinType = document.querySelector("#coin");
let makeMoney = document.querySelector(".make-money-form");

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

makeMoney.addEventListener("click", () => {});

const makeMoney = () => {};
