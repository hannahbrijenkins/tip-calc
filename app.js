// when a use inputs a dollar amount, they will select the percentage they want to tip, and when it is clicked, their total amount and tip amount will be displayed. The form can be cleared by clicking a button

function getTip() {
    // get dollar amount
    var amountBefore = document.getElementById('billAmountInput').value;
    // turn into point number
    var amountNumber = parseFloat(amountBefore);
    // get tip amount
    var tipAmount = document.querySelector('input[name="tips"]:checked').value
    // turn into point number
    var tipNumber = parseFloat(tipAmount);
    // console log
    console.log(tipNumber);
    console.log(amountBefore);
    // when calculate button is clicked, both variables will pass through an equation and create the variable for tip dollar
    // getting tip amount based on total
    var calculatedTip = amountNumber * tipNumber;
    console.log(calculatedTip);
    // tip amount will be added to dollar amount
    var totalAmount = calculatedTip + amountNumber;
    // getting total amount with tip
    console.log(totalAmount);
    // post tip into p tag
    if (totalAmount > 0) {
        var tipText = calculatedTip.toString();
        document.getElementById("innerTipAmountId").innerHTML = `$${tipText}`
    }
    // post total into p tag
    if (calculatedTip > 0) {
        var totalText = totalAmount.toString();
        document.getElementById("totalAmountId").innerHTML = `$${totalText}`
    }
    // both amounts will be displayed on the screen

}
