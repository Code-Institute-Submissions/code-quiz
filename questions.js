// Var with array and object for questions 
var questions = [
    {
        title: "Which of the following variable name is invalid?",
        choices: ["$newVar", "$new_Var", "$new-var", "all of the above"],
        answer: "$new-var"
    },
    {
        title: "Which of the following is the correct syntax to select the p siblings of a div element in css?",
        choices: ["p", "div p", "div + p", "div ~ p"],
        answer: "div ~ p"
    },
    {
        title: "Which of the following is the CSS property used to specify whether the text is written in the horizontal or vertical direction?",
        choices: ["text-indent", "writing-mode", "word-break", "none of the above"],
        answer: "writing-mode"
    },
    {
        title: "Which one of the following is an ternary operator in javascript?",
        choices: ["?", ":", "-", "+"],
        answer: "?"
    },
    {
        title: "The CSS property used to set the distance between the borders of the adjacent cells in the table is:",
        choices: ["border-collapse", "border-radius", "border-spacing", "none of the above"],
        answer: "border-spacing"
    },
    {
        title: "Which of the following number object function returns the value of the number in javascript?",
        choices: ["toString()", "valueOf()", "toLocalString()", "toPrecision()"],
        answer: "valueOf()"
    },
    {
        title: "Which of the following is not a value of the font-variant property in CSS?",
        choices: ["normal", "small-caps", "large-caps", "inherit"],
        answer: "large-caps"
    },
    {
        title: "Which of the following is not a JavaScript Data Types?",
        choices: ["boolean", "number", "float", "undefined"],
        answer: "float"
    },
    {
        title: "Which of the following is not a JavaScript Data Types?",
        choices: ["HighText Machine Language", "HyperText and links Markup Language", "HyperText Markup Language", "none of the above"],
        answer: "HyperText Markup Language"
    },
    {
        title: "Which of the following CSS property defines how an image or video fits into container with established height and width?",
        choices: ["object-fit", "object-position", "position", "none of the above"],
        answer: "object-fit"
    },
    {
        title: "The CSS property which is used to set the text wider or narrower compare to the default width of the font is:",
        choices: ["font-stretch property", "font-weight property", "text-transform property", "font.variant property"],
        answer: "font-stretch property"
    },
    {
        title: "Which of the following is NOT a type of combinator in CSS?",
        choices: ["+", "*", ">", "~"],
        answer: "*"
    },
    {
        title: "What output will come if we run the following part of the JavaScript code? var string2Num = parseInt('123abc')",
        choices: ["exception", "123abc", "123", "NaN"],
        answer: "123"
    },
    {
        title: "Which one of the following is known as the Equality operator, which is used to check whether the two values are equal or not in javascript?",
        choices: ["==", "=", "===", "&&"],
        answer: "=="
    },
    {
        title: "Which of the following javascript function of the String object returns the character in the string starting at the specified position via the specified number of characters?",
        choices: ["slice()", "substr()", "split()", "search()"],
        answer: "substr()"
    },
];

// Declared variables
var score = 0;
var questionIndex = 0;

// Start working code 
// Declared variables
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var questionsDiv = document.querySelector("#questionsDiv");
var wrapper = document.querySelector("#wrapper");

// Seconds left is 15 seconds per question:
var secondsLeft = 76;
// Holds interval time
var holdInterval = 0;
// Holds penalty time
var penalty = 10;
// Creates new element
var ulCreate = document.createElement("ul");

// Triggers timer on button, shows user a display on the screen
timer.addEventListener("click", function () {
    // We are checking zero because its originally set to zero
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "Time's up!";
            }
        }, 1000);
    }
    render(questionIndex);
});

// Renders questions and choices to page: 
function render(questionIndex) {
    // Clears existing data 
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";
    // For loops to loop through all info in array
    for (var i = 0; i < questions.length; i++) {
        // Appends question title only
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questionsDiv.textContent = userQuestion;
    }
    // New for each for question choices
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}
// Event to compare choices with answer
function compare(event) {
    var element = event.target;

    if (element.matches("li")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        // Correct condition 
        if (element.textContent == questions[questionIndex].answer) {
            score++;
            createDiv.textContent = "Correct! The answer is:  " + questions[questionIndex].answer;
            // Correct condition 
        } else {
            // Will deduct -5 seconds off secondsLeft for wrong answers
            secondsLeft = secondsLeft - penalty;
            createDiv.textContent = "Wrong! The correct answer is:  " + questions[questionIndex].answer;
        }

    }
    // Question Index determines number question user is on
    questionIndex++;

    if (questionIndex >= questions.length) {
        // All done will append last page with user stats
        allDone();
        createDiv.textContent = "End of quiz!" + " " + "You got  " + score + "/" + questions.length + " Correct!";
    } else {
        render(questionIndex);
    }
    questionsDiv.appendChild(createDiv);

}
// All done will append last page
function allDone() {
    questionsDiv.innerHTML = "";
    currentTime.innerHTML = "";

    // Heading:
    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "All Done!"

    questionsDiv.appendChild(createH1);

    // Paragraph
    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");

    questionsDiv.appendChild(createP);

    // Calculates time remaining and replaces it with score
    if (secondsLeft >= 0) {
        var timeRemaining = secondsLeft;
        var createP2 = document.createElement("p");
        clearInterval(holdInterval);
        createP.textContent = "Your final score is: " + timeRemaining;

        questionsDiv.appendChild(createP2);
    }

    // Label
    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your initials: ";

    questionsDiv.appendChild(createLabel);

    // input
    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.textContent = "";

    questionsDiv.appendChild(createInput);

    // submit
    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.textContent = "Submit";

    questionsDiv.appendChild(createSubmit);

    // Event listener to capture initials and local storage for initials and score
    createSubmit.addEventListener("click", function () {
        var initials = createInput.value;

        if (initials === null) {

            console.log("No value entered!");

        } else {
            var finalScore = {
                initials: initials,
                score: timeRemaining
            }
            console.log(finalScore);
            var allScores = localStorage.getItem("allScores");
            if (allScores === null) {
                allScores = [];
            } else {
                allScores = JSON.parse(allScores);
            }
            allScores.push(finalScore);
            var newScore = JSON.stringify(allScores);
            localStorage.setItem("allScores", newScore);
            // Travels to final page
            window.location.replace("./HighScores.html");
        }
    });

}
