



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




function check(){
    let checkbox1 = document.getElementById("checkbox1");
    let checkbox2 = document.getElementById("checkbox2");
    let checkbox3 = document.getElementById("checkbox3");
    let checkbox4 = document.getElementById("checkbox4");

    if(checkbox1.checked ){
        document.getElementById("onequiz").style.background = "#DC3757";
    }else{
        document.getElementById("onequiz").style.background = "var(--divabackgrounds)";
    }

    if(checkbox2.checked ){
        document.getElementById("secondquiz").style.background = "#DC3757";
    }else{
        document.getElementById("secondquiz").style.background = "var(--divabackgrounds)";     
    }

    if(checkbox3.checked ){
        document.getElementById("thirdquiz").style.background = "#DC3757";
    }else{
        document.getElementById("thirdquiz").style.background = "var(--divabackgrounds)"; 
    }

    if(checkbox4.checked ){
        document.getElementById("forquiz").style.background = "#00B16E";
    }else{
        document.getElementById("forquiz").style.background = "var(--divabackgrounds)";      
    }

}

function check2() {
    let checkbox1 = document.getElementById("checkbox11");
    let checkbox2 = document.getElementById("checkbox22");
    let checkbox3 = document.getElementById("checkbox33");
    let checkbox4 = document.getElementById("checkbox44");

    if(checkbox1.checked ){
        document.getElementById("onequiz2").style.background = "#DC3757";
    }else{
        document.getElementById("onequiz2").style.background = "var(--divabackgrounds)";
    }

    if(checkbox2.checked ){
        document.getElementById("secondquiz2").style.background = "#00B16E";
    }else{
        document.getElementById("secondquiz2").style.background = "var(--divabackgrounds)";     
    }

    if(checkbox3.checked ){
        document.getElementById("thirdquiz2").style.background = "#DC3757";
    }else{
        document.getElementById("thirdquiz2").style.background = "var(--divabackgrounds)"; 
    }

    if(checkbox4.checked ){
        document.getElementById("forquiz2").style.background = "#DC3757";
    }else{
        document.getElementById("forquiz2").style.background = "var(--divabackgrounds)";      
    }

}

function check3() {
    let checkbox1 = document.getElementById("checkbox111");
    let checkbox2 = document.getElementById("checkbox222");
    let checkbox3 = document.getElementById("checkbox333");
    let checkbox4 = document.getElementById("checkbox444");

    if(checkbox1.checked ){
        document.getElementById("onequiz3").style.background = "#DC3757";
    }else{
        document.getElementById("onequiz3").style.background = "var(--divabackgrounds)";
    }

    if(checkbox2.checked ){
        document.getElementById("secondquiz3").style.background = "#DC3757";
    }else{
        document.getElementById("secondquiz3").style.background = "var(--divabackgrounds)";     
    }

    if(checkbox3.checked ){
        document.getElementById("thirdquiz3").style.background = "#00B16E";
    }else{
        document.getElementById("thirdquiz3").style.background = "var(--divabackgrounds)"; 
    }

    if(checkbox4.checked ){
        document.getElementById("forquiz3").style.background = "#DC3757";
    }else{
        document.getElementById("forquiz3").style.background = "var(--divabackgrounds)";      
    }

}