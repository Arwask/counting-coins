/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/
var dollars = prompt("Give me dollar amount and I will tell you how many coins you will need: ");

function coinCounter () {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};
  
  coinPurse.quarters = 0;
  coinPurse.dimes = 0;
  coinPurse.nickels = 0;
  coinPurse.pennies = 0;

  var cents = dollars*100;
  console.log(cents);
  coinPurse.quarters = Math.floor(cents/25);
  cents = cents%25;
  coinPurse.dimes = Math.floor(cents/10);
  cents = cents%10;
  coinPurse.nickels = Math.floor(cents/5);
  cents = cents%5;
  coinPurse.pennies = Math.floor(cents);

  return coinPurse;
}

var coins = coinCounter();
console.log(coins);