const data=[
    {
        id:1,
        question:"What is the capital city of France?",
        answers:[
            {answer:"London" ,isCorrect:false},
            {answer:"Berlin" ,isCorrect:false},
            {answer:"Paris" ,isCorrect:true},
            {answer:"Rome" ,isCorrect:false}
        ]
    },
    {
        id:2,
        question:"Which planet is known as the Red Planet ?",
        answers:[
            {answer:"Mars" ,isCorrect:true},
            {answer:"Venus" ,isCorrect:false},
            {answer:"Jupiter" ,isCorrect:false},
            {answer:"Saturn" ,isCorrect:false}
        ]
        
    },
    {
        id:3,
        question:"Who wrote the play Romeo and Juliet?",
        answers:[
            {answer:"Mark Twain" ,isCorrect:false},
            {answer:"Charles Dickens" ,isCorrect:false},
            {answer:"William Shakespeare" ,isCorrect:true},
            {answer:"J.K. Rowling" ,isCorrect:false}
        ]

    },
    {
        id:4,
        question:"What is the largest mammal in the world?",
        answers:[
            {answer:"African Elephant" ,isCorrect:false},
            {answer:"Blue Whale" ,isCorrect:true},
            {answer:"Giraffe" ,isCorrect:false},
            {answer:"Polar Bear" ,isCorrect:false}
        ]
    },
    {
        id:5,
        question:"Which famous scientist developed the theory of relativity?",
        answers:[
            {answer:"Isaac Newton" ,isCorrect:false},
            {answer:"Galileo Galilei" ,isCorrect:false},
            {answer:"Albert Einstein" ,isCorrect:true},
            {answer:"Nikola Tesla" ,isCorrect:false}
        ]
    }
]
const gameScrn=document.querySelector(".game");
const resultScrn=document.querySelector(".result");
const qstn=document.querySelector(".ques");
const ansrContainer=document.querySelector(".answers");
const play=document.querySelector(".play");
const submit=document.querySelector(".submit");

let qIndex=0;
let crctCount=0;
let wrongCount=0;
let selectedAnsr;

let playAgain=()=>{
     qIndex=0;
     crctCount=0;
     wrongCount=0;
    showQstn(0);
    resultScrn.style.display="none";
    gameScrn.style.display="block";
    

}
play.addEventListener("click",playAgain)

let showResult=()=>{
    resultScrn.style.display="block";
    gameScrn.style.display="none";
    let score_g=(crctCount-wrongCount)
    let greetings=resultScrn.querySelector(".greetings")
    if(score_g<=0){
        greetings.textContent=`Sorry you lose the game`;
        greetings.style.color="red"
    }
    else if(score_g>0 && score_g<2)
    {
        greetings.textContent=`Greetings...played well`;
        greetings.style.color="yellow"
    }
    else{
        greetings.textContent=`Congratz...You Won`;
        greetings.style.color="green"
    }
    resultScrn.querySelector(".correct").textContent=`Correct Answers : ${crctCount}`;
    resultScrn.querySelector(".wrong").textContent=`Wrong Answers : ${wrongCount}`;
    resultScrn.querySelector(".score").textContent=`Score : ${(crctCount-wrongCount)}`;
}
let showQstn=(qstnNo)=>
{
    if(qIndex===data.length) return showResult();
    selectedAnsr=null;
    qstn.textContent=data[qstnNo].question;
    ansrContainer.innerHTML=data[qstnNo].answers.map((item,index)=>
        `<div class="answer">
            <input type="radio" name="ans" id=${index} value=${item.isCorrect}>
            <label for=${index}>${item.answer}</label>
        </div>`
    
    ).join("");
    selectAnswer();
}

let selectAnswer=()=>{
    ansrContainer.querySelectorAll("input").forEach(el=>{
        el.addEventListener('click',(e)=>{
            selectedAnsr=e.target.value;           
        })
    })
}
const submitAnsr=()=>{
    submit.addEventListener("click",()=>{
        if(selectedAnsr != null){
            selectedAnsr === "true" ? crctCount++ : wrongCount++;
            qIndex++;
            showQstn(qIndex);

        }
        else{
            alert("Please select an answer to continue game !")
        }

    })
}

showQstn(qIndex);
submitAnsr();