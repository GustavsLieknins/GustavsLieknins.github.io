let skaitlis = 0;
let randoms = Math.floor(Math.random() * 5) + 5;
document.getElementById("button-for-sending-names").addEventListener("click", wheelMaker);
// if(skaitlis == length){
//     skaitlis = 0;
//   }else{

//   }
// for(let i = 0; i<randoms; i++){
//     wheelMaker()
// }
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  let looper = getRndInteger(29, 45);
  let numba = 0;
  let used = 0;
function wheelMaker(){
    if(used == 1){
        const smoll = document.getElementById("random-name");
        smoll.remove();
        used = 0;
        numba = 0;
        wheelMaker();
        skaitlis = 0;
        looper = getRndInteger(29, 50);
    }else{
    numba++
    console.log(looper);
    console.log("random vertiba" + randoms);
    const inputText = document.getElementById("teksta-logs").value;
    const vardi = inputText.split(" ");

    console.log(vardi);

    const containers = document.getElementById("random-shower");
    const length = vardi.length - 1;

        const teksts = document.createElement("h1");
        teksts.id = "random-name";
        teksts.textContent = vardi[skaitlis];
        if(numba >= looper/1.1){
            teksts.style.animation = 'randomiser 0.5s';
        }else if(numba >= looper/1.2){
            teksts.style.animation = 'randomiser 0.18s';
        }else if(numba >= looper/1.4){
            teksts.style.animation = 'randomiser 0.1s';
        }else if(numba >= looper/2){
            teksts.style.animation = 'randomiser 0.07s';  
        }else{
            teksts.style.animation = 'randomiser 0.05s';
        }
        containers.appendChild(teksts);
    teksts.addEventListener('animationend', () => {
        if(numba == looper){
            teksts.style.animation = '';
            teksts.textContent = vardi[skaitlis];
            // teksts.style.animation = 'winner 0.3s';
            containers.appendChild(teksts);
            used = 1;
            winner(containers, teksts);
            
        }else if(skaitlis == length){
            containers.removeChild(teksts);
            skaitlis = 0;
            wheelMaker();
        }else{
            containers.removeChild(teksts);
            skaitlis = skaitlis+1;
            wheelMaker();
        }
      });
    }
    }

    function winner(containers, teksts){
        teksts.style.animation = 'winner 1s';
        containers.appendChild(teksts);  
    }









