// ==============================
// Global Scope
// ==============================

let appName = "Palindrome Checker";

// ==============================
// Closure Example
// ==============================

function createCounter() {

    let count = 0;

    return function () {

        count++;

        return count;

    };

}

const counter = createCounter();


// ==============================
// Function Declaration
// ==============================

function checkPalindrome() {

    try {

        let input = document.getElementById("textInput").value;

        if (input.trim() === "") {

            throw "Please enter some text.";

        }

        // ==============================
        // Function Expression
        // ==============================

        const cleanText = function (text) {

            return text
                .toLowerCase()
                .replace(/[^a-z0-9]/g, "");

        };

        // ==============================
        // Arrow Function
        // ==============================

        const reverseText = text =>
            text.split("").reverse().join("");

        let cleaned = cleanText(input);

        let result =
            cleaned === reverseText(cleaned);

        let visits = counter();

        document.getElementById("result").innerHTML =

            result

            ? `✅ "${input}" is a Palindrome.<br><br>Checked ${visits} time(s).`

            : `❌ "${input}" is NOT a Palindrome.<br><br>Checked ${visits} time(s).`;

    }

    catch (error) {

        document.getElementById("result").innerHTML =
            `<span style="color:red;">${error}</span>`;

    }

}
