const quizData = [
    {
        question: "Que fait i++",
        a: "renvoie la chaîne i+",
        b: "incrémente i de 1",
        c: "décale la valeur binaire de i",
        d: "ajoute 2 fois i",
        correct: "b"
    }, {
        question: "window.prompt() sert à ",
        a: "faire défiler un texte en scrolling",
        b: "faire défiler une fenêtre",
        c: "afficher une boite de dialogue de saisie",
        d: "modifier le caractère de prompt de la console",
        correct: "c"
    }, {
        question: "JavaScript ",
        a: "s'exécute sur le serveur uniquement",
        b: "doit être compilé avant d'être exécuté",
        c: "s'exécute sur le client",
        d: "est un langage dérivé de l'ADA",
        correct: "c"
    }
]

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const btn = document.getElementById("submit");


let currentQuiz = 0;
let score = 0;
let recup ;
let Elements;
const reponsesPossible = ["answer1", "answer2","answer3","answer4"]

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    //console.log(quizData[currentQuiz].correct);

    questionEl.innerHTML = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    
   
}



function getSelected() {
    const answers = document.querySelectorAll("answer");

    answers.forEach((answer) => {
        console.log(answer.checked);
    
    });
}

const  soumettre = () =>{

    comparaison();
    
    currentQuiz ++;
    getSelected();
    
    if(currentQuiz < quizData.length) {
        loadQuiz();
    }else {
        alert("Vous avez finit")
    }
    
    }

    const comparaison = () => {
        console.log(quizData[currentQuiz].correct);
        console.log(recup);
        console.log(quizData[currentQuiz].correct == recup);
    }

    const nettoyerRadio = (except) => {
        Elements = document.querySelectorAll(".answer");
        for (i = 0 ; i < 4; i++) {
            if (Elements[i].name != except ) {
                Elements[i].checked = false;
            }
        }
    }


    const garderCheck = (nom) => {
        recup = nom;
       console.log(recup);
       nettoyerRadio(nom);
    }


    // if(quizData[0].correct===  "b"){
    //     score = score++
    // }else if(quizData[1].correct === "c"){
    //    score =  score++;
    // }else if(quizData[2].correct === "c"){
    //     score = score++;
    // }

    window.addEventListener("click", function(e){
        console.log(e.target);
        
        if(e.target.type == "submit"){
            soumettre();
        }

        if(e.target.type === "radio"){
            garderCheck(e.target.name);
        }
        
    });

    


    