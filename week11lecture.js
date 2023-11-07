console.log("test");

const x = 2;
const y = 1;
if (x===y) {
    console.log("success")
}
else{
    console.log("fail")
}

const btn = document.querySelector("button");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

document.addEventListener ("DOMContentLoaded", () => {
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
});

function random(number) {
    return Math.floor(Math.random()* number);
}

function draw(){
    //console.log("TEST")
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for (let i = 0; i<100; i++) {
        ctx.beginPath();
        ctx.fillStyle = "rgba(255,250,50,0.5)";
        ctx.arc(
            random(canvas.width),
            random(canvas.height),
            random(200),
            0,
            2 * Math.PI,
        );
        ctx.fill();
    }
}
draw();
btn.addEventListener("click",draw);

