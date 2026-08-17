/* =========================================
   SMARTTOOLS - script.js
   ========================================= */


/* =========================================
   AGE CALCULATOR
   ========================================= */

function calculateAge() {

    const dobInput = document.getElementById("dob");
    const result = document.getElementById("ageResult");

    if (!dobInput || !result) return;

    const dob = dobInput.value;

    if (dob === "") {
        result.innerText = "Please select your date of birth.";
        return;
    }

    const birthDate = new Date(dob + "T00:00:00");
    const today = new Date();

    if (birthDate > today) {
        result.innerText = "Date of birth cannot be in the future.";
        return;
    }

    let years =
        today.getFullYear() -
        birthDate.getFullYear();

    let months =
        today.getMonth() -
        birthDate.getMonth();

    let days =
        today.getDate() -
        birthDate.getDate();

    if (days < 0) {

        months--;

        const previousMonth =
            new Date(
                today.getFullYear(),
                today.getMonth(),
                0
            );

        days += previousMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    result.innerText =
        "Age: " +
        years +
        " Years, " +
        months +
        " Months, " +
        days +
        " Days.";
}


/* =========================================
   PERCENTAGE CALCULATOR
   ========================================= */

function calculatePercentage() {

    const obtained =
        parseFloat(
            document.getElementById("obtained").value
        );

    const total =
        parseFloat(
            document.getElementById("total").value
        );

    const result =
        document.getElementById("percentageResult");

    if (
        isNaN(obtained) ||
        isNaN(total) ||
        total <= 0 ||
        obtained < 0
    ) {

        result.innerText =
            "Please enter valid marks.";

        return;
    }

    if (obtained > total) {

        result.innerText =
            "Obtained marks cannot exceed total marks.";

        return;
    }

    const percentage =
        (obtained / total) * 100;

    result.innerText =
        "Percentage: " +
        percentage.toFixed(2) +
        "%";
}


/* =========================================
   BMI CALCULATOR
   ========================================= */

function calculateBMI() {

    const weight =
        parseFloat(
            document.getElementById("weight").value
        );

    const height =
        parseFloat(
            document.getElementById("height").value
        );

    const result =
        document.getElementById("bmiResult");

    if (
        isNaN(weight) ||
        isNaN(height) ||
        weight <= 0 ||
        height <= 0
    ) {

        result.innerText =
            "Please enter valid values.";

        return;
    }

    const heightMeter =
        height / 100;

    const bmi =
        weight /
        (heightMeter * heightMeter);

    let category = "";

    if (bmi < 18.5) {

        category = "Underweight";

    } else if (bmi < 25) {

        category = "Normal";

    } else if (bmi < 30) {

        category = "Overweight";

    } else {

        category = "Obesity";
    }

    result.innerText =
        "BMI: " +
        bmi.toFixed(2) +
        " (" +
        category +
        ")";
}


/* =========================================
   GST CALCULATOR
   ========================================= */

function calculateGST() {

    const amount =
        parseFloat(
            document.getElementById("amount").value
        );

    const gst =
        parseFloat(
            document.getElementById("gst").value
        );

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


/* =========================================
   EMI CALCULATOR
   ========================================= */

function calculateEMI() {

    const loan =
        parseFloat(
            document.getElementById("loan").value
        );

    const interest =
        parseFloat(
            document.getElementById("interest").value
        );

    const months =
        parseInt(
            document.getElementById("months").value
        );

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

        emi =
            loan / months;

    } else {

        emi =
            loan *
            monthlyRate *
            Math.pow(
                1 + monthlyRate,
                months
            ) /
            (
                Math.pow(
                    1 + monthlyRate,
                    months
                ) - 1
            );
    }

    result.innerText =
        "Monthly EMI: ₹" +
        emi.toFixed(2);
}


/* =========================================
   TOOL SEARCH
   ========================================= */

function searchTools() {

    const searchInput =
        document.getElementById("toolSearch");

    if (!searchInput) return;

    const search =
        searchInput.value
            .trim()
            .toLowerCase();

    const cards =
        document.querySelectorAll(
            ".tool-card"
        );

    const noResults =
        document.getElementById(
            "noResults"
        );

    let visibleCount = 0;


    cards.forEach(function(card) {

        const name =
            (
                card.dataset.name || ""
            ).toLowerCase();

        const text =
            card.innerText.toLowerCase();

        const category =
            (
                card.dataset.category || ""
            ).toLowerCase();

        if (
            name.includes(search) ||
            text.includes(search) ||
            category.includes(search)
        ) {

            card.style.display = "";

            visibleCount++;

        } else {

            card.style.display = "none";
        }

    });


    if (noResults) {

        noResults.style.display =
            visibleCount === 0
                ? "block"
                : "none";
    }
}


/* =========================================
   CATEGORY FILTER
   ========================================= */

function filterTools(category, button) {

    const cards =
        document.querySelectorAll(
            ".tool-card"
        );

    const buttons =
        document.querySelectorAll(
            ".category"
        );

    const searchInput =
        document.getElementById(
            "toolSearch"
        );

    const noResults =
        document.getElementById(
            "noResults"
        );


    buttons.forEach(function(btn) {

        btn.classList.remove("active");

    });


    if (button) {
        button.classList.add("active");
    }


    if (searchInput) {
        searchInput.value = "";
    }


    let visibleCount = 0;


    cards.forEach(function(card) {

        const cardCategory =
            card.dataset.category || "";


        if (
            category === "all" ||
            cardCategory === category
        ) {

            card.style.display = "";

            visibleCount++;

        } else {

            card.style.display = "none";
        }

    });


    if (noResults) {

        noResults.style.display =
            visibleCount === 0
                ? "block"
                : "none";
    }
}


/* =========================================
   COMING SOON
   ========================================= */

function comingSoon(toolName) {

    alert(
        toolName +
        " is coming soon!"
    );
}


/* =========================================
   DARK MODE
   ========================================= */

function toggleTheme() {

    document.body.classList.toggle(
        "dark-mode"
    );

    const isDark =
        document.body.classList.contains(
            "dark-mode"
        );

    localStorage.setItem(
        "smartToolsDarkMode",
        isDark ? "true" : "false"
    );

    updateThemeButton();
}


function updateThemeButton() {

    const button =
        document.getElementById(
            "themeBtn"
        );

    if (!button) return;

    const isDark =
        document.body.classList.contains(
            "dark-mode"
        );

    button.innerText =
        isDark ? "☀️" : "🌙";
}


/* =========================================
   LOAD SAVED THEME
   ========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const savedTheme =
            localStorage.getItem(
                "smartToolsDarkMode"
            );

        if (savedTheme === "true") {

            document.body.classList.add(
                "dark-mode"
            );
        }

        updateThemeButton();


        /* Search on typing */

        const searchInput =
            document.getElementById(
                "toolSearch"
            );

        if (searchInput) {

            searchInput.addEventListener(
                "input",
                searchTools
            );
        }


        /* Category buttons */

        const categoryButtons =
            document.querySelectorAll(
                ".category"
            );

        categoryButtons.forEach(
            function(button) {

                button.addEventListener(
                    "click",
                    function() {

                        filterTools(
                            button.dataset.category,
                            button
                        );

                    }
                );

            }
        );

    }
);
