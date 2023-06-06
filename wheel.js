


document.getElementById("button-for-sending-names").addEventListener("click", wheelMaker);
function wheelMaker(){
    // const questions = document.getElementById("teksta-logs");
    // console.log(questions);
    
    const input = document.getElementById("teksta-logs").value;
    let vardi = input.split(" ");

    vardi = vardi.map(function(name) {
        return name.trim();
    });

    console.log(vardi);
}