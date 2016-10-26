

// -------- Tip Calculator Fn
var tipCalculator = function(currencyA, currencyB, billAmount){
  var hCurrency = 0, sCurrency = 0;
  var tipArray = [];

  currencyA > currencyB ? (hCurrency = currencyA, sCurrency = currencyB) : (hCurrency = currencyB, sCurrency = currencyA); // To get the Max currency

  var hDiv = Math.floor(billAmount/hCurrency); // divide the bill amt by max currency

  for ( var i = 0; i <= hDiv +1; i++){
    var hDivRem = billAmount - (hDiv * hCurrency); // find the remainder when divided my max currency
    var sDiv = Math.floor(hDivRem/sCurrency); // divide the remainder by the small currency
    var sDivRem = hDivRem % sCurrency; // check if there's still a remainder
    if (sDivRem == 0) return 0; // if no remainder, then tips is 0. Return it.
    tipArray.push(sDivRem); // if not push the remainder value into an array
    hDiv--; // decrement the quotient value by 1 and repeat untill the all quotient values are checked
  }
  
  var tip = Math.min(...tipArray); // find to min value from the array
  return tip; // return the smallest number which is the least tip
};


 var tips = tipCalculator(9,6,48);
