const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false }
        ]
    },
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Paris", correct: true },
            { text: "Rome", correct: false }
        ]

    
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: false },  
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "Which is largest desert in the world?",
        answers: [
            { text: "Sahara Desert", correct: false },
            { text: "Arabian Desert", correct: false },
            { text: "Gobi Desert", correct: false },
            { text: "Antarctic Desert", correct: true }
        ]
    },
    {
        question: "Who is the author of 'Harry Potter' series?",
        answers: [
            { text: "J.R.R. Tolkien", correct: false }, 
            { text: "J.K. Rowling", correct: true },
            { text: "George R.R. Martin", correct: false },
            { text: "C.S. Lewis", correct: false }
        ]
    },
    {
        question: "What is the smallest prime number?",
        answers: [
            { text: "0", correct: false },
            { text: "1", correct: false },
            { text: "2", correct: true },
            { text: "3", correct: false }
        ]
    },
    {
        question:"Which is smallest country in the world?",
        answers: [
            { text: "Monaco", correct: false },
            { text: "Nauru", correct: false },
            { text: "Vatican City", correct: true },
            { text: "San Marino", correct: false }
        ]
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answers: [
            { text: "Gold", correct: false },
            { text: "Iron", correct: false },
            { text: "Diamond", correct: true },
            { text: "Platinum", correct: false }
        ]
    },

    {
        question: "Which gas is most abundant in the Earth's atmosphere?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Nitrogen", correct: true },
            { text: "Carbon Dioxide", correct: false },
            { text: "Hydrogen", correct: false }
        ]
    },

    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "Vincent van Gogh", correct: false },
            { text: "Pablo Picasso", correct: false },
            { text: "Leonardo da Vinci", correct: true },
            { text: "Michelangelo", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            { text: "Ag", correct: false },
            { text: "Au", correct: true },
            { text: "Gd", correct: false },
            { text: "Go", correct: false }
        ]
    },
    {
        question: "Which organ in the human body is responsible for pumping blood?",
        answers: [
            { text: "Lungs", correct: false },
            { text: "Liver", correct: false },  
            { text: "Heart", correct: true },
            { text: "Kidneys", correct: false }
        ]   
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false },
            { text: "Mars", correct: false }
        ]
    },
    {
        question: "In which year did the Titanic sink?",
        answers: [
            { text: "1910", correct: false },  
            { text: "1912", correct: true },
            { text: "1914", correct: false },
            { text: "1916", correct: false }
        ]
    },
    {
        question: "What is the main ingredient in traditional Japanese miso soup?",
        answers: [
            { text: "Tofu", correct: false },

            { text: "Miso paste", correct: true },
            { text: "Seaweed", correct: false },
            { text: "Rice", correct: false }
        ]   
    },
    {
        question: "Which element has the chemical symbol 'O'?",     
        answers: [
            { text: "Gold", correct: false },
            { text: "Oxygen", correct: true },
            
            { text: "Osmium", correct: false },                 
            { text: "Zinc", correct: false }
        ]
    },
    {
        question: "Who is known as the 'Father of Computers'?",
        answers: [
            { text: "Alan Turing", correct: false },
            { text: "Charles Babbage", correct: true },
            { text: "Isaac Newton", correct: false },
            { text: "Nikola Tesla", correct: false }
        ]
    },
    {
        question: "What is the largest mammal in the world?",
        answers: [
            { text: "Elephant", correct: false },   
            { text: "Blue Whale", correct: true },
            { text: "Giraffe", correct: false },
            { text: "Hippopotamus", correct: false }
        ]
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: [
            { text: "China", correct: false },

            { text: "Japan", correct: true },
            { text: "South Korea", correct: false },
            { text: "Thailand", correct: false }
        ]
    },
    {
        question: "What is the process by which plants make their food?",
        answers: [
            { text: "Respiration", correct: false },
            { text: "Photosynthesis", correct: true },


            { text: "Transpiration", correct: false },
            { text: "Germination", correct: false }
        ]
    },

];   

const questionElement = document.getElementById("question"); // make sure id is 'question', not ' question'
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    // Clear previous answers
    answerButtonsElement.innerHTML = "";

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtonsElement.appendChild(button);

        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}



function resetState() {
    nextButton.style.display = "none";
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}   

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";   
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtonsElement.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }               
        button.disabled = true;
    });
    nextButton.style.display = "block"; 

}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}


nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length ) {
        handleNextButton();
    } else {
        startQuiz();
    }
});
startQuiz();