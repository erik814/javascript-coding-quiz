let questionTitle = "";
let option1 = "";
let option2 = "";
let option3 = "";
let option4 = "";
let answer = "";
let score = "";
let timeLeft = "";

let questions = [
    {
        questionTitle: "Question 1",
        option1: "option 1",
        option2: "option 2",
        option3: "option 3",
        option4: "option 4",
        answer: option2,
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



// Getting the quiz/timer started

function startTimer(){

    askQuestions();
}


function askQuestions(){
    for(var i = 0; i < questions.length; i++){

        // alert(questions[i].questionTitle);

        // var q1 = document.createElement("button");
        // btn.textContent = option1;  //try this stuff

        console.log(questions[i]);

        var displayQuestion = document.createElement("h2");
        displayQuestion.textContent = ("questionTitle");
        document.body.appendChild(displayQuestion);

        var displayOption1 = document.createElement("button");
        displayOption1.textContent = (option1);
        document.body.appendChild(displayOption1);

        var displayOption2 = document.createElement("button");
        displayOption2.textContent = (option2);
        document.body.appendChild(displayOption2);

        var displayOption3 = document.createElement("button");
        displayOption3.textContent = (option3);
        document.body.appendChild(displayOption3);

        var displayOption4 = document.createElement("button");
        displayOption4.textContent = (option4);
        document.body.appendChild(displayOption4);



        // var newBtn = document.createElement("button");
        // // newBtn.setAttribute();
        // newBtn.textContent(option1);
        // document.body.appendChild(newBtn);

    }
};


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

