import { Draw } from './draw_utilities.js';
export class Player {
    constructor() {
        this.x = 500;
        this.y = 330;
        this.width = 50;
        this.speed = 6;
    }
    draw_self() {
        let draw = new Draw();
        draw.in_color('white');
        draw.image(document.getElementById("player_0"), this.x - 25, this.y - 15, 100, 100);
    }
    self_update(key) {
        if (this.x > 1080 - this.width) {
            this.x = 1080 - this.width;
        }
        else if (this.x < 0) {
            this.x = 0;
        }
        if (this.y > 720 - this.width) {
            this.y = 720 - this.width;
        }
        else if (this.y < 0) {
            this.y = 0;
        }
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
