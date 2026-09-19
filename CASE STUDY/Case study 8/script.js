// =====================================================
// ONLINE JOB APPLICATION FORM
// FORM VALIDATION USING JAVASCRIPT EVENTS
// =====================================================


// Get Form

const form = document.getElementById("jobForm");


// =====================================================
// HELPER FUNCTIONS
// =====================================================


// Make field valid

function setValid(input, errorElement) {

    input.classList.remove("invalid");

    input.classList.add("valid");

    errorElement.textContent = "";
}


// Make field invalid

function setInvalid(input, errorElement, message) {

    input.classList.remove("valid");

    input.classList.add("invalid");

    errorElement.textContent = message;
}


// =====================================================
// FULL NAME
// =====================================================

const nameInput =
    document.getElementById("fullName");

const nameError =
    document.getElementById("nameError");


nameInput.addEventListener("input", function () {

    const name = nameInput.value.trim();


    if (name.length >= 3) {

        setValid(nameInput, nameError);

    } else {

        setInvalid(
            nameInput,
            nameError,
            "Name must contain at least 3 characters."
        );

    }

});


// =====================================================
// DATE OF BIRTH
// =====================================================

const dobInput =
    document.getElementById("dob");

const dobError =
    document.getElementById("dobError");


dobInput.addEventListener("change", function () {

    if (dobInput.value !== "") {

        setValid(dobInput, dobError);

    } else {

        setInvalid(
            dobInput,
            dobError,
            "Please select your date of birth."
        );

    }

});


// =====================================================
// GENDER
// =====================================================

const genderInput =
    document.getElementById("gender");

const genderError =
    document.getElementById("genderError");


genderInput.addEventListener("change", function () {

    if (genderInput.value !== "") {

        setValid(genderInput, genderError);

    } else {

        setInvalid(
            genderInput,
            genderError,
            "Please select your gender."
        );

    }

});


// =====================================================
// EMAIL
// =====================================================

const emailInput =
    document.getElementById("email");

const emailError =
    document.getElementById("emailError");


emailInput.addEventListener("input", function () {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (emailPattern.test(emailInput.value)) {

        setValid(emailInput, emailError);

    } else {

        setInvalid(
            emailInput,
            emailError,
            "Enter a valid email address."
        );

    }

});


// =====================================================
// MOBILE NUMBER
// =====================================================

const mobileInput =
    document.getElementById("mobile");

const mobileError =
    document.getElementById("mobileError");


mobileInput.addEventListener("input", function () {

    const mobilePattern =
        /^[6-9][0-9]{9}$/;


    if (mobilePattern.test(mobileInput.value)) {

        setValid(mobileInput, mobileError);

    } else {

        setInvalid(
            mobileInput,
            mobileError,
            "Enter a valid 10-digit mobile number."
        );

    }

});


// =====================================================
// ADDRESS
// =====================================================

const addressInput =
    document.getElementById("address");

const addressError =
    document.getElementById("addressError");


addressInput.addEventListener("input", function () {

    if (addressInput.value.trim().length >= 5) {

        setValid(addressInput, addressError);

    } else {

        setInvalid(
            addressInput,
            addressError,
            "Please enter your complete address."
        );

    }

});


// =====================================================
// CITY
// =====================================================

const cityInput =
    document.getElementById("city");

const cityError =
    document.getElementById("cityError");


cityInput.addEventListener("input", function () {

    if (cityInput.value.trim().length >= 2) {

        setValid(cityInput, cityError);

    } else {

        setInvalid(
            cityInput,
            cityError,
            "Enter a valid city."
        );

    }

});


// =====================================================
// STATE
// =====================================================

const stateInput =
    document.getElementById("state");

const stateError =
    document.getElementById("stateError");


stateInput.addEventListener("input", function () {

    if (stateInput.value.trim().length >= 2) {

        setValid(stateInput, stateError);

    } else {

        setInvalid(
            stateInput,
            stateError,
            "Enter a valid state."
        );

    }

});


