const form = document.querySelector(".js-form");
const textResult = document.querySelector(".js-result");
const button = document.querySelector(".js-button");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let score = 0;
    const answers = document.querySelectorAll("input:checked");
    answers.forEach((item) => {
        score += parseInt(item.value);
    });
    textResult.innerText = "Twój wynik to: " + score;
});

button.addEventListener("click", (event) => {
    event.preventDefault();
    const text = document.querySelector(".js-text");
    const correct = document.querySelectorAll(".js-correct");
    text.innerText = text.innerText === "Show" ? "Hide" : "Show";

    correct.forEach((item) => {
        item.classList.toggle("form__label--correct");
    });
});

form.addEventListener("reset", () => {
    textResult.innerText = "";
    const text = document.querySelector(".js-text");
    const correct = document.querySelectorAll(".js-correct");
    text.innerText = text.innerText === "Show" ? "Show" : "Show", window.scrollTo(0, 0);

    correct.forEach((item) => {
        item.classList.remove("form__label--correct");
    });
});

