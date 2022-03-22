const Qusdata = [
    {
        qustion : "Qus 1 .what is your name?",
        Option1 : "Jahid Islam Rafsan",
        Option2 : "Rafsan",
        Option3 : "Jahid Islam",
        Option4 : "Fahmida Islam",
        ans : "ans4"
    },
    {
        qustion : "Qus 2 .Oboni is a _____?",
        Option1 : "Rafsan ar bow",
        Option2 : "Abir",
        Option3 : "Gada",
        Option4 : "Rafsan ar bow and gada",
        ans : "ans4"
    },
    {
        qustion : "Qus 3 .what is your sami name?",
        Option1 : "Jahid Islam Rafsan",
        Option2 : "abir",
        Option3 : "TAkku sila",
        Option4 : "Fahmida Islam",
        ans : "ans1"
    },
    {
        qustion : "Qus 4 .kal amra deka krbo Yes/No",
        Option1 : "Yes",
        Option2 : "No",
        Option3 : "not",
        Option4 : "Na oi",
        ans : "ans1"
    },
];

const Qustions = document.getElementById("Qustion");
const Option1 = document.getElementById("option1");
const Option2 = document.getElementById("option2");
const Option3 = document.getElementById("option3");
const Option4 = document.getElementById("option4");
const submit = document.getElementById("submit");
const result = document.getElementById("result");
const options = document.querySelectorAll(".option");

let qusCount = 0;
function lodeData() {
    Qustions.innerHTML = Qusdata[qusCount].qustion;
    Option1.innerHTML = Qusdata[qusCount].Option1;
    Option2.innerHTML = Qusdata[qusCount].Option2;
    Option3.innerHTML = Qusdata[qusCount].Option3;
    Option4.innerHTML = Qusdata[qusCount].Option4;
}

lodeData();


function gatChake(){
    let ansyer;
    options.forEach((curantEle) => {
        if(curantEle.checked){
            ansyer = curantEle.id;
        }
        
    });
    return ansyer;
}
let scors = 0;

submit.addEventListener('click',()=>{

    const Anschakes = gatChake();
    // console.log(Anschakes);
    if(Anschakes == Qusdata[qusCount].ans){
        scors++;
        console.log(scors);    
    }
    qusCount++;

    if(qusCount < Qusdata.length){
        lodeData(Qusdata[qusCount]);
    }else{
        submit.style.display = "none";
        result.style.display = "flex";
        result.innerHTML = `Your scors ${scors} / out Of ${Qusdata.length} ✌ 
        <button onclick ="location.reload()" id="tryAgen">try agan</button>`;
    }
    
})




