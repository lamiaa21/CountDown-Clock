
let countdownDate = new Date("Feb 1, 2023 18:59:59").getTime();

let counter = setInterval(() =>{

    let nowDate = new Date().getTime();
    let dateDiff = countdownDate - nowDate;
    let weeks = Math.floor(dateDiff /(1000 * 60 * 60 * 24 * 7));
    let days = Math.floor(dateDiff % (1000 * 60 * 60 * 24 * 7) / (1000 * 60 * 60 * 24));
    let hours = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minuts = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(dateDiff % (1000 * 60) / (1000));

    document.querySelector(".weeks").innerHTML = weeks < 10 ? `0${weeks}` : weeks;
    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` :hours;
    document.querySelector(".minuts").innerHTML = minuts < 10 ? `0${minuts}` : minuts;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

},1000);