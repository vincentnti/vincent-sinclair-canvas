enum Keys {
    UpArrow = 38,
    DownArrow = 40,
    LeftArrow = 37,
    RightArrow = 39,
    Space = 32,
    Enter =  13,
}
export class Input {
    keys_down: any = {} //any bad should replace with something specific
    
    check_key_presses() {
        let self = this
        window.addEventListener("keydown", function(event) {self.keys_down[event.key] = true;});
        window.addEventListener("keyup", function(event) {self.keys_down[event.key] = false;});
        //console.log(this.keys_down) // Debug
    }
}