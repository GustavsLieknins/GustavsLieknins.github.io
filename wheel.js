


document.getElementById("button-for-sending-names").addEventListener("click", wheelMaker);
function wheelMaker(){
    const inputText = document.getElementById("teksta-logs").value;
    const vardi = inputText.split(" ");

    console.log(vardi);

    const containers = document.getElementById("random-shower");
    const length = vardi.length;

    for(let i = 0; i<length; i++){
        const teksts = document.createElement("h1");
        teksts.className = "random-name";
        teksts.textContent = vardi[i];
        teksts.style.animation = 'randomiser 0.3s';
        containers.appendChild(teksts);
        //   teksts.textContent = "";
      
        // Start the loop by calling the recursive function
    }

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
    
}
