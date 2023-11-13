/*
 1. add event handler with the withdraw button 
2. get the withdraw amount from the withdraw input field
2.5 also make sure to convert to input into a number by using parseFloat.
3. get previous withdraw total
4.Calculate total Withdraw amount
4.5. set total withdraw amount
5. get the previous balance total
6. calculate new blanace total
6.5 set new balance total

7. clear the input field
 */

 //step-1
 document.getElementById('btn-withdraw').addEventListener('click', function(){
    //step-2:
    const withdraField = document.getElementById('withdraw-field');
    const newWithDrawAmountStr = withdraField.value;
    const newWithDrawAmount = parseFloat(newWithDrawAmountStr);

    //step -3:
    const WithdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalStr = WithdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalStr);
    console.log(previousWithdrawTotal);

    //step-4
    const currentWithdrawTotal = previousWithdrawTotal + newWithDrawAmount;
    WithdrawTotalElement.innerText = currentWithdrawTotal;
    //step-5:
    const balanceTotalElement = document.getElementById('blanace-total');
    const previousBalanceTotalStr = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalStr);

    //step-6:
    const newBalanceTotal = previousBalanceTotal - newWithDrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    //step-7:
    withdraField.value = '';

})