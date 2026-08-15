// AGE CALCULATOR

function calculateAge() {

    const dob = document.getElementById("dob").value;

    if (dob === "") {
        document.getElementById("ageResult").innerText =
            "Please select your date of birth.";
        return;
    }

    const birthDate = new Date(dob);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    const month = today.getMonth() - birthDate.getMonth();

    if (
        month < 0 ||
        (month === 0 && today.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    document.getElementById("ageResult").innerText =
        "Your age is " + age + " years.";
}



// PERCENTAGE CALCULATOR

function calculatePercentage() {

    const obtained =
        parseFloat(document.getElementById("obtained").value);

    const total =
        parseFloat(document.getElementById("total").value);

    if (
        isNaN(obtained) ||
        isNaN(total) ||
        total <= 0
    ) {
        document.getElementById("percentageResult").innerText =
            "Please enter valid marks.";
        return;
    }

    const percentage = (obtained / total) * 100;

    document.getElementById("percentageResult").innerText =
        "Percentage: " + percentage.toFixed(2) + "%";
}



// BMI CALCULATOR

function calculateBMI() {

    const weight =
        parseFloat(document.getElementById("weight").value);

    const height =
        parseFloat(document.getElementById("height").value);

    if (
        isNaN(weight) ||
        isNaN(height) ||
        weight <= 0 ||
        height <= 0
    ) {
        document.getElementById("bmiResult").innerText =
            "Please enter valid values.";
        return;
    }

    const heightMeter = height / 100;

    const bmi = weight / (heightMeter * heightMeter);

    let category = "";

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

    document.getElementById("bmiResult").innerText =
        "BMI: " + bmi.toFixed(2) + " (" + category + ")";
}



// GST CALCULATOR

function calculateGST() {

    const amount =
        parseFloat(document.getElementById("amount").value);

    const gst =
        parseFloat(document.getElementById("gst").value);

    if (
        isNaN(amount) ||
        isNaN(gst) ||
        amount < 0 ||
        gst < 0
    ) {
        document.getElementById("gstResult").innerText =
            "Please enter valid values.";
        return;
    }

    const gstAmount = amount * gst / 100;

    const total = amount + gstAmount;

    document.getElementById("gstResult").innerText =
        "GST: ₹" + gstAmount.toFixed(2) +
        " | Total: ₹" + total.toFixed(2);
}



// EMI CALCULATOR

function calculateEMI() {

    const loan =
        parseFloat(document.getElementById("loan").value);

    const interest =
        parseFloat(document.getElementById("interest").value);

    const months =
        parseFloat(document.getElementById("months").value);

    if (
        isNaN(loan) ||
        isNaN(interest) ||
        isNaN(months) ||
        loan <= 0 ||
        months <= 0
    ) {
        document.getElementById("emiResult").innerText =
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
            (Math.pow(1 + monthlyRate, months) - 1);
    }

    document.getElementById("emiResult").innerText =
        "Monthly EMI: ₹" + emi.toFixed(2);
}