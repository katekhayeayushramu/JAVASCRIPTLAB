// ==========================
// Global Scope
// ==========================

let bankName = "ABC Bank";


// ==========================
// Function Expression
// Reverse PIN
// ==========================

const reversePIN = function(pin){

    return pin.split("").reverse().join("");

};


// ==========================
// Arrow Function
// Check Palindrome
// ==========================

const isPalindrome = (pin)=>{

    return pin === reversePIN(pin);

};


// ==========================
// Function Declaration
// ==========================

function verifyPIN(){

    // Local Scope

    let pin = document.getElementById("pin").value;

    let result = document.getElementById("result");

    if(pin.trim()===""){

        result.innerHTML="❌ Please enter ATM PIN.";

        result.style.color="red";

        return;

    }

    if(!/^[0-9]+$/.test(pin)){

        result.innerHTML="❌ PIN should contain only numbers.";

        result.style.color="red";

        return;

    }

    if(isPalindrome(pin)){

        result.innerHTML=
        "⚠ Weak PIN!<br><br>" +
        "Your PIN is a palindrome.<br>" +
        "Example: 1221, 4554, 9889<br><br>" +
        "Please change your PIN.";

        result.style.color="red";

    }

    else{

        result.innerHTML=
        "✅ Strong PIN!<br><br>" +
        "Your PIN is NOT a palindrome.<br>" +
        "Transaction Allowed.";

        result.style.color="green";

    }

}
