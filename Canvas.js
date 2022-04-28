import {Particle} from "./Classes.js";

export var canvas = document.createElement("canvas");
canvas.style.backgroundColor="black"

canvas.width= 900
canvas.height= 500
const ctx = canvas.getContext('2d')

const colors = [
    "rgb(23,231,161)",
    "rgb(255,255,255)",
    "rgb(255,255,255)",
    "rgb(42,231,211)"
]

let particles = []
for (let i = 0; i < 1250; i++) {
    let size = 5
    let x = Math.random()*canvas.width
    let y = Math.random()*canvas.height
    let directionX = (Math.random())-.5
    let directionY = (Math.random())-.5
    let color = colors[Math.floor(Math.random() * colors.length)]

    particles[i] = new Particle(x,y,directionX,directionY,size,color)
}

let mouse = {
    x:0,
    y:0,
    radius:30,
    active:false
}


export function draw()
{
    window.requestAnimationFrame(draw)
    ctx.clearRect(0,0,canvas.width,canvas.height)

    particles.forEach(( particle )=>{
        particle.draw(ctx)
        particle.update(canvas.width,canvas.height,mouse)
    })
}




canvas.addEventListener("mousemove", (e)=>{
    mouse.y=e.y
    mouse.x=e.x
    mouse.active=true
})

canvas.addEventListener("mouseout", (e)=>{
    mouse.active=false
})
