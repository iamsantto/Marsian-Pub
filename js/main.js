// -------- To get input and display output ----------
var displayTip = function () {
  var currencyA = parseInt(document.getElementById('currencyA').value);
  var currencyB = parseInt(document.getElementById('currencyB').value);
  var billAmount = parseInt(document.getElementById('billAmount').value);

  var validation = validate(currencyA, currencyB, billAmount); // validate the input boxes

  if (validation) {
    var result = tipCalculator(currencyA, currencyB, billAmount);
    document.getElementById('result').innerHTML = "Calculated Tip : " + result; // add result to DOM
  }
}

// -------- Validation Fn ----------
var validate = function(currenyA, currencyB, billAmount) {
  if (!!currenyA && !!currencyB && !!billAmount) {
    return true;
  }
  window.alert("Please enter a valid number!");
  return false;
}

// -------- Tip Calculator Fn ----------
var tipCalculator = function(currencyA, currencyB, billAmount){
  var hCurrency = 0, sCurrency = 0, base=0;
  var tipArray = [];

  currencyA > currencyB ? (hCurrency = currencyA, sCurrency = currencyB) : (hCurrency = currencyB, sCurrency = currencyA); // To get the Max Denomination

  if (billAmount < sCurrency) {
    return (sCurrency - billAmount);
  }

  var hDiv = Math.floor(billAmount/hCurrency); // divide the bill amt by max denomination

  while ((hDiv+1) != 0){  // keep iterating untill hDiv becomes null
    var hDivRem = billAmount - (hDiv * hCurrency); // find the remainder when divided my max denomination
    var sDivRem = hDivRem % sCurrency; // check if there's still a remainder
    if (sDivRem == 0) return 0; // if no remainder, then tips is 0. Return it.
    var sDiv = Math.floor(hDivRem/sCurrency); // divide the remainder of max D by min D
    var diff = billAmount - (hDivRem + (sDiv * sCurrency)); // find the difference
    if (diff > base) {
      base = diff; // if diff > base change base and save both the quotients
      tipArray = [hDiv, sDiv];
    }
    hDiv--; // decrement the quotient value by 1
  }

  var tip = ((tipArray[0] * hCurrency) + ((tipArray[1] + 1) * sCurrency)) - billAmount; // finding tip from both the quotients
  return tip; 
};
