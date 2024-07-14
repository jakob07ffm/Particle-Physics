class Particle {
  constructor(x, y, mass) {
    this.position = createVector(x, y)
    this.acceleration = createVector(0, 0)
    this.velocity = createVector(0, 0)
    this.mass = mass

    // radius = (mass / π) ** 0.5
    this.radius = Math.sqrt(this.mass / PI) * SCALE
    // set random color for particle
    this.color = color(random(0, 255), random(0, 255), random(0, 255))
  }

  draw() {
    // Remove outline
    noStroke()
    // Set fill to particles color
    fill(this.color)
    // Draw particle
    ellipse(this.position.x, this.position.y, this.radius * 2)
  }

  applyForce(force) {
    // acceleration = force / mass
    this.acceleration.add(p5.Vector.div(force, this.mass))
  }

  physics(particle) {
    // Don't apply to self
    if (this === particle) return

    // mass1 * mass2
    let mass = this.mass * particle.mass
    // radius1 + radius2
    let radius = this.radius + particle.radius
    // Distance between particles
    let distance = this.position.dist(particle.position)

    // Don't apply if particles are touching
    if (distance <= radius) return

    // force = G * mass1 * mass2 / distance ** 2
    let force = p5.Vector.sub(this.position, particle.position)
      .setMag(G * mass  / (distance ** 2))

    // Apply the force
    particle.applyForce(force)
  }

  update() {
    // Update particle
  }
}
