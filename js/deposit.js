//step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    //step-2 - get the deposit amount from the deposit input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;

    const newDepositAmount = parseFloat(newDepositAmountString);

    //step 3 - get the current deposit total
    //for non input (element other than input, textarea) user innnerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalStr = depositTotalElement.innerText;
    const previousDepositTotal = (parseFloat(previousDepositTotalStr));
    
    // step-4 add number to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    //set the deposit total
    depositTotalElement.innerText = currentDepositTotal;

    //step -5 - get balance current total
    const balanceTotalElement = document.getElementById('blanace-total');
    
    const previousBalanceStr = balanceTotalElement.innerText;
    const previousBalanceTotal = (parseFloat(previousBalanceStr))
    
    //step-6 calculate current  balance
    const currentBlanceTotal = previousBalanceTotal + newDepositAmount;
    //set the blanace total
    balanceTotalElement.innerText = currentBlanceTotal;
    //step-7 - clear the deposit field
    depositField.value = '';


})