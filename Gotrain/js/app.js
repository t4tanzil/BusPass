
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
let countdownSeconds = 14063;

function updateFooterCountdown() {
    const h = String(Math.floor(countdownSeconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((countdownSeconds % 3600) / 60)).padStart(2, "0");
    const s = String(countdownSeconds % 60).padStart(2, "0");

    document.querySelector(".timer").innerText = `${h}:${m}:${s}`;

    if (countdownSeconds > 0) {
        countdownSeconds--;
    }
}
// READ FROM & TO FROM URL
function getRouteParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        from: params.get("from"),
        to: params.get("to")
    };
}

function updateLocationText() {
    const { from, to } = getRouteParams();

    if (!from || !to) return;

    const fromIndex = parseInt(from) - 1;
    const toIndex = parseInt(to) - 1;

    if (stations[fromIndex] && stations[toIndex]) {
        document.querySelector(".location").innerText =
            `${stations[fromIndex]} to ${stations[toIndex]}`;
    }
    else {
        document.querySelector(".location").innerText = "Allandale Waterfront GO to Bradford GO";
    }
}


setInterval(updateFooterCountdown, 1000);
updateFooterCountdown();
updateLocationText();
