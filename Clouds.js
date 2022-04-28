import {canvas, draw} from "./Canvas.js";

let body

window.onload = function ()
{
    body = document.body
    body.appendChild(canvas)

    draw()
}