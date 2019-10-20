let world, angle = 0.0;
let naveX = 150, naveY = window.innerHeight/1.5, navePeso = 10, naveAng = 0

function preload() {
  world = loadImage(`./public/img/world.png`)
  nave = loadImage(`./public/img/nave.png`)
}

function setup() {
  createCanvas(window.innerWidth-20, window.innerHeight-20)
}

function draw() {
  background(51)
  imageMode(CENTER)

  renderWorld()
  renderNave()
}

function renderWorld() {
  push()
  translate(width / 2, height + height/1.1)
  rotate(angle -= 0.0002)
  image(world, 0, 0, 1700, 1700)
  pop()
}

function renderNave() {
  push()

  if (keyIsDown(UP_ARROW) && naveY >= 0) {
    naveY -= navePeso
  } else if (keyIsDown(DOWN_ARROW) && naveY <= height) {
    naveY += navePeso
  }

  image(nave, naveX, naveY, 150, 100)
  pop()
}