// =====================================================
// PIN CODE
// =====================================================

const pinInput =
    document.getElementById("pin");

const pinError =
    document.getElementById("pinError");


pinInput.addEventListener("input", function () {

    const pinPattern =
        /^[1-9][0-9]{5}$/;


    if (pinPattern.test(pinInput.value)) {

        setValid(pinInput, pinError);

    } else {

        setInvalid(
            pinInput,
            pinError,
            "Enter a valid 6-digit PIN code."
        );

    }

});


// =====================================================
// HIGHEST QUALIFICATION
// =====================================================

const qualificationInput =
    document.getElementById("qualification");

const qualificationError =
    document.getElementById("qualificationError");


qualificationInput.addEventListener(
    "change",
    function () {

        if (qualificationInput.value !== "") {

            setValid(
                qualificationInput,
                qualificationError
            );

        } else {

            setInvalid(
                qualificationInput,
                qualificationError,
                "Please select your qualification."
            );

        }

    }
);


// =====================================================
// UNIVERSITY
// =====================================================

const universityInput =
    document.getElementById("university");

const universityError =
    document.getElementById("universityError");


universityInput.addEventListener(
    "input",
    function () {

        if (
            universityInput.value.trim().length >= 3
        ) {

            setValid(
                universityInput,
                universityError
            );

        } else {

            setInvalid(
                universityInput,
                universityError,
                "Enter university/institute name."
            );

        }

    }
);


// =====================================================
// PASSING YEAR
// =====================================================

const yearInput =
    document.getElementById("passingYear");

const yearError =
    document.getElementById("yearError");


yearInput.addEventListener("input", function () {

    const year =
        Number(yearInput.value);

    const currentYear =
        new Date().getFullYear();


    if (
        year >= 1950 &&
        year <= currentYear
    ) {

        setValid(yearInput, yearError);

    } else {

        setInvalid(
            yearInput,
            yearError,
            "Enter a valid passing year."
        );

    }

});


// =====================================================
// PERCENTAGE 0 TO 100
// =====================================================

const percentageInput =
    document.getElementById("percentage");

const percentageError =
    document.getElementById("percentageError");


percentageInput.addEventListener(
    "input",
    function () {

        const percentage =
            Number(percentageInput.value);


        // Check empty value

        if (percentageInput.value === "") {

            setInvalid(
                percentageInput,
                percentageError,
                "Percentage is required."
            );

            return;
        }


        // Check 0 to 100

        if (
            percentage >= 0 &&
            percentage <= 100
        ) {

            setValid(
                percentageInput,
                percentageError
            );

        } else {

            setInvalid(
                percentageInput,
                percentageError,
                "Percentage must be between 0 and 100."
            );

        }

    }
);


// =====================================================
// JOB POSITION
// =====================================================

const jobInput =
    document.getElementById("jobPosition");

const jobError =
    document.getElementById("jobError");


jobInput.addEventListener(
    "change",
    function () {

        if (jobInput.value !== "") {

            setValid(jobInput, jobError);

        } else {

            setInvalid(
                jobInput,
                jobError,
                "Please select a job position."
            );

        }

    }
);


// =====================================================
// WORK EXPERIENCE
// =====================================================

const experienceInput =
    document.getElementById("experience");

const experienceError =
    document.getElementById("experienceError");


experienceInput.addEventListener(
    "input",
    function () {

        if (
            experienceInput.value === "" ||
            Number(experienceInput.value) >= 0
        ) {

            setValid(
                experienceInput,
                experienceError
            );

        } else {

            setInvalid(
                experienceInput,
                experienceError,
                "Experience cannot be negative."
            );

        }

    }
);


// =====================================================
// EXPECTED SALARY
// =====================================================

const salaryInput =
    document.getElementById("salary");

