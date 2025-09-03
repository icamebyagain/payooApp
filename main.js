const validPin = 1234
const transectionData = []
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

function btnStyle(id) {
    const cardButtons = document.getElementsByClassName('cardBtn')
    for (let button of cardButtons) {
        button.classList.remove("activeCard")
    }
    document.getElementById(id).classList.add("activeCard")
}



//  Add Money js //  Add Money js //  Add Money js //  Add Money js //  Add Money js //  Add Money js 


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
        const data = {
            name: "Add Money",
            date: new Date().toLocaleString()
        }
        transectionData.push(data)
        console.log(transectionData);

    })
       // cash out js // cash out js // cash out js // cash out js // cash out js 

document.getElementById('wtdBtn').addEventListener("click", function (e) {

    e.preventDefault()
    const agentNumber = document.getElementById('agent-number').value
    const wtdAmount = parseInt(document.getElementById('wtd-amount').value)
    const wtdPin = parseInt(document.getElementById('pinWtd').value)

    console.log(agentNumber, wtdAmount, wtdPin)
    const availableBalance = parseInt(document.getElementById('balance').innerText);

    // Check if balance is sufficient
    if (availableBalance < wtdAmount) {
        alert("❌ Insufficient balance. Please add money.");
        return;
    }

    const totalAfterWithdraw = availableBalance - wtdAmount
    document.getElementById('balance').innerText = totalAfterWithdraw

    const data = {
         name: "Cash Out",
         date: new Date().toLocaleString()
    }
    transectionData.push(data)

})

// transection history 

document.getElementById('btn-Transactions').addEventListener("click", function(){

        // console.log(transectionData)

    const transactionSection = document.getElementById("transectionSec")
    transactionSection.innerText =""

    for (let data of transectionData){
        const div = document.createElement("div")
        div.innerHTML = `
         <div class="max-w-md mx-auto bg-white rounded-xl p-6 mt-3">

                    <div class="flex justify-between items-center">
                        <div class="flex">

                            <div class="p-3 rounded-full bg-[#eaecee]">
                                <img src="assets/purse1.png" alt="">
                            </div>

                            <div class=" ml-4">
                                <h2>${data.name}</h2>
                                <p>${data.date}</p>
                            </div>

                        </div>
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                    </div>

                </div>
        `
            transactionSection.appendChild(div)

    }

})








// toggoling 

// Add Money
document.getElementById("btn-add-money").addEventListener("click", function () {
    toggle("form-addMoney");
    btnStyle("btn-add-money");
});

// Cashout
document.getElementById("btn-cashout").addEventListener("click", function () {
    toggle("form-cashout");
    btnStyle("btn-cashout");
});

// Transfer Money
document.getElementById("btn-transfer").addEventListener("click", function () {
    toggle("form-transfer");
    btnStyle("btn-transfer");
});

// Get Bonus
document.getElementById("btn-bonus").addEventListener("click", function () {
    toggle("form-bonus");
    btnStyle("btn-bonus");
});

// Pay Bill
document.getElementById("btn-bills").addEventListener("click", function () {
    toggle("form-paybill");
    btnStyle("btn-bills");
});

// Transactions
document.getElementById("btn-Transactions").addEventListener("click", function () {
    toggle("form-transection");
    btnStyle("btn-Transactions");
});
