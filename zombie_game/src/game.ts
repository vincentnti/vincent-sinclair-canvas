import { Player } from "./player.js";
import { Draw } from "./draw_utilities.js";
import { Input } from "./input_manager.js";
import { Zombie } from "./zombie.js";

/*
    Game hanterar alla spel relaterad logik.
    Det har till exempel koll på positioner, fps, score och andra saker
    t.ex en player behöver inte ha koll på själva tangent tryckandet.
    Detta är därför zombies collsion hanteras här ute då alal zombies inte bör ha koll på alla zombies position.
    Game fungerar även som en station där funktioner och metoder anropas för att påverka andra saker såsom en player som påverkas av input.
*/

export class Game {
  // Game settings
  FPS = 60;
  score = 0;
  instakill_used = false;
  draw_update = 0;
  count = 0;
  spawn_count = 200;

  // Characters
  player = new Player();
  zombies: Zombie[] = [];

  // Utilities
  draw = new Draw();
  input = new Input();

  start() {
    // Initiialize game loop
    setInterval(this.game_update.bind(this), 1000 / this.FPS);
    this.draw_update = setInterval(this.game_draw.bind(this), 1000 / this.FPS);
  }

  game_draw() {
    this.draw.clear_screen();

    // Draw player
    this.player.draw_self();

    // Draw zombies
    this.zombies.forEach((zombie) => {
      zombie.draw_self();
    });

    // Draw UI
    this.score++;
    this.draw.write("Score: " + this.score, "#fff", 28, 50);
    this.draw.write("Zombies: " + this.zombies.length, "#fc440f", 28, 90);
    if (!this.instakill_used) {
      this.draw.write("Instakill Ready", "#1f01b9", 28, 130);
    }
  }

  game_update() {
    // Zombie spawner
    this.count++;
    if (this.count > this.spawn_count && this.spawn_count > 0) {
      this.zombies.push(new Zombie());

      this.count = 0;
      this.spawn_count -= 1;
    }

    // Handle player input
    this.input.check_key_presses();

    // Update player position
    this.player.self_update(this.input.keys_down);

    // Extra functionality for spacebar: Instakill
    if (this.input.keys_down[" "] && !this.instakill_used) {
      this.instakill_used = true;
      this.zombies = [];
    }

    // Zombies
    this.zombies.forEach((zombie) => {
      zombie.self_update(this.player.x, this.player.y);
      this.anti_zombie_stacking(zombie);
      this.check_player_collision(zombie);
    });
  }

  game_over() {
    // Stop the game loop
    clearInterval(this.draw_update);

    // Draw game over screen
    this.draw.clear_screen();
    this.draw.write("Game Over!", "#fc440f", 450, 350);
    this.draw.write("Score: " + this.score, "#1effbc", 450, 400);
    this.draw.write("Press Enter to try again!", "#b4e33d", 450, 450);

    // Watch for Enter keypress and reload
    if (this.input.keys_down.Enter) {
      window.location.reload();
    }
  }

  check_player_collision(zombie: Zombie) {
    // Distance Calculations
    let distance_x = Math.abs(this.player.x - zombie.x);
    let distance_y = Math.abs(this.player.y - zombie.y);

    // Touching player? Game Over!
    if (distance_x < this.player.width && distance_y < this.player.width) {
      this.player.speed = 0; //Freeze Player Ghost
      this.game_over();
    }
  }

  anti_zombie_stacking(zombie: Zombie) {
    this.zombies.forEach((element) => {
      // Distance Calculations
      let distance_x = zombie.x - element.x;
      let distance_y = zombie.y - element.y;

      // Anti Zombie Stacking or Zombie Avoidance
      if (
        distance_x < zombie.width &&
        distance_x >= 0 &&
        distance_y < zombie.width &&
        distance_y >= 0
      ) {
        zombie.x += zombie.speed;
        element.x -= element.speed;
      }
      if (
        distance_x > -zombie.width &&
        distance_x <= 0 &&
        distance_y < zombie.width &&
        distance_y >= 0
      ) {
        zombie.x -= zombie.speed;
        element.x += element.speed;
      }
      if (
        distance_y < zombie.width &&
        distance_y >= 0 &&
        distance_x < zombie.width &&
        distance_x >= 0
      ) {
        zombie.y += zombie.speed;
        element.y -= element.speed;
      }
      if (
        distance_y > -zombie.width &&
        distance_y <= 0 &&
        distance_x < zombie.width &&
        distance_x >= 0
      ) {
        zombie.y -= zombie.speed;
        element.y += zombie.speed;
      }
    });
  }
}
