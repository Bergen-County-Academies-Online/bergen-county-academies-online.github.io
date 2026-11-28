document.getElementById("time").innerHTML = "";
let previousSecond = 0;

function toMilliseconds(hrs, mins, secs) {
    return hrs * Math.pow(60, 3) + mins * Math.pow(60, 2) + secs * 60;
}
function dateToMilliseconds(date) {
    return toMilliseconds(date.getHours(), date.getMinutes(), date.getSeconds());
}

const PERIOD_TIMES = [0, toMilliseconds(4, 10, 0)];

function updateTime() {
    let currentFullDate =  new Date();
    if (currentFullDate.getSeconds() > previousSecond) {
        document.getElementById("time").textContent = currentFullDate.toLocaleTimeString();

        var currentPeriod = 0;

        for (let i = 0; i < PERIOD_TIMES.length; i++) {
            if (dateToMilliseconds(currentFullDate) > PERIOD_TIMES[i] && dateToMilliseconds(currentFullDate) < PERIOD_TIMES[i + 1]) {
                currentPeriod = i + 1;
                document.getElementById("periodDisplay").textContent = "Period " + (i + 1);
            }
        }

        if (currentPeriod == 0) {
            document.getElementById("periodDisplay").textContent = "After-hours lock in!";
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