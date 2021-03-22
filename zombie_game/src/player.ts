import { Draw } from './draw_utilities.js'

export class Player {
    x = 500;
    y = 330;
    width = 50;
    speed = 6; //?

    draw_self() {
        let draw = new Draw();

        draw.in_color('white');
        //draw.rectangle(this.x, this.y, this.width, this.width); //Body
        draw.image(document.getElementById("player_0"), this.x - 25, this.y-15, 100, 100)
    }

    self_update(key: any) { // rename to self update?
        
        // No going outside borders - this will be moved to game.ts
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
            this.y = 0
        }

        // Moving
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