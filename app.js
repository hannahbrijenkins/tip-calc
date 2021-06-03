// when a use inputs a dollar amount, they will select the percentage they want to tip, and when it is clicked, their total amount and tip amount will be displayed. The form can be cleared by clicking a button

function getTip() {
    // get string dollar amount & turn it into number
    var amountBefore = parseFloat(document.getElementById('billAmountInput').value);
    // turn into currency 
    // THIS MIGHT NEED TO BE USED AFTER BECAUSE IT RETURNS A STRING
    // get tip amount
    var tipAmount = parseFloat(document.querySelector('input[name="tips"]:checked').value)
    console.log(tipAmount);
    // // getting tip amount based on billed amount
    var calculatedTip = amountBefore * tipAmount;
    console.log(calculatedTip);
    // tip amount will be added to dollar amount
    var totalAmount = calculatedTip + amountBefore;
    // // getting total amount with tip
    console.log(totalAmount);
    // post tip into p tag
    if (tipAmount > 0) {
        var tipCurrency = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(calculatedTip);
        document.getElementById("innerTipAmountId").innerHTML = `${tipCurrency}`
    }
    // // post total into p tag
    if (totalAmount > 0) {
        var amountCurrency = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(totalAmount);
        document.getElementById("totalAmountId").innerHTML = `${amountCurrency}`
    }
    // both amounts will be displayed on the screen

}
