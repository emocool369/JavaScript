function formatGrade(grade){
    let result = "";

    if (grade < 3.00){
        result = "Fail";
    } else if (grade >= 3.00 && grade < 3.5){
        result = "Poor";
        //console.log(`Poor (${grade.toFixed(2)})`);
    } else if (grade >= 3.5 && grade < 4.5){
        result = "Good";
    } else if (grade >= 4.5 && grade < 5.5){
        result = "Very good";
    } else if (grade >= 5.5){
        result = "Excellent";
    }

    if (result === "Fail"){
        console.log(result + " " + "(" + Math.floor(grade) + ")");
    } else {
    console.log(result + " " + "(" + grade.toFixed(2) + ")");
}
}

formatGrade(3.33);
formatGrade(4.50);
formatGrade(2.99);