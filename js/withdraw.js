document.getElementById("btn-withdraw").addEventListener("click",function(){
    // set deposit total
    const withdrawField = document.getElementById("withdraw-field");
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    withdrawField.value = ""

    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if(newWithdrawAmount > previousBalanceTotal){
        alert("There is no sufficient money in your father bank.");
        return;
    }

    if(isNaN(newWithdrawAmount)){
        alert("Please enter a valid amount!");
        return;
    }
    
    const withdrawTotalElement = document.getElementById("withdraw-total");
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const currentWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;

    withdrawTotalElement.innerText = currentWithdrawTotal;

    

    // set total Balance


    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;
})