import jsonData from "./data/data.json" assert {'type':'json'};

const balanceDisplay = document.querySelector(".balance_details-display");
const barsContainer = document.querySelector(".bars_wrapper");
const barContainer = document.querySelectorAll(".bar-group");

const barsItemsFragment = document.createDocumentFragment();

let balance = 921.48;

window.addEventListener("DOMContentLoaded", init);

let i = 0;
jsonData.forEach(group => {
   var dayLabel = document.createElement("span");
   dayLabel.classList.add("day");
   dayLabel.innerHTML = group.day;

   var bar = document.createElement("div");
   calculateSize(group.amount)==1?bar.classList.add("bigger", "bar"):bar.classList.add("bar");
   bar.style.setProperty("--bar-size", calculateSize(group.amount));

   barContainer[i].appendChild(bar);
   barContainer[i].appendChild(dayLabel);

   barsItemsFragment.appendChild(barContainer[i]);
   i += 1;
});

barsContainer.appendChild(barsItemsFragment);

function init()
{
   balanceDisplay.innerText = (`$${balance}`);
}

function calculateSize(size)
{
   let maior = 0;
   jsonData.forEach(amount => {
      if(amount.amount > maior)
      {
         maior = amount.amount;
      }
   }); 

   return (size/maior).toFixed(2);
}