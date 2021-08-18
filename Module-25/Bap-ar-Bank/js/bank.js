// Handle deposit btn event 

document.getElementById('deposit-button').addEventListener('click',function(){
    // get the amount deposited 
const depositInput = document.getElementById('deposit-input');
/* const newDepositAmount = depositInput.value;

const prevousDepositTotal = document.getElementById('deposit-total');
 depositTotal.innerText = depositAmount;

const totalDepositAmount =  prevousDepositTotal + prevousDepositTotal;
totalDepositAmount.innerText = totalDepositAmount */

const newDepositAmountText = depositInput.value;
const newDepositAmount = parseFloat(newDepositAmountText);

const depositTotal = document.getElementById('deposit-total');

const previousDepositText = depositTotal.innerText;
const previousDepositAmount = parseFloat(previousDepositText);

const newDepositTotal =  previousDepositAmount + newDepositAmount;

depositTotal.innerText = newDepositTotal;

// update blance Total 
const totalBalance = document.getElementById('balance-total');
const balanceTotalText = totalBalance.innerText;
const previousTotalBalance = parseFloat(balanceTotalText);

const newBalanceTotal = previousTotalBalance + newDepositAmount;

totalBalance.innerText = newBalanceTotal;
// clear Input 
depositInput.value = ''
})

// withdraw amount 

document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrowInput = document.getElementById('withdraw-input');
    const newWithdrowText = withdrowInput.value;

    const newWithdrowAmount = parseFloat(newWithdrowText)

    const withdrowAmount = document.getElementById('withdrow-amount');
    const previousWithdrowAmountText = withdrowAmount.innerText;

    const previousWithdrowTotal = parseFloat(previousWithdrowAmountText);

    const newWithdrowTotal = previousWithdrowTotal + newWithdrowAmount;
    withdrowAmount.innerText = newWithdrowTotal;

    withdrowInput.value = '';

    // withdrowAmount - totalAmount
    const balanceTotal = document.getElementById('balance-total');
    const previousBlanceText = balanceTotal.innerText;

    const previousBalanceTotal = parseFloat(previousBlanceText);

    const newtotalAmount = previousBalanceTotal - newWithdrowAmount;

    balanceTotal.innerText = newtotalAmount;


})