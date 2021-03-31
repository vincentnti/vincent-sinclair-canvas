import { Game } from "./game.js";
// Sätter igång spelet men med lite extra säkerhet som gör att man inte kan modifera spelet utifrån.
(function () {
  let game = new Game();

  game.start();
})();
