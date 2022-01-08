let clock = document.getElementById("clock");
const d = new Date("2021");
d.getTime();

clock.innerText = 2400000000000 + (Date.now()-d.getTime())*43000000000/(365*24*60*60*1000);
function startTime() {
  clock.innerText = parseInt(clock.innerText) + Math.round(43000000000/(365*24*60*60*10));
}

setInterval(startTime, 100);