const salaryError =
    document.getElementById("salaryError");


salaryInput.addEventListener(
    "input",
    function () {

        if (
            salaryInput.value !== "" &&
            Number(salaryInput.value) > 0
        ) {

            setValid(
                salaryInput,
                salaryError
            );

        } else {

            setInvalid(
                salaryInput,
                salaryError,
                "Enter a valid expected salary."
            );

        }

    }
);


// =====================================================
// PROGRAMMING LANGUAGES
// =====================================================

const languages =
    document.querySelectorAll(
        'input[name="language"]'
    );

const languageError =
    document.getElementById("languageError");


function validateLanguages() {

    let selected = false;


    languages.forEach(function (language) {

        if (language.checked) {

            selected = true;

        }

    });


    if (selected) {

        languageError.textContent = "";

        return true;

    } else {

        languageError.textContent =
            "Select at least one programming language.";

        return false;

    }

}


languages.forEach(function (language) {

    language.addEventListener(
        "change",
        function () {

            validateLanguages();

        }
    );

});


// =====================================================
// TECHNICAL SKILLS
// =====================================================

const skillsInput =
    document.getElementById("skills");

const skillsError =
    document.getElementById("skillsError");


skillsInput.addEventListener(
    "input",
    function () {

        if (
            skillsInput.value.trim().length >= 3
        ) {

            setValid(
                skillsInput,
                skillsError
            );

        } else {

            setInvalid(
                skillsInput,
                skillsError,
                "Enter at least one technical skill."
            );

        }

    }
);


// =====================================================
// FORM SUBMISSION
// =====================================================

