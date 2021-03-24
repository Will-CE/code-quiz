let start = document.getElementById('start');
let header = document.getElementById('header');
let para1 = document.getElementById('para1');

// line 81
let incrementEl = document.querySelector("#increment");
let decrementEl = document.querySelector("#decrement");
let countEl = document.querySelector("#count");

let currentQuesIndex = 0;




let questions = [{
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

let secondsLeft = 10;
timerInterval; 

// function 
function StartQuiz() {
    start.style.display = 'none';
    header.style.display = 'none';

    for (let i = 0; i < questions[0].length; i++) {
        const question = questions[i];
    };
    console.log(StartQuiz);
};

// Timer that counts down from 45
function countdown() {
    var timeLeft = 45;
  
    var timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      } else if (timeLeft === 1) {
        
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        timerEl.textContent = '';
       
        clearInterval(timeInterval);
        displayMessage();
      };
    }, 1000);
  };


  // unit4 lesson12
function setCounterText() {
    countEl.textContent = count;
  }
  incrementEl.addEventListener("click", function() {
    count++;
    setCounterText();
  });
  decrementEl.addEventListener("click", function() {
    if (count > 0) {
      count--;
      setCounterText();
    }
  });