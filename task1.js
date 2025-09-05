export class Player {
  name
  level
    constructor(name, level) {
      this.name = name
      this.level = level
    }
  info() {
      return `${this.name} has reached level ${this.level}`
    }
  levelUp() {
      return `${this.name} has leveled up to level ${++this.level}`
    }
  }

  const player1 = new Player('Tara', 6)
  console.log(player1.info())
  console.log(player1.levelUp())  