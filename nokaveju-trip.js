// Saglabā to checkboxu JS mainīgājā
const toggleTheme = document.getElementById("toggle-theme");
const html = document.getElementById("html");

toggleTheme.addEventListener("change", toggleThemeHandler);

/**
 * Maina motīvu, kad izvēlas izvēles rūtiņu
 */
function toggleThemeHandler() {
  if (toggleTheme.checked) {
    html.dataset.theme = "dark";
    localStorage.setItem("theme", "dark");
  } else {
    html.dataset.theme = "light";
    localStorage.setItem("theme", "light");
  }
}

const localStorageTheme = localStorage.getItem("theme");

if (localStorageTheme == "light" || !localStorageTheme) {
  html.dataset.theme = "light";
} else {
  html.dataset.theme = "dark";
  toggleTheme.checked = true;
}

const visasPareizasAtbildes = ["3", "1", "2"];

for (let i = 1; i <= 3; i++) {
  const visasAtbildes = document.getElementsByName(i);

  visasAtbildes.forEach((atbilde) => {
    atbilde.addEventListener("click", () =>
      checkHandler(visasPareizasAtbildes[i - 1], visasAtbildes)
    );
  });
}


function checkHandler(pareizaAtbilde, visasAtbildes) {
    console.log(visasAtbildes);
    visasAtbildes.forEach((atbilde) => {
      if (atbilde.checked == true) {
        if (atbilde.value == pareizaAtbilde) {
          atbilde.parentNode.style.backgroundColor = "green";
        } else {
          atbilde.parentNode.style.backgroundColor = "red";
        }
      } else {
        atbilde.parentNode.style.backgroundColor = "var(--secondary-color)";
      }
    });
  }




const response = await fetch("questions.json");
const questions = await response.json();

const main = document.getElementById("main");

// Iet caur visiem jautājumiem masīvā
questions.forEach((q) => {
  const form = document.createElement("form");
  main.appendChild(form);

  const qText = document.createElement("p");
  form.appendChild(qText);
  qText.textContent = q["question"];

  const container = document.createElement("div");
  container.className = "grid-container";
  form.appendChild(container);

  const allAnswers = q.answers;
  allAnswers.forEach((answer, index) => {
    const label = document.createElement("label");
    container.appendChild(label);
    label.textContent = answer;

    const input = document.createElement("input");
    input.name = q.question;
    input.type = "radio";
    label.appendChild(input);

    input.addEventListener("click", () => checkHandler(q["correctAnswer"],nodeListAnswers ));

    input.value = index;
  });
  const nodeListAnswers = document.getElementsByName(q.question);
  console.log(nodeListAnswers)
});
