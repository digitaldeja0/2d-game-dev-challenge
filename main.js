import './style.css'
import javascriptLogo from './javascript.svg'
import{ player }from "./player.js"
const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')
canvas.width = 500
canvas.height = 500



let hue = 0; 
let frame = 0; 
let score = 0;
let gamespeed = 2;
let temp = canvas.height-90

function animate(){
  ctx.clearRect(0,0,canvas.width, canvas.height)
  // ctx.fillRect(10,temp,50,50)
  player.update()
 player.draw()
  requestAnimationFrame(animate)
}
animate()

