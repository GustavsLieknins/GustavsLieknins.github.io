
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
    let count = 0;
    let ups = 0;

    let checkbox1 = document.getElementById("checkbox1");
    let checkbox2 = document.getElementById("checkbox2");
    let checkbox3 = document.getElementById("checkbox3");
    let checkbox4 = document.getElementById("checkbox4");


    if(checkbox1.checked == true){
        count++;
    }

    if(checkbox3.checked == true){
        count++;
    }
    if(checkbox4.checked == true){
        count++;
    }

    if(checkbox1.checked == false && checkbox2.checked == false && checkbox3.checked == false && checkbox4.checked == false){
        document.getElementById("check-answer").innerHTML = "Droši spied uz kastītēm!!";
    }else if(checkbox2.checked == false ){
        document.getElementById("check-answer").innerHTML = "Tu izpildiji " + count + " no 3 pareizi!";
    }else{
        document.getElementById("check-answer").innerHTML = "Ahhh nepareizo nospiedi :(";
    }
}