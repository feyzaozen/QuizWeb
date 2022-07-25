
function Question(text,options,answer){
    this.text = text;
    this.options = options;
    this.answer = answer;
}

Question.prototype.checkAnswer = function(ans){
    return ans === this.answer;
}

let questions = [
    new Question("What is the capital of Canada?", {a: "Ottawa",b:"Toronto", c:"Montreal"}, "a"),
    new Question("Name the third known planet from the sun in our solar system.", {a: "Venus",b:"Earth", c:"Mars"}, "b"),
    new Question("What is the capital of Canada?", {a: "Ottawa",b:"Toronto", c:"Montreal"}, "a"),
    new Question("Name the third known planet from the sun in our solar system.", {a: "Venus",b:"Earth", c:"Mars"}, "b")
];

function Quiz(questions){
    this.questions = questions;
    this.index = 0;
}

Quiz.prototype.getQuestion = function(){
    return this.questions[this.index];
}

const quiz = new Quiz(questions);




document.querySelector(".btn_start").addEventListener("click",function(){
    document.querySelector(".quiz_box").classList.add("active")
    showQuestion(quiz.getQuestion());
    document.querySelector(".next-btn").classList.remove("show");
     
    
})

document.querySelector(".next-btn").addEventListener("click",function(){
    if(quiz.questions.length != quiz.index +1){
        quiz.index += 1;
        showQuestion(quiz.getQuestion());
        document.querySelector(".next-btn").classList.add("show");
        
    } else {
        console.log("endd");
    }
});


const option_list = document.querySelector(".option_list");
const correctIcon = '<div class = "icon"> <i class = "fas fa-check" > </i> </div>';
const incorrectIcon = '<div class = "icon"> <i class = "fas fa-times" > </i> </div>';

function showQuestion(soru){
    let question =  `<span> ${soru.text}</span> `;
    let options = '';

    for(let cevap in soru.options){
        options += 

            `
            <div class = "option p-2 my-2">
                <span> <b>${cevap}</b>: ${soru.options[cevap]} </span>
            </div>
            `;
    }
    
    document.querySelector(".question_text").innerHTML = question;

    option_list.innerHTML = options;

    const option = option_list.querySelectorAll(".option");
    
    for(let opt of option){
        opt.setAttribute("onclick","optionSelected(this)");
       
    }
   
    
}


function optionSelected(option){
    
    let cevap = option.querySelector("span b").textContent;
    
    let soru = quiz.getQuestion();
 
    if(soru.checkAnswer(cevap)){
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend",correctIcon);
    } else {
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend",incorrectIcon);
        
    }

    for(let i=0; i< option_list.children.length; i++){
        option_list.children[i].classList.add("disabled");
    }

    document.querySelector(".next-btn").classList.add("show");
}

