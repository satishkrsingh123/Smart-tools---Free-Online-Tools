// ==============================
// AGE CALCULATOR
// ==============================

function calculateAge() {

    const dob = document.getElementById("dob").value;
    const result = document.getElementById("ageResult");

    if (dob === "") {
        result.innerText = "Please select your date of birth.";
        return;
    }

    const birthDate = new Date(dob);
    const today = new Date();

    if (birthDate > today) {
        result.innerText = "Date of birth cannot be in the future.";
        return;
    }

    let age = today.getFullYear() - birthDate.getFullYear();

    const monthDifference =
        today.getMonth() - birthDate.getMonth();

    if (
        monthDifference < 0 ||
        (
            monthDifference === 0 &&
            today.getDate() < birthDate.getDate()
        )
    ) {
        age--;
    }

    result.innerText =
        "Your age is " + age + " years.";
}



// ==============================
// PERCENTAGE CALCULATOR
// ==============================

function calculatePercentage() {

    const obtained =
        parseFloat(document.getElementById("obtained").value);

    const total =
        parseFloat(document.getElementById("total").value);

    const result =
        document.getElementById("percentageResult");

    if (
        isNaN(obtained) ||
        isNaN(total) ||
        total <= 0 ||
        obtained < 0
    ) {
        result.innerText = "Please enter valid marks.";
        return;
    }

    if (obtained > total) {
        result.innerText =
            "Obtained marks cannot be greater than total marks.";
        return;
    }

    const percentage =
        (obtained / total) * 100;

    result.innerText =
        "Percentage: " + percentage.toFixed(2) + "%";
}



// ==============================
// BMI CALCULATOR
// ==============================

function calculateBMI() {

    const weight =
        parseFloat(document.getElementById("weight").value);

    const height =
        parseFloat(document.getElementById("height").value);

    const result =
        document.getElementById("bmiResult");

    if (
        isNaN(weight) ||
        isNaN(height) ||
        weight <= 0 ||
        height <= 0
    ) {
        result.innerText =
            "Please enter valid weight and height.";
        return;
    }

    const heightMeter =
        height / 100;

    const bmi =
        weight / (heightMeter * heightMeter);

    let category;

    if (bmi < 18.5) {
        category = "Underweight";
    }
    else if (bmi < 25) {
        category = "Normal";
    }
    else if (bmi < 30) {
        category = "Overweight";
    }
    else {
        category = "Obesity";
    }

    result.innerText =
        "BMI: " +
        bmi.toFixed(2) +
        " (" +
        category +
        ")";
}



// ==============================
// GST CALCULATOR
// ==============================

function calculateGST() {

    const amount =
        parseFloat(document.getElementById("amount").value);

    const gst =
        parseFloat(document.getElementById("gst").value);

    const result =
        document.getElementById("gstResult");

    if (
        isNaN(amount) ||
        isNaN(gst) ||
        amount < 0 ||
        gst < 0
    ) {
        result.innerText =
            "Please enter valid values.";
        return;
    }

    const gstAmount =
        amount * gst / 100;

    const total =
        amount + gstAmount;

    result.innerText =
        "GST: ₹" +
        gstAmount.toFixed(2) +
        " | Total: ₹" +
        total.toFixed(2);
}



// ==============================
// EMI CALCULATOR
// ==============================

function calculateEMI() {

    const loan =
        parseFloat(document.getElementById("loan").value);

    const interest =
        parseFloat(document.getElementById("interest").value);

    const months =
        parseFloat(document.getElementById("months").value);

    const result =
        document.getElementById("emiResult");

    if (
        isNaN(loan) ||
        isNaN(interest) ||
        isNaN(months) ||
        loan <= 0 ||
        interest < 0 ||
        months <= 0
    ) {
        result.innerText =
            "Please enter valid values.";
        return;
    }

    const monthlyRate =
        interest / 12 / 100;

    let emi;

    if (monthlyRate === 0) {

        emi = loan / months;

    } else {

        emi =
            loan *
            monthlyRate *
            Math.pow(1 + monthlyRate, months) /
            (
                Math.pow(1 + monthlyRate, months) - 1
            );
    }

    result.innerText =
        "Monthly EMI: ₹" +
        emi.toFixed(2);
}



// ==============================
// TOOL SEARCH
// ==============================

function searchTools() {

    const search =
        document
            .getElementById("toolSearch")
            .value
            .toLowerCase()
            .trim();

    const cards =
        document.querySelectorAll(".tool-card");

    cards.forEach(card => {

        const name =
            card.dataset.name.toLowerCase();

        if (name.includes(search)) {
            card.classList.remove("hidden");
        }
        else {
            card.classList.add("hidden");
        }

    });
}



// ==============================
// CATEGORY FILTER
// ==============================

function filterTools(category, button) {

    const cards =
        document.querySelectorAll(".tool-card");

    document
        .querySelectorAll(".category")
        .forEach(btn => {
            btn.classList.remove("active");
        });

    button.classList.add("active");

    document.getElementById("toolSearch").value = "";

    cards.forEach(card => {

        if (
            category === "all" ||
            card.dataset.category === category
        ) {
            card.classList.remove("hidden");
        }
        else {
            card.classList.add("hidden");
        }

    });
}



// ==============================
// DARK MODE
// ==============================

function toggleTheme() {

    document.body.classList.toggle("dark");

    const button =
        document.querySelector(".theme-btn");

    if (document.body.classList.contains("dark")) {

        button.innerText = "☀️";

        localStorage.setItem(
            "smartToolsTheme",
            "dark"
        );

    } else {

        button.innerText = "🌙";

        localStorage.setItem(
            "smartToolsTheme",
            "light"
        );
    }
}



// ==============================
// LOAD SAVED THEME
// ==============================

window.addEventListener("DOMContentLoaded", function () {

    const savedTheme =
        localStorage.getItem("smartToolsTheme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark");

        document.querySelector(".theme-btn").innerText =
            "☀️";
    }

});



// ==============================
// COMING SOON
// ==============================

function comingSoon(toolName) {

    alert(
        toolName +
        " is coming soon! We are working on it."
    );
}
