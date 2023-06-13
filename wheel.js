



let skaitlis = 0;
let randoms = Math.floor(Math.random() * 5) + 5;
document.getElementById("button-for-sending-names").addEventListener("click", wheelMaker);
// if(skaitlis == length){
//     skaitlis = 0;
//   }else{

//   }
for(let i = 0; i<randoms; i++){
    wheelMaker()
}

function wheelMaker(){
    console.log("random vertiba" + randoms);
    const inputText = document.getElementById("teksta-logs").value;
    const vardi = inputText.split(" ");

    console.log(vardi);

    const containers = document.getElementById("random-shower");
    const length = vardi.length;

        const teksts = document.createElement("h1");
        teksts.className = "random-name";
        teksts.textContent = vardi[skaitlis];
        teksts.style.animation = 'randomiser 0.3s';
        containers.appendChild(teksts);

    teksts.addEventListener('animationend', () => {
        containers.removeChild(teksts);
        skaitlis = skaitlis+1;
        wheelMaker(); // Call the function recursively to add another element
      });
    }
    // Start the animation by adding the first element








/////////////////////////////////////////////////////////////////////////////////


    // vardi.forEach((vardii, index) => {
                // containers.removeChild(teksts);
        // const teksts = document.createElement("h1");
        // teksts.className = "random-name";
        // teksts.textContent = vardi[index];
        // teksts.style.animation = 'randomiser 0.3s';
        // containers.appendChild(teksts);
        // setTimeout(() => {
        //     console.log("bahh");
        //   }, 1000);

      
        // Start the loop by calling the recursive function
    //     containers.removeChild(teksts);

        
    // });
    

