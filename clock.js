function time(){
const now=new Date();
const min=now.getMinutes().toString().padStart(2,0);
let hour=now.getHours();
let meridian=hour>=12?"PM":"AM";
hour=hour%12||12;
hour=hour.toString().padStart(2,0);

const sec=now.getSeconds().toString().padStart(2,0);;
const final=`${hour}:${min}:${sec} ${meridian}`;

document.getElementById("clock").textContent=final;
}

time();
setInterval(time,1000);