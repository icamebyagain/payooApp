

// loginPage js 
 document.getElementById('loginBtn')
            .addEventListener('click', function (e) {
                e.preventDefault()
                const mobileNumber = 1234567890      
                const pin = 1234

                const mobileNumberVal = document.getElementById('mobileNumberInput').value
                const mobileNumberValConverted = parseInt(mobileNumberVal)

                const pinInputVal = document.getElementById('pinInput').value
                const pinInputValConverted = parseInt(pinInputVal)

                if (mobileNumberValConverted === mobileNumber && pinInputValConverted === pin){
                    window.location.href="main.html"
                }
                else{
                    alert('Invalid Mobile Number Or Pin')
                }
            })



            