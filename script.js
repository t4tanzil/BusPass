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
