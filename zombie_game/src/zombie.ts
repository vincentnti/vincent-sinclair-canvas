import { Draw } from "./draw_utilities.js";

/*
    Zombie hanterar all logik för en zombie.
    En zombie handerar dock inte all logic för alla zombies samtidigt utan bara för en entity.
    Därför har vi inte koll på alla zombie collisioner här (alltså att de inte kan gå in i varandra).

    Zombie hanterar t.ex spawn position, rörelse och bredd, speed och målandet av sig själv.

*/

export class Zombie {
  x = 0;
  y = 0;
  speed = 0;
  width = 50;

  // Spawn zombie object with random values
  constructor() {
    // Calculate speed
    this.speed = Math.random() * 1.65 + 0.1;

    // Set spawn location
    switch (Math.floor(Math.random() * 4 + 1)) {
      case 1:
        this.x = -this.width;
        this.y = -this.width;
        break;
      case 2:
        this.x = 1080 + this.width;
        this.y = -this.width;
        break;
      case 3:
        this.x = -this.width;
        this.y = 720 + this.width;
        break;
      case 4:
        this.x = 1080 + this.width;
        this.y = 720 + this.width;
    }
  }

  // Draw zombie object
  draw_self() {
    let draw = new Draw();

    draw.in_color("red");
    draw.image(
      document.getElementById("zombie_0"),
      this.x - 25,
      this.y - 15,
      100,
      100
    );
  }

  // Zombie movement
  self_update(player_x: number, player_y: number) {
    // rename to self update?
    //Simple player follow
    if (this.x < player_x) {
      this.x += this.speed;
    }
    if (this.x > player_x) {
      this.x -= this.speed;
    }
    if (this.y < player_y) {
      this.y += this.speed;
    }
    if (this.y > player_y) {
      this.y -= this.speed;
    }
  }
}
