var score = 0;
//Question #1
var rightans1 = function () {
    score = score += 20;
    alert("Correct");
    document.getElementById("q1").style.display = "none"; 
    document.getElementById("q2").style.display = "block";
    
};

var wrongans1 = function (){
    alert("Wrong!");
    document.getElementById("q1").style.display = "none"; 
    document.getElementById("q2").style.display = "block";
    document.getElementById("progress-bar").style.width = 40
};

//Question #2
var rightans2 = function () {
    score = score += 20;
    alert("Correct");
    document.getElementById("q2").style.display = "none"; 
    document.getElementById("q3").style.display = "block";
};

var wrongans2 = function (){
    alert("Wrong!");
    document.getElementById("q2").style.display = "none"; 
    document.getElementById("q3").style.display = "block";
};
//Question #3
var rightans3 = function () {
    score = score += 20;
    alert("Correct");
    document.getElementById("q3").style.display = "none";
    document.getElementById("q4").style.display = "block";
};

var wrongans3 = function () {
    alert("Wrong!");
    document.getElementById("q3").style.display = "none";
    document.getElementById("q4").style.display = "block";
};
//Question #4
var rightans4 = function () {
    score = score += 20;
    alert("Correct");
    document.getElementById("q4").style.display = "none";
    document.getElementById("q5").style.display = "block";
};

var wrongans4 = function () {
    alert("Wrong!");
    document.getElementById("q4").style.display = "none";
    document.getElementById("q5").style.display = "block";
};
//Question #5
var rightans5 = function () {
    score = score += 20;
    alert("Correct");
    document.getElementById("q5").style.display = "none";
    if (score >= 80) {
    document.getElementById("endQuizPass").style.display = "block";
    document.getElementById("endQuizPass").innerHTML += "<br>" +  "Your Score is " + score + "%"
    }
    else {
    document.getElementById("endQuizFail").style.display = "block";
    document.getElementById("endQuizFail").innerHTML += "<br>" + "Your Score is " + score + "%"
    }
};

var wrongans5 = function () {
    alert("Wrong!");
    document.getElementById("q5").style.display = "none";
    if (score >= 80) {
        document.getElementById("endQuizPass").style.display = "block";
        document.getElementById("endQuizPass").innerHTML +=  "Your Score is " + score + "%"
    }
    else {
        document.getElementById("endQuizFail").style.display = "block";
        document.getElementById("endQuizFail").innerHTML +=  "Your Score is " + score + "%"
    }
};