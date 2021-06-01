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
    console.log(tipNumber)
    console.log(amountNumber);
    // when calculate button is clicked, both variables will pass through an equation and create the variable for tip dollar
    // getting tip amount based on total
    var calculatedTip = amountNumber * tipNumber;
    console.log(calculatedTip);
    // tip amount will be added to dollar amount
    // getting total amount with tip
    var totalAmount = calculatedTip + amountNumber;
    console.log(totalAmount);
    if (totalAmount > 0) {
        document.getElementById("innerTipAmount").innerHTML = `$${calculatedTip.toString}`
    }
    // both amounts will be displayed on the screen

}



