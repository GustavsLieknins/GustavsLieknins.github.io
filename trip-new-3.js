const toggletheme = document.getElementById("checkbox-header");
const html = document.getElementById("html");


console.log(toggletheme.checked)

toggletheme.addEventListener("change",togglethemeHandler)
// html.dataset.theme = "theme";
function togglethemeHandler() {
    if(toggletheme.checked){
        html.dataset.theme = "dark";
        localStorage.setItem('theme', 'dark');
    }else {
        html.dataset.theme = "light"; 
        localStorage.setItem('theme', 'light');
    };
}

const theme = localStorage.getItem('theme');
if(theme == 'light' || !theme){
    html.dataset.theme = "light";
}else{
    html.dataset.theme = "dark";
    document.getElementById("checkbox-header").checked = true;
}



const response = await fetch("questions.json");
const questions = await response.json();

console.log(questions[0]["answers"]);

const main = document.getElementById("main");

questions.forEach((question) => {
    const section = document.createElement("section");
    console.log(section);
    main.appendChild(section);

    const qTeksts = document.createElement("h1");
    section.appendChild(qTeksts);
    qTeksts.textContent = question["question"];

    const qApvalks = document.createElement("div");
    qApvalks.className = "container";
    section.appendChild(qApvalks);
    // const qClickable = document.createElement("div");
    // qClickable.className = "div-elements-selectables";
    // qApvalks.appendChild(qClickable);

    const allAnswers = question.answers;
    allAnswers.forEach((answer) => {
        const qClickable = document.createElement("div");
        qClickable.className = "div-elements-selectables";
        qApvalks.appendChild(qClickable);
        
        const input = document.createElement("input");
        input.name = q.question;
        input.type = "radio";
        qClickable.appendChild(input);

        const lable = document.createElement("lable");
        lable.appendChild(input);
        lable.textContent = answer;
    });
    
});

// console.log(questions[0]["answers"][2]);

// qApvalks.Foreach((qApvalks) => {
//     const qClickable = document.createElement("div");
//     qClickable.className = "div-elements-selectables";
//     qApvalks.appendChild(qClickable);

// });
