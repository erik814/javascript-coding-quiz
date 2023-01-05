let questionTitle = "";
let option1 = "";
let option2 = "";
let option3 = "";
let option4 = "";
let answer = "";
let score = 0;
let timeLeft = 70;
let questionIndex = 0;
let displayTimer = "";

let questions = [
    {
        questionTitle: "Question 1",
        option1: "Chuck",
        option2: "Misfits",
        option3: "Sandra",
        option4: "Converse",
        answer: "Misfits",
    },

    {
        questionTitle: "Question 2",
        option1: "option 5",
        option2: "option 6",
        option3: "option 7",
        option4: "option 8",
        answer: option4,
    },
];



// A formula to use for each question
// this will display the question, listen for a response, and determine 'correctness'

function questionFormula(index){

    // document.body.innerHTML = "";

    var displayQuestion = document.createElement("h2");
    displayQuestion.textContent = (questions[index].questionTitle);
    document.body.appendChild(displayQuestion);

    var displayOption1 = document.createElement("button");
    displayOption1.textContent = (questions[index].option1);
    document.body.appendChild(displayOption1);

    var displayOption2 = document.createElement("button");
    displayOption2.textContent = (questions[index].option2);
    document.body.appendChild(displayOption2);

    var displayOption3 = document.createElement("button");
    displayOption3.textContent = (questions[index].option3);
    document.body.appendChild(displayOption3);

    var displayOption4 = document.createElement("button");
    displayOption4.textContent = (questions[index].option4);
    document.body.appendChild(displayOption4);

    document.body.addEventListener("click", function(e){

        console.log(e.target.textContent);
        console.log(questions[index].answer);

        if(e.target.textContent === questions[index].answer){
            correct();
        } else if (e.target.textContent === questions[index].option1 || e.target.textContent === questions[index].option2 || e.target.textContent === questions[index].option3 || e.target.textContent === questions[index].option4) {
            incorrect();
        }
    });
}




function correct(){
    console.log("yup");

    timeLeft += 10;

    var displayCorrect = document.createElement("p");
    displayCorrect.textContent = ("That's right, smartypants!");
    document.body.appendChild(displayCorrect);

    setTimeout(function(){
        nextQuestion();
    },2000)
}


function incorrect(){
    console.log("nope");

    timeLeft -= 10;

    var displayIncorrect = document.createElement("p");
    displayIncorrect.textContent = ("Mmmmm, not quite...");
    document.body.appendChild(displayIncorrect);

    setTimeout(function(){
        nextQuestion();
    },2000)
}



// Initial Display

var initialHeader = document.createElement("h1");
initialHeader.textContent=("Erik's Coding Quiz");
document.body.appendChild(initialHeader);


var initialText = document.createElement("p");
initialText.textContent = ("Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ipsa doloremque laboriosam tenetur totam dolorem placeat molestiae dignissimos fugiat porro a distinctio corporis cumque, provident beatae atque similique natus quas?");
document.body.appendChild(initialText);


var startButton = document.createElement("button");
startButton.textContent=("Begin Quiz");
document.body.appendChild(startButton);


startButton.addEventListener("click", startTimer);

console.log(document.body.children);


// Here is where the process actually begins

// Getting the timer started
console.log(document.body.children)

function startTimer(){

    document.body.innerHTML = "";

    var displayTimer = document.createElement("aside");
    document.body.appendChild(displayTimer);   // i need to get this to go to div

    console.log(document.body);

    var countDown = setInterval(function(){
        displayTimer.textContent = (timeLeft);
        timeLeft--;
    }, 1000);

    // if(timeLeft === 0){
    //     bring up the closing function
    // }

    firstQuestion();
}




// Displaying Questions
function firstQuestion(){
    questionFormula(0);
}

function nextQuestion(){
    document.body.innerHTML = "";
    

    questionIndex++;
    questionFormula(questionIndex);
}




//dont forget this stuff vvv

// function nextQuestion0(){
//     questionFormula(1);
// }












        // var newBtn = document.createElement("button");
        // // newBtn.setAttribute();
        // newBtn.textContent(option1);
        // document.body.appendChild(newBtn);



//     determineCorrectness();
// };


// function determineCorrectness(){
//     if(e.target === questions[i].answer){
//         console.log("correct");
//         score++;
//     }
// }


// var btn = document.createElement("button");
// btn.textContent = "Click Me"
// append the button somewhere
// i think i can use this to generate the choices


// use this to create questions.   question as h2, answers as ul/li


// var newBtn = document.createElement("button");
// newBtn.setAttribute();
// newBtn.textContent("Hello");
// document.body.appendChild(newBtn);

// document.body.addEventListener("click", function(event){
//     if(event.target.addEventListener.matches("button")){
//         const color = event.target.getAttribute("data-color");
//         console.log(color);
//     }
// })


// persist data

