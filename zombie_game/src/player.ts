import { Draw } from "./draw_utilities.js";

/*
    Player har koll på alla Player releterad logik.
    Att inte gå utanför spelfältet.
    Att röra på sig att måla sig själv, sin position sin bredd osv.
*/

export class Player {
  x = 500;
  y = 330;
  width = 50;
  speed = 6;

  // Draw player object
  draw_self() {
    let draw = new Draw();

    draw.in_color("white");
    draw.image(
      document.getElementById("player_0"),
      this.x - 25,
      this.y - 15,
      100,
      100
    );
  }

  // Update player position
  self_update(key: any) {
    // No going outside borders
    if (this.x > 1080 - this.width) {
      this.x = 1080 - this.width;
    } else if (this.x < 0) {
      this.x = 0;
    }

    if (this.y > 720 - this.width) {
      this.y = 720 - this.width;
    } else if (this.y < 0) {
      this.y = 0;
    }

    // Player movement
    if (key.ArrowUp) {
      this.y -= this.speed;
    }
    if (key.ArrowDown) {
      this.y += this.speed;
    }
    if (key.ArrowLeft) {
      this.x -= this.speed;
    }
    if (key.ArrowRight) {
      this.x += this.speed;
    }
  }
}
