const G = 6.67e-11
const SCALE = 0.001

// Array to store particles
let particles = []

function setup() {
  createCanvas(400, 400)

  // Loop and create each particles
  for (let i = 0; i < 10; i++) {
    let x = random(0, width)
    let y = random(0, height)
    let mass = random(2e8, 1e9)

    // Add the new particle to the list
    particles.push(new Particle(x, y, mass))
  }
}

function draw() {
  // Set the background of the canvas to a dark gray
  background(51, 51, 51)

  // Loop all particles twice
  for (const particleA of particles)
    for (const particleB of particles)
      if (particleA !== particleB) particleA.physics(particleB)

  // Loop particles again
  for (const particle of particles) {
    // Update the particle with the new acceleration and velocity
    particle.update()
    // Draw the particle on the canvas
    particle.draw()
  }
}
