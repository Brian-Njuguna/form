
const form = document.querySelector("form");

const country = document.getElementById("country");
const mail = document.getElementById("mail");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const mailerror = document.getElementById("mailerror");
const countryerror = document.getElementById("countryerror");
const passworderror = document.getElementById("passworderror");
const confirmpassworderror = document.getElementById("confirmpassworderror");

// Email validation
mail.addEventListener("input", () => {
    if (mail.validity.valid) {
        mailerror.textContent = "";
    } else {
        showMailError();
    }
});

// Country validation
country.addEventListener("input", () => {
    if (country.validity.valid) {
        countryerror.textContent = "";
    } else {
        showCountryError();
    }
});

// Password validation
password.addEventListener("input", () => {
    if (password.validity.valid) {
        passworderror.textContent = "";
    } else {
        showPasswordError();
    }

    checkPasswordMatch();
});

// Confirm password validation
confirmPassword.addEventListener("input", () => {
    checkPasswordMatch();
});

// Email error messages
function showMailError() {
    if (mail.validity.valueMissing) {
        mailerror.textContent = "You need to type an email";
    } else if (mail.validity.typeMismatch) {
        mailerror.textContent = "Invalid Email";
    }
}

// Country error messages
function showCountryError() {
    if (country.validity.valueMissing) {
        countryerror.textContent = "Kindly enter your country";
    }
}

// Password error messages
function showPasswordError() {
    if (password.validity.valueMissing) {
        passworderror.textContent = "Kindly enter a password";
    } else if (password.validity.tooShort) {
        passworderror.textContent =
            "Your password must be at least 8 characters";
    } else if (password.validity.patternMismatch) {
        passworderror.textContent =
            "Your password must contain at least one lowercase letter, one uppercase letter, one number and one special character.";
    }
}

// Confirm password validation
function checkPasswordMatch() {
    if (confirmPassword.value === "") {
        confirmPassword.setCustomValidity("");
        confirmpassworderror.textContent = "";
    } else if (confirmPassword.value !== password.value) {
        confirmPassword.setCustomValidity("Passwords do not match");
        confirmpassworderror.textContent = "Passwords do not match";
    } else {
        confirmPassword.setCustomValidity("");
        confirmpassworderror.textContent = "";
    }
}

// Form submission validation
form.addEventListener("submit", (event) => {
    checkPasswordMatch();

    if (!form.checkValidity()) {
        event.preventDefault();

        if (!mail.validity.valid) {
            showMailError();
        }

        if (!country.validity.valid) {
            showCountryError();
        }

        if (!password.validity.valid) {
            showPasswordError();
        }

        if (!confirmPassword.validity.valid) {
            if (confirmPassword.validity.valueMissing) {
                confirmpassworderror.textContent =
                    "Please confirm your password";
            } else {
                confirmpassworderror.textContent =
                    "Passwords do not match";
            }
        }
    }
});
