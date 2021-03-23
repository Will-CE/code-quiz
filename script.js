var start = document.getElementById('start');
var header = document.getElementById('header');
var para1 = document.getElementById('para1');
let currentQuesIndex = 0;


var questions = [{
    text: 'What does HTML stand for?',
    options: ['hypertext markup language', 'hyperloop makeup language', 'hypertank markdown language', 'none of the above'],
    correct: 'hypertext markup language'
},
{
    text: 'Commonly used data types DO NOT include:',
    options: ['strings', 'booleans', 'alerts', 'numbers'], 
    correct: 'booleans'
},
{
    text: 'The condition in an if / else statement is enclosed within _____ ? ',
    options: ['quotes', 'curly-brackets', 'parentheses', 'square-brackets'],
    correct: 'parentheses'
},
{
    text: 'Arrays in JavaScript can be used to store:',
    options: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
    correct: 'all of the above'
},
{
    text:'String values must be enclosed within _____ when being assigned to variables.',
    options: ['commas', 'curly-brackets', 'quotes', 'parentheses'],
    correct: 'curly-brackets'
}];

let currentQues = questions[currentQuesIndex];

start.onclick = StartQuiz;

// function 
function StartQuiz() {
    start.style.display = 'none';
    header.style.display = 'none';
    para1.style.display = 'none';

    for (let i = 0; i < questions[0].length; i++) {
        const question = questions[i];
        
    }

    console.log(StartQuiz);
};

