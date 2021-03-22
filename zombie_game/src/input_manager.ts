export class Input {
    keys_down: any = {}
    
    // Handle player input
    check_key_presses() {
        let self = this; // Ensure the correct context of this
        window.addEventListener("keydown", function(event) {self.keys_down[event.key] = true;});
        window.addEventListener("keyup", function(event) {self.keys_down[event.key] = false;});
    }
}