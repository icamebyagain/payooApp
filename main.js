const validPin =1234

// reuseable functions

// input value 
function getInputValue (id){
    const getValueNumber = parseInt(document.getElementById(id).value)
    // console.log(getValueNumber)
    return getValueNumber;
}

// innerText Function 

function getInnerText (id){
    const getText = parseInt(document.getElementById(id).innerText)
    // console.log(getValueNumber)
    return getText;
}




//  Add Money js 
 
 
        document.getElementById('addMoneyBtn')
            .addEventListener("click", function (e) {
                e.preventDefault()
                const selectBank = document.getElementById('bank-name').value
                const accountNumber = document.getElementById('bankAccountNumber').value
                const addAmount = getInputValue('add-amount');
                const pinAdd = getInputValue('pin-addmoney');
                const errorMsg = document.getElementById('amountError');
                const accerrorMsg = document.getElementById('accountError');
                const pinError = document.getElementById('pinError');

                // console.log(selectBank, accountNumber, addAmount, pinAdd)

                if (accountNumber.length !== 11) {
                    accerrorMsg.classList.remove('hidden');
                    return;
                } else {
                    accerrorMsg.classList.add('hidden');

                }

                if (isNaN(addAmount) || addAmount <= 0) {
                    errorMsg.classList.remove('hidden');
                    return;
                } else {
                    errorMsg.classList.add('hidden');
                }

                if (pinAdd !== validPin) {
                    pinError.classList.remove('hidden');
                    return;
                } else {
                    pinError.classList.add('hidden');
                }


                const availableBalance = getInnerText ('balance');
                const newTotalAvailableBalance = availableBalance + addAmount;
                document.getElementById('balance').innerText = newTotalAvailableBalance;


            })


            // toggoling 

        document.getElementById("btn-add-money").addEventListener("click", function(){
            document.getElementById("form-cashout").style.display = "none"
            document.getElementById("form-addMoney").style.display = "block"
        })


         document.getElementById("btn-cashout").addEventListener("click", function(){
            document.getElementById("form-addMoney").style.display = "none"
            document.getElementById("form-cashout").style.display = "block"
        })


