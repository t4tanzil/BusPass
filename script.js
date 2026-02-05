const dateEl = document.getElementById("date");
const timeEl = document.getElementById("time");
const expireText = document.getElementById("expireText");
const expireBtn = document.getElementById("expireBtn");

function updateClock() {
    const now = new Date();

    dateEl.textContent = now.toDateString();
    timeEl.textContent = now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock();

// Countdown
let minutes = 105;
let seconds = minutes * 60;

const timer = setInterval(() => {
    let m = Math.floor(seconds / 60);
    expireText.textContent = `This pass expires after ${m} minutes`;
    seconds--;

    if (seconds <= 0) {
        clearInterval(timer);
        expireText.textContent = "Pass Expired";
        expireBtn.disabled = true;
        expireBtn.textContent = "Expired";
    }
}, 1000);

// Button
expireBtn.onclick = () => {
    expireText.textContent = "Pass Expired";
    expireBtn.disabled = true;
    expireBtn.textContent = "Expired";
};

const form = document.getElementById("passForm");
const input = document.getElementById("codeInput");
const card = document.querySelector(".card");

const CORRECT_CODE = 2232; // <-- change this to whatever number you want

form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop page refresh

    if (Number(input.value) === CORRECT_CODE) {
        card.style.display = "flex";   // show pass
        document.getElementById("passcode").style.display = "none"; // hide keypad
        document.body.classList.remove("locked"); // after correct code

    } else {
        document.getElementById("submitfeild").value = "Fuck You BRO";
    }
});
