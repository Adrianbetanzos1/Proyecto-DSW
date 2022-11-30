function submitForm(event){
    event.preventDefault();
}

function getMyData(){
    const question = document.getElementById("q").value;
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;
    const c = document.getElementById("c").value;
    const d = document.getElementById("d").value;
    const correctAnswer = document.getElementById("ca").value;
    
    const newData = {question, answers: { a, b, c, d }, correctAnswer }

    if(question != "" && a != "" && b != "" && c != "" && d != "" && correctAnswer != ""){
        myQuestions.push(newData);
        document.getElementById('qCount').innerHTML = myQuestions.length;
        //displays the current number of questions in the bank in the <h1> title element

        document.getElementById("addQuestion").reset();
    }
        return myQuestions;
}

function saveMyFile(){
    localStorage.setItem("myQuestions", JSON.stringify(myQuestions));
    location.replace("quiz_app.html");
}

const addQuestionButton = document.getElementById("submitQuestion");


const saveButton = document.getElementById("saveQuestionBank");

const myQuestions = [];

const newObject = localStorage.getItem("myQuestions");

let dataStored = JSON.parse(newObject);
if(dataStored != null){

    for(i=0; i < dataStored.length; i++){
        myQuestions.push(dataStored[i]);
    }

    } else {
        for(i=0; i < data.length; i++){
            myQuestions.push(data[i]);
    }
}
    

document.getElementById('qCount').innerHTML = myQuestions.length;

addQuestionButton.addEventListener("click", getMyData);

saveButton.addEventListener("click", saveMyFile);
