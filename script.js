// Real-time clock updater
const clockEl = document.getElementById("clock");

function pad(num) {
  return String(num).padStart(2, "0");
}

function updateClock() {
  const now = new Date();
  const h = pad(now.getHours());
  const m = pad(now.getMinutes());
  const s = pad(now.getSeconds());
  clockEl.textContent = `${h}:${m}:${s}`;
}

// Initialize and update every second
updateClock();
setInterval(updateClock, 1000);
