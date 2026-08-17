"use strict";

document.addEventListener("DOMContentLoaded", function () {

    const themeButton =
        document.getElementById("themeBtn");

    const searchInput =
        document.getElementById("toolSearch");

    const categoryButtons =
        document.querySelectorAll(".category");

    const toolCards =
        document.querySelectorAll(".tool-card");


    const ageButton =
        document.getElementById("ageCalculateBtn");

    const percentageButton =
        document.getElementById("percentageCalculateBtn");

    const bmiButton =
        document.getElementById("bmiCalculateBtn");

    const gstButton =
        document.getElementById("gstCalculateBtn");

    const emiButton =
        document.getElementById("emiCalculateBtn");


    /* THEME */

    const savedTheme =
        localStorage.getItem("smartToolsTheme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        updateThemeButton();
    }

    if (themeButton) {
        themeButton.addEventListener(
            "click",
            toggleTheme
        );
    }


    /* CALCULATOR BUTTONS */

    if (ageButton) {
        ageButton.addEventListener(
            "click",
            calculateAge
        );
    }

    if (percentageButton) {
        percentageButton.addEventListener(
            "click",
            calculatePercentage
        );
    }

    if (bmiButton) {
        bmiButton.addEventListener(
            "click",
            calculateBMI
        );
    }

    if (gstButton) {
        gstButton.addEventListener(
            "click",
            calculateGST
        );
    }

    if (emiButton) {
        emiButton.addEventListener(
            "click",
            calculateEMI
        );
    }


    /* SEARCH */

    if (searchInput) {
        searchInput.addEventListener(
            "input",
            function () {
                searchTools(
                    searchInput,
                    toolCards,
                    categoryButtons
                );
            }
        );
    }


    /* CATEGORY FILTER */

    categoryButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const category =
                    button.dataset.category;

                categoryButtons.forEach(
                    function (item) {
                        item.classList.remove("active");
                    }
                );

                button.classList.add("active");

                if (searchInput) {
                    searchInput.value = "";
                }

                toolCards.forEach(function (card) {

                    const cardCategory =
                        card.dataset.category;

                    const shouldShow =
                        category === "all" ||
                        cardCategory === category;

                    card.classList.toggle(
                        "hidden",
                        !shouldShow
                    );
                });
            }
        );
    });


    /* COMING SOON */

    const comingSoonButtons =
        document.querySelectorAll(
            "[data-coming-soon]"
        );

    comingSoonButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                comingSoon(
                    button.dataset.comingSoon
                );
            }
        );
    });

});


/* AGE CALCULATOR */

function calculateAge() {

    const dobElement =
        document.getElementById("dob");

    const result =
        document.getElementById("ageResult");

    if (!dobElement || !result) {
        return;
    }

    const dob =
        dobElement.value;

    if (dob === "") {
        result.innerText =
            "Please select your date of birth.";
        return;
    }

    const birthDate =
        new Date(dob + "T00:00:00");

    const today =
        new Date();

    if (
        Number.isNaN(birthDate.getTime()) ||
        birthDate > today
    ) {
        result.innerText =
            "Date of birth cannot be in the future.";
        return;
    }

    let age =
        today.getFullYear() -
        birthDate.getFullYear();

    const monthDifference =
        today.getMonth() -
        birthDate.getMonth();

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
        "Your age is " +
        age +
        " years.";
}


/* PERCENTAGE CALCULATOR */

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
        Number.isNaN(obtained) ||
        Number.isNaN(total) ||
        total <= 0 ||
        obtained < 0
    ) {
        result.innerText
