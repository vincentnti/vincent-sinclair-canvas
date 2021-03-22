const canvas = <HTMLCanvasElement> document.getElementById('gameCanvas');
const context = <CanvasRenderingContext2D> canvas.getContext('2d');

export class Draw {

    constructor () {
        context.imageSmoothingEnabled = false; // Disable AA
    }
    
    clear_screen () {
        this.in_color('#7C9299');
        context.fillRect(0, 0, canvas.width, canvas.height);
    }

    in_color (color: string){
        context.fillStyle = color;
    }

    rectangle (x: number, y: number, width: number, height: number) {
        context.fillRect(x, y, width, height);
    }
    
    write (text: string, color: string, x: number, y: number) {
        this.in_color(color);
        context.font = '30px Arial';
        context.fillText(text, x, y);
    }

    image (image: any, x: number, y: number, size_x: number, size_y: number) { // any should be replaced
        context.drawImage(image, x, y, size_x, size_y);
    }
}
