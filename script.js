const card = document.querySelector(".card");
const thanksCard = document.querySelector(".thanks__card");
const buttons = document.querySelectorAll(".card__button");
const submitButton = document.querySelector(".card__button-submit");
const backButton = document.querySelector(".thanks__card-back");
const rate = document.getElementById("count");

card.style.display = "block";
thanksCard.style.display = "none";
submitButton.setAttribute("disabled", "disabled");

submitButton.onclick = (e) => {
    if (card.style.display === "block") {
        card.style.display = "none";
        thanksCard.style.display = "block";
    } else {
        card.style.display = "block";
    }
    e.stopImmediatePropagation();
};

backButton.onclick = (e) => {
    if (thanksCard.style.display === "block") {
        thanksCard.style.display = "none";
        card.style.display = "block";
    } else {
        thanksCard.style.display = "block";
    }
    e.stopImmediatePropagation();
};

buttons.forEach(function (button) {
    button.addEventListener("click", () => {
        rate.innerText = button.value;

        if ((rate.innerText = button.value)) {
            submitButton.removeAttribute("disabled", "disabled");
        } else {
            submitButton.setAttribute("disabled", "disabled");
        }
    });
});
