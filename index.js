let world, angle = 0.0;
let navePos = 150, navePeso = 10

function preload() {
  world = loadImage(`./public/img/world.png`)
  nave = loadImage(`./public/img/nave.png`)
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight)
}

function draw() {
  background(51)
  imageMode(CENTER)

  renderNave()
  renderWorld()
}

function renderWorld() {
  translate(width / 2, height + height/1.1)
  rotate(angle -= 0.0002)
  image(world, 0, 0, 1700, 1700)  
}

function renderNave() {
  image(nave, navePos, height/1.5, 150, 100)

  if (keyIsDown(LEFT_ARROW)) {
    navePos -= navePeso
  } else if (keyIsDown(RIGHT_ARROW)) {
    navePos += navePeso
  }
}