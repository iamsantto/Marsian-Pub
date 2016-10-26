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
  var hCurrency = 0, sCurrency = 0;
  var tipArray = [];

  currencyA > currencyB ? (hCurrency = currencyA, sCurrency = currencyB) : (hCurrency = currencyB, sCurrency = currencyA); // To get the Max currency

  var hDiv = Math.floor(billAmount/hCurrency); // divide the bill amt by max currency

  while ((hDiv+1) != 0){
    var hDivRem = billAmount - (hDiv * hCurrency); // find the remainder when divided my max currency
    var sDivRem = hDivRem % sCurrency; // check if there's still a remainder
    if (sDivRem == 0) return 0; // if no remainder, then tips is 0. Return it.
    tipArray.push(sDivRem); // if not push the remainder value into an array
    hDiv--; // decrement the quotient value by 1 and repeat untill the all quotient values are checked
  }

  var tip = Math.min(...tipArray); // find to min value from the array
  return tip; // return the smallest number which is the least tip
};
