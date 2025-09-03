const validPin = 1234

// reuseable functions

// input value 
function getInputValue(id) {
    const getValueNumber = parseInt(document.getElementById(id).value)
    // console.log(getValueNumber)
    return getValueNumber;
}

// innerText Function 

function getInnerText(id) {
    const getText = parseInt(document.getElementById(id).innerText)
    // console.log(getValueNumber)
    return getText;
}


// set balance function 
function setBalance(value) {
    const availableNewBalance = document.getElementById("balance")
    availableNewBalance.innerText = value
}


// toggleing reuseable function 

function toggle(id) {
    const forms = document.getElementsByClassName("form")
    for (let form of forms) {
        form.style.display = "none"    
    }
    document.getElementById(id).style.display = "block"

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


        const availableBalance = getInnerText('balance');
        const newTotalAvailableBalance = availableBalance + addAmount;
        setBalance(newTotalAvailableBalance);


    })


// toggoling 

// Toggle: Add Money Form
document.getElementById("btn-add-money").addEventListener("click", function (e) {
    toggle("form-addMoney");
});

// Toggle: Cashout Form
document.getElementById("btn-cashout").addEventListener("click", function (e) {
    toggle("form-cashout");
});

// Toggle: Transfer Money Form
document.getElementById("btn-transfer").addEventListener("click", function (e) {
    toggle("form-transfer");
});

// Toggle: Bonus Form
document.getElementById("btn-bonus").addEventListener("click", function (e) {
    toggle("form-bonus");
});

// Toggle: Pay Bills Form
document.getElementById("btn-bills").addEventListener("click", function (e) {
    toggle("form-paybill");
});

// Toggle: Transactions Form
document.getElementById("btn-Transactions").addEventListener("click", function (e) {
    toggle("form-transection");
});
