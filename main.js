
function Question(text,options,answer){
    this.text = text;
    this.options = options;
    this.answer = answer;
}

Question.prototype.checkAnswer = function(ans){
    return ans == this.dogruCevap;
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




document.querySelector(".start-btn").addEventListener("click",function(){
    if(quiz.questions.length != quiz.index){
        console.log(quiz.getQuestion());
        quiz.index += 1;
    } else {
        console.log("enddd");
    }
})


