const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');
export class Draw {
    constructor() {
        context.imageSmoothingEnabled = false; // Disable AA
    }
    clear_screen() {
        this.in_color('#7C9299');
        context.fillRect(0, 0, canvas.width, canvas.height);
    }
    in_color(color) {
        context.fillStyle = color;
    }
    rectangle(x, y, width, height) {
        context.fillRect(x, y, width, height);
    }
    write(text, color, x, y) {
        this.in_color(color);
        context.font = '30px Arial';
        context.fillText(text, x, y);
    }
    image(image, x, y, size_x, size_y) {
        context.drawImage(image, x, y, size_x, size_y);
    }
}
