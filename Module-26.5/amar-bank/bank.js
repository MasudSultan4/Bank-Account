 function addAmount(inputId) {
  const amountInput = document.getElementById(inputId);
  const amountInputText = amountInput.value;
  const amountInputValue = parseFloat(amountInputText); 

  amountInput.value = '';
  return amountInputValue;
}

function updateTotalFild(totalFildId,amount) {
  const totalElement = document.getElementById(totalFildId);
  const totalText = totalElement.innerText;
  const  previousTotal = parseFloat(totalText);

  totalElement.innerText = previousTotal + amount;
}

function getCurrentBalance() {
  const totalBalance = document.getElementById('balance-total');
  const balanceText = totalBalance.innerText;
  const balanceValue = parseFloat(balanceText);
  return balanceValue;
}
function updateBalance(amount,isAddison) {
  const totalBalance = document.getElementById('balance-total');
  const balanceValue = getCurrentBalance(totalBalance)

  if(isAddison == true ){
    totalBalance.innerText =  balanceValue + amount;
  }
  else{
    totalBalance.innerText =  balanceValue - amount;
  }
}



document.getElementById('deposit-button').addEventListener('click',function (){
 const depositInputValue = addAmount('deposit-input');
 if(depositInputValue > 0){
      updateTotalFild('deposit-total',depositInputValue)
      // update Total Balance 
      updateBalance(depositInputValue,true)
 }
 if(depositInputValue < 0){
  alert('Your Amount Is Nagtive')
}

})

// withdraw Amount 
document.getElementById("withdraw-button").addEventListener('click',function () {
 const withdrawValue = addAmount('withdraw-input');
 const currentBalance = getCurrentBalance();

 if(withdrawValue > 0 && withdrawValue < currentBalance){
    // withdraw Amount Set 
  updateTotalFild('withdraw-amount',withdrawValue)
  // withdraw of por new BAlance 
  updateBalance(withdrawValue,false)
 }
 if(withdrawValue < 0){
   alert('Your Amount Is Nagtive')
 }
})