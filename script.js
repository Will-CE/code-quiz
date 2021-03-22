var start = document.getElementById('start');
var header = document.getElementById('header');
var para1 = document.getElementById('para1');

var questions = [{
    name: 'What does HTML stand for?',
    options: ['hypertext markup language', 'hyperloop makeup language', 'hypertank markdown language', 'none of the above'],
    correct: 'hypertext markup language'
},
{
    name: 'Commonly used data types DO NOT include:',
    options: ['strings', 'booleans', 'alerts', 'numbers'], 
    correct: 'booleans'
},
{
    name: 'The condition in an if / else statement is enclosed within?',
    options: ['quotes', 'curly-brackets', 'parentheses', 'square-brackets'],
    correct: 'parentheses'
},
{
    name: 'Arrays in JavaScript can be used to store:',
    options: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
    correct: 'all of the above'
},
{
    name:'String values must be enclosed within _____ when being assigned to variables.',
    options: ['commas', 'curly-brakcets', 'quotes', 'parentheses'],
    correct: 'curly-brackets'
}];

start.onclick = StartQuiz;

// function 
function StartQuiz() {
    start.style.display = 'none';
    header.style.display = 'none';
    para1.style.display = 'none';

    console.log('X');
};

