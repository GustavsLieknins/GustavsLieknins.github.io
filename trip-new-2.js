const toggletheme = document.getElementById("checkbox-header");
const html = document.getElementById("html");


console.log(toggletheme.checked)

toggletheme.addEventListener("change",togglethemeHandler)

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

const visasPareizasAtbildes = ["Indonēzija", "Austrālija", "Liepāja"];

for (let i = 1; i<=3; i++){
    const visasAtbildes = document.getElementsByName(i);

    visasAtbildes.forEach((atbilde) => {
        atbilde.addEventListener("click", () =>
            checkHandler(visasPareizasAtbildes[i-1], visasAtbildes)
            );
    });
}

function checkHandler(pareizaAtbilde, visasAtbildes) {
    visasAtbildes.forEach((atbilde) => {
        if (atbilde.checked == true) {
            if(atbilde.value == pareizaAtbilde){
                atbilde.parentNode.style.backgroundColor = "#00B16E";
            }else {
                atbilde.parentNode.style.backgroundColor = "#DC3757";
            }
        } else {
            atbilde.parentNode.style.backgroundColor = "var(--divabackgrounds)";
        }
        
    })
}


