const buttonlode = document.getElementById("lode-funny");
const lodeshow = document.getElementById("lode-count");
let lodeCount = 0;
lodeshow.textContent = "Sis vasaras lode count: " + lodeCount;
const skelly = document.getElementById("skelly-burnin");
buttonlode.addEventListener("click", function() 
    {
        lodeCount = lodeCount + 1;
        lodeshow.textContent = "Sis vasaras lode count: " + lodeCount;
        skelly.style = "display: block;"
        if(lodeCount>9)
        {
            lodeshow.style = "margin-left: 15px;"
        }
    });

const bigimager1 = document.getElementById("bigimager1");
const bigimager2 = document.getElementById("bigimager2");
const bigimager3 = document.getElementById("bigimager3");
const bigimager4 = document.getElementById("bigimager4");
const backdroper = document.getElementById("backdroper");
const html = document.getElementById("html");
const allsections = document.getElementById("sekcija-ar-daramo67");
const imager68 = document.getElementById("imager68");
const imagesforbigshower = ["mana vasara\maksimaa.png", "mana vasara\jumti.jpg", "mana vasara\jankas_lode.jpg"];
bigimager1.addEventListener("click", function() 
{
    allsections.style = "display: none;"
    backdroper.style = "display: flex;"
    html.style = "overflow: hidden;"
    imager68.src = "maksimaa.png"; 
});
bigimager2.addEventListener("click", function() 
{
    allsections.style = "display: none;"
    backdroper.style = "display: flex;"
    html.style = "overflow: hidden;"
    imager68.src = "jumti.jpg"; 
});
bigimager3.addEventListener("click", function() 
{
    allsections.style = "display: none;"
    backdroper.style = "display: flex;"
    html.style = "overflow: hidden;"
    imager68.src = "valua14.png"; 
});
bigimager3.addEventListener("click", function() 
{
    allsections.style = "display: none;"
    backdroper.style = "display: flex;"
    html.style = "overflow: hidden;"
    imager68.src = "valua14.png"; 
});
bigimager4.addEventListener("click", function() 
{
    allsections.style = "display: none;"
    backdroper.style = "display: flex;"
    html.style = "overflow: hidden;"
    imager68.src = "latviesu-meme.jpeg"; 
});
backdroper.addEventListener("click", function() 
{
    backdroper.style = "display: none;"
    allsections.style = "display: flex;"
    html.style = "overflow: auto;"
});