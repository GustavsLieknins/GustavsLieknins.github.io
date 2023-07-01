const response = await fetch("projekti.json");
const data = await response.json();

const main = document.getElementById("mainpart");

data.forEach(q => {
    const aa = document.createElement("a");
    aa.href = q["links"];
    aa.className = "teleporters";
    main.appendChild(aa);

    const divs1 = document.createElement("div");
    divs1.className = "kartite";
    aa.appendChild(divs1);

    const img = document.createElement("img");
    img.src = q["image"];
    img.className = "kartinas-bilde";
    divs1.appendChild(img);

    const divs2 = document.createElement("div");
    divs2.className = "virsrakstam";
    divs1.appendChild(divs2);

    const p1 = document.createElement("p");
    p1.className = "virsraksts-kartinai";
    p1.textContent = q["teksts"];
    divs2.appendChild(p1);

    const p2 = document.createElement("p");
    p2.className = "podzina-kartinai";
    p2.textContent = "Spied uz kastītes!";
    divs2.appendChild(p2);

});