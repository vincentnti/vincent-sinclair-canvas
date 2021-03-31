/*
    Input Manager gör precis det som namnet säger.
    Input Manager hanterar tangent tryckningar och genom att använda oss av
    denna kan man då röra spelaren och använda sin instakill.
    Användning av denna går igenom game.
*/
export class Input {
  keys_down: any = {};

  // Handle player input
  check_key_presses() {
    let self = this; // Ensure the correct context of this
    window.addEventListener("keydown", function (event) {
      self.keys_down[event.key] = true;
    });
    window.addEventListener("keyup", function (event) {
      self.keys_down[event.key] = false;
    });
  }
}
