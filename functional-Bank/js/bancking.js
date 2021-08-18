function getInputValue(inputId) {
  const inputFild = document.getElementById(inputId);
   const inputAmountText = inputFild.value;
   const amountValue = parseFloat(inputAmountText);
   inputFild.value = '';
   return amountValue;
}

function updateTotalFild(totalFildId,amount) {
  const totalElemnt = document.getElementById(totalFildId);
  const totalText = totalElemnt.innerText;
  const previousTotal = parseFloat(totalText);

    totalElemnt.innerText = previousTotal + amount;
}

// get current balance 

function getCurrentBalance() {
  const balanceTotal = document.getElementById('balance-total');
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  return previousBalanceTotal;
}

function updateBalance(amount,isAdd) {
  /* 
  const balanceTotalText = balanceTotal.innerText;
  const previousBlanceTotal = parseFloat(balanceTotalText);  */
  const balanceTotal = document.getElementById('balance-total');
  const previousBalanceTotal = getCurrentBalance();

  if(isAdd == true){
    balanceTotal.innerText = previousBalanceTotal + amount;
  }
  else{
    balanceTotal.innerText = previousBalanceTotal - amount;
  }
  }



document.getElementById('deposit-button').addEventListener('click',function(){
  const depositAmount = getInputValue('deposit-input')

  if(depositAmount > 0){
    updateTotalFild('deposit-total',depositAmount);
    updateBalance(depositAmount,true);
  }

    // deposit Input 
   /* const depositInput = document.getElementById('deposit-input');
   const depositAmountText = depositInput.value;
   const depositAmount = parseFloat(depositAmountText); */
   
//    deposit Amount sit 
   /* const depositTotalAmount = document.getElementById('deposit-total');
  const depositTotalText = depositTotalAmount.innerText;
  const depositTotalValue = parseFloat(depositTotalText);


  const newDepositTotalAmount = depositTotalValue + depositAmount;

    depositTotalAmount.innerText = newDepositTotalAmount; */


// update balance

/* const balanceTotal = document.getElementById('balance-total');
const balanceTotalText = balanceTotal.innerText;
const previousBlanceTotal = parseFloat(balanceTotalText);

balanceTotal.innerText = previousBlanceTotal + depositAmount; */
})

// handal withdrow section 
document.getElementById('withdraw-button').addEventListener('click',function(){
  const withdrawAmount = getInputValue('withdraw-input')

  const currentBalance = getCurrentBalance();

  if(withdrawAmount > 0 && withdrawAmount < currentBalance ){
    updateTotalFild('withdrow-amount',withdrawAmount)
    updateBalance(withdrawAmount,false);
  }

   /*  const withdrawInput = document.getElementById('withdraw-input');
    const withdrawText = withdrawInput.value;
    const previousWithdrawAmount = parseFloat(withdrawText); */


    /* const withdrawAmount = document.getElementById('withdrow-amount');
    const withdrawAmountText = withdrawAmount.innerText;
    const preseWithdrawAmount = parseFloat(withdrawAmountText);

    withdrawAmount.innerText = previousWithdrawAmount + preseWithdrawAmount;  */


    // update total balance 
    /* 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBlanceTotal = parseFloat(balanceTotalText);
    const newBalance = previousBlanceTotal - withdrawAmount;

    balanceTotal.innerText = newBalance; 
    */
})