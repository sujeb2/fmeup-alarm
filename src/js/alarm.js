const currentTime = document.querySelector("h1")
const setupTime = document.querySelector("h3"),
content = document.querySelector(".content"),
selectMenu = document.querySelectorAll("select"),
setAlarmBtn = document.querySelector("button");

let alarmTime, isAlarmSet,
ringtone = new Audio(".\\src\\mp3\\alarm.mp3");

for (let i = 12; i > 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 59; i >= 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option = `<option value="${ampm}">${ampm}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

setInterval(() => {
    let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    ampm = "AM";
    if(h >= 12) {
        h = h - 12;
        ampm = "PM";
    }
    h = h == 0 ? h = 12 : h;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    currentTime.innerText = `${h}:${m}:${s} ${ampm}`;

    if (alarmTime === `${h}:${m}:${s} ${ampm}`) {
        ringtone.play();
        ringtone.loop = true;
        setAlarmBtn.innerText = "설정!";
    }
});

function setAlarm() {
    if (isAlarmSet) {
        alarmTime = "";
        ringtone.pause();
        content.classList.remove("disable");
        setAlarmBtn.innerText = "설정!";
        return isAlarmSet = false;
    }

    let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;
    if (time.includes("몇시?") || time.includes("몇분?") || time.includes("AM/PM")) {
        return alert("알람을 설정해주세요!");
    }
    alarmTime = time;
    isAlarmSet = true;
    content.classList.add("disable");
    setAlarmBtn.innerText = "알람 재설정";
    setupTime.innerText = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value} 안에 깨어나야해요!!`
    console.log("alarm set on " + alarmTime);
    return alert("알람이 설정되었어요, " + alarmTime + " 이 되면 알려드릴께요.");
}

setAlarmBtn.addEventListener("click", setAlarm);