document.getElementById("time").innerHTML = "";
let previousSecond = 0;

function updateTime() {
    let currentFullDate =  new Date();
    if (currentFullDate.getSeconds() > previousSecond) {
        document.getElementById("time").textContent = currentFullDate.toLocaleTimeString();
    }
    previousSecond = currentFullDate.getSeconds();
    requestAnimationFrame(updateTime);
}

requestAnimationFrame(updateTime);