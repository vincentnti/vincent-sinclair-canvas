var Keys;
(function (Keys) {
    Keys[Keys["UpArrow"] = 38] = "UpArrow";
    Keys[Keys["DownArrow"] = 40] = "DownArrow";
    Keys[Keys["LeftArrow"] = 37] = "LeftArrow";
    Keys[Keys["RightArrow"] = 39] = "RightArrow";
    Keys[Keys["Space"] = 32] = "Space";
    Keys[Keys["Enter"] = 13] = "Enter";
})(Keys || (Keys = {}));
export class Input {
    constructor() {
        this.keys_down = {};
    }
    check_key_presses() {
        let self = this;
        window.addEventListener("keydown", function (event) { self.keys_down[event.key] = true; });
        window.addEventListener("keyup", function (event) { self.keys_down[event.key] = false; });
    }
}
