let world, worldAngle = 0.0
let naveX = 150, naveY = window.innerHeight/1.5, naveAng = 0
let trashX = window.innerWidth, trashY = 0, trashAngle = 0.0
const velocidade = 10

function preload() {
  world = loadImage(`./public/img/world.png`)
  nave = loadImage(`./public/img/nave.png`)
  trash = loadImage(`./public/img/trash.png`)
  trashY = random(0,window.innerHeight)
}

function setup() {
  createCanvas(window.innerWidth-20, window.innerHeight-20)
}

function draw() {
  background(51)
  imageMode(CENTER)

  renderWorld()
  renderTrash()
  renderNave()
}

function renderWorld() {
  push()
  translate(width / 2, height + height/1.1)
  rotate(worldAngle -= 0.0002)
  image(world, 0, 0, 1700, 1700)
  pop()
}

function renderNave() {
  push()

  if (keyIsDown(UP_ARROW) && naveY >= 0) {
    naveY -= velocidade
  } else if (keyIsDown(DOWN_ARROW) && naveY <= height) {
    naveY += velocidade
  }

  image(nave, naveX, naveY, 150, 100)
  pop()
}

function renderTrash() {
  image(trash, trashX--, trashY, 50, 50)
}