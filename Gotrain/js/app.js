
function updateCurrentTime() {
    const now = new Date();

    const formatted = now.toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    });

    document.querySelector(".currentrunningtime").innerText = formatted;
}

setInterval(updateCurrentTime, 1000);
updateCurrentTime();


    // ACTIVATION TIMER
let activationSeconds = 5 * 60 + 37;

function updateActivationTime() {
    const minutes = String(Math.floor(activationSeconds / 60)).padStart(2, "0");
    const seconds = String(activationSeconds % 60).padStart(2, "0");

    document.querySelector(".activitionRunningTime").innerText =
        `${minutes}:${seconds}`;

    activationSeconds++;
}

setInterval(updateActivationTime, 1000);
updateActivationTime();

    // BIG COUNTDOWN TIMER 
function updateFooterCountdown() {
    const now = new Date();

    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    let diff = Math.floor((endOfDay - now) / 1000);

    if (diff < 0) diff = 0;

    const h = String(Math.floor(diff / 3600)).padStart(2, "0");
    const m = String(Math.floor((diff % 3600) / 60)).padStart(2, "0");
    const s = String(diff % 60).padStart(2, "0");

    document.querySelector(".timer").innerText = `${h}:${m}:${s}`;
}

setInterval(updateFooterCountdown, 1000);
updateFooterCountdown();

