document.getElementById("time").innerHTML = "";
let previousSecond = 0;

const PERIOD_TIMES = [0, 4 * 3600 + 10 * 60];

function updateTime() {
    let currentFullDate =  new Date();
    if (currentFullDate.getSeconds() > previousSecond) {
        document.getElementById("time").textContent = currentFullDate.toLocaleTimeString();

        for (let i = 0; i < PERIOD_TIMES.length; i++) {
            if (currentFullDate.getMilliseconds() > PERIOD_TIMES[i] && currentFullDate.getMilliseconds() < PERIOD_TIMES[i + 1]) {
                document.getElementById("periodDisplay").textContent = "Period " + (i + 1);
            }
        }
    }
    previousSecond = currentFullDate.getSeconds();
    requestAnimationFrame(updateTime);
}
if (new Date().getDay() == 6 || new Date().getDay() == 7) {
    document.getElementById("time").textContent = "Enjoy your weekend!";
    document.getElementById("periodDisplay").textContent = "";
}
else {
    requestAnimationFrame(updateTime);
}