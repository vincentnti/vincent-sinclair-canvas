import { Draw } from "./draw_utilities.js";

export class Zombie {
    x = 0;
    y = 0;
    speed = (Math.random() * 1.6) + 1; 
    width = 50;

    constructor () {
        // Speed
        this.speed = (Math.random() * 1.65) + 0.1; 

        // Spawn Location
        switch (Math.floor((Math.random() * 4) + 1)) {
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

    draw_self () {
        let draw = new Draw();

        draw.in_color('red');
        //draw.rectangle(this.x, this.y, this.width, this.width);
        draw.image(document.getElementById("zombie_0"), this.x - 25, this.y - 15, 100, 100)
    }

    self_update(player_x: number, player_y: number) { // rename to self update?
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