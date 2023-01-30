const ctx = canvas.getContext("2d");
let spacePressed = false; 


window.addEventListener("keydown", (e)=>{
    if(e.code === "Space") {
      spacePressed = true
      console.log("pressed")
    }
  })
  
  window.addEventListener("keyup", (e)=>{
    console.log(e.code)
    if(e.code === "Space") {
      spacePressed = false
    }
  })

class Player {
  constructor() {
    this.x = 150;
    this.y = 200;
    this.vy = 0;
    this.width = 20;
    this.height = 20;
    this.weight = 1;
  }
  update() {
    if (this.y > canvas.height - this.height) {
      this.y = canvas.height - this.height;
      this.vy = 0;
    } else {
      this.vy += this.weight;
      this.vy *=0.9
      this.y += this.vy;
    }
    if(this.y< 0+this.height ){
        this.y = 0+this.height
        this.vy = 0
    }
    if(spacePressed){
        this.flap()
    }
  }
  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  flap() {
    this.vy -= 2;
  }
}
export const player = new Player();