form.addEventListener(
    "submit",
    function (event) {

        // Stop form submission

        event.preventDefault();


        let valid = true;


        // ---------------------------------------------
        // NAME
        // ---------------------------------------------

        if (
            nameInput.value.trim().length < 3
        ) {

            setInvalid(
                nameInput,
                nameError,
                "Enter a valid name."
            );

            valid = false;

        }


        // ---------------------------------------------
        // DOB
        // ---------------------------------------------

        if (dobInput.value === "") {

            setInvalid(
                dobInput,
                dobError,
                "Select date of birth."
            );

            valid = false;

        }


        // ---------------------------------------------
        // GENDER
        // ---------------------------------------------

        if (genderInput.value === "") {

            setInvalid(
                genderInput,
                genderError,
                "Select gender."
            );

            valid = false;

        }


        // ---------------------------------------------
        // EMAIL
        // ---------------------------------------------

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (
            !emailPattern.test(
                emailInput.value
            )
        ) {

            setInvalid(
                emailInput,
                emailError,
                "Enter a valid email."
            );

            valid = false;

        }


        // ---------------------------------------------
        // MOBILE
        // ---------------------------------------------

        const mobilePattern =
            /^[6-9][0-9]{9}$/;


        if (
            !mobilePattern.test(
                mobileInput.value
            )
        ) {

            setInvalid(
                mobileInput,
                mobileError,
                "Enter valid 10-digit mobile number."
            );

            valid = false;

        }


        // ---------------------------------------------
        // ADDRESS
        // ---------------------------------------------

        if (
            addressInput.value.trim().length < 5
        ) {

            setInvalid(
                addressInput,
                addressError,
                "Enter complete address."
            );

            valid = false;

        }


        // ---------------------------------------------
        // CITY
        // ---------------------------------------------

        if (
            cityInput.value.trim() === ""
        ) {

            setInvalid(
                cityInput,
                cityError,
                "Enter city."
            );

            valid = false;

        }


        // ---------------------------------------------
        // STATE
        // ---------------------------------------------

        if (
            stateInput.value.trim() === ""
        ) {

            setInvalid(
                stateInput,
                stateError,
                "Enter state."
            );

            valid = false;

        }


        // ---------------------------------------------
        // PIN
        // ---------------------------------------------

        const pinPattern =
            /^[1-9][0-9]{5}$/;


        if (
            !pinPattern.test(
                pinInput.value
            )
        ) {

            setInvalid(
                pinInput,
                pinError,
                "Enter valid 6-digit PIN."
            );

            valid = false;

        }


        // ---------------------------------------------
        // QUALIFICATION
        // ---------------------------------------------

        if (
            qualificationInput.value === ""
        ) {

            setInvalid(
                qualificationInput,
                qualificationError,
                "Select qualification."
            );

            valid = false;

        }


        // ---------------------------------------------
        // UNIVERSITY
        // ---------------------------------------------

        if (
            universityInput.value.trim() === ""
        ) {

            setInvalid(
                universityInput,
                universityError,
                "Enter university."
            );

            valid = false;

        }


        // ---------------------------------------------
        // PASSING YEAR
        // ---------------------------------------------

        const year =
            Number(yearInput.value);

        const currentYear =
            new Date().getFullYear();


        if (
            yearInput.value === "" ||
            year < 1950 ||
            year > currentYear
        ) {

            setInvalid(
                yearInput,
                yearError,
                "Enter a valid passing year."
            );

            valid = false;

        }


        // ---------------------------------------------
        // PERCENTAGE 0 TO 100
        // ---------------------------------------------

        const percentage =
            Number(percentageInput.value);


        if (
            percentageInput.value === "" ||
            percentage < 0 ||
            percentage > 100
        ) {

            setInvalid(
                percentageInput,
                percentageError,
                "Percentage must be between 0 and 100."
            );

            valid = false;

        }


        // ---------------------------------------------
        // JOB POSITION
        // ---------------------------------------------

        if (
            jobInput.value === ""
        ) {

            setInvalid(
                jobInput,
                jobError,
                "Select job position."
            );

            valid = false;

        }


        // ---------------------------------------------
        // SALARY
        // ---------------------------------------------

        if (
            salaryInput.value === "" ||
            Number(salaryInput.value) <= 0
        ) {

            setInvalid(
                salaryInput,
                salaryError,
                "Enter expected salary."
            );

            valid = false;

        }


        // ---------------------------------------------
        // PROGRAMMING LANGUAGES
        // ---------------------------------------------

        if (!validateLanguages()) {

            valid = false;

        }


        // ---------------------------------------------
        // TECHNICAL SKILLS
        // ---------------------------------------------

        if (
            skillsInput.value.trim().length < 3
        ) {

            setInvalid(
                skillsInput,
                skillsError,
                "Enter technical skills."
            );

            valid = false;

        }


        // =================================================
        // FINAL RESULT
        // =================================================

        const successMessage =
            document.getElementById(
                "successMessage"
            );


        if (valid) {

            successMessage.textContent =
                "✅ Application submitted successfully!";

            successMessage.style.color =
                "green";


            // Reset form

            form.reset();


            // Remove validation colors

            document.querySelectorAll(
                "input, select, textarea"
            ).forEach(function (element) {

                element.classList.remove("valid");

                element.classList.remove("invalid");

            });


            // Remove error messages

            document.querySelectorAll("small")
                .forEach(function (error) {

                    error.textContent = "";

                });


        } else {

            successMessage.textContent =
                "❌ Please correct the highlighted fields.";

            successMessage.style.color =
                "red";

        }

    }
);


// =====================================================
// RESET BUTTON
// =====================================================

document.getElementById("resetBtn")
    .addEventListener(
        "click",
        function () {

            // Remove colors

            document.querySelectorAll(
                "input, select, textarea"
            ).forEach(function (element) {

                element.classList.remove("valid");

                element.classList.remove("invalid");

            });


            // Remove error messages

            document.querySelectorAll("small")
                .forEach(function (error) {

                    error.textContent = "";

                });


            // Remove success message

            document.getElementById(
                "successMessage"
            ).textContent = "";

        }
    );  
