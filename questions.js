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