window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let myGame;
  startButton.addEventListener("click", function () {
    startGame();
  });
  restartButton.addEventListener("click", () => {
    //this reloads the page
    window.location.reload();
  });
  //keydown for listening to your keyboard
  document.addEventListener("keydown", (event) => {
    console.log("a key was pressed", event.code);
    //check for which button was pressed
    if (event.code === "ArrowRight") {
      myGame.player.directionX = 2;
    }
    if (event.code === "ArrowLeft") {
      myGame.player.directionX = -2;
    }
    if (event.code === "ArrowUp") {
      myGame.player.directionY = -2;
    }
    if (event.code === "ArrowDown") {
      myGame.player.directionY = 2;
    }
    if (event.code === "Space") {
      //this is shooting the projectile
      const projectileLeft = myGame.player.left + 32;
      const projectileTop = myGame.player.top - 32;
      myGame.projectiles.push(new Projectile(projectileLeft, projectileTop));
      // this is playing the shoot sound when I press space bar
      myGame.shoot.play();
    }
  });
  //when you release a key, stop the player from moving
  document.addEventListener("keyup", () => {
    myGame.player.directionX = 0;
    myGame.player.directionY = 0;
  });
  function startGame() {
    console.log("start game");
    myGame = new Game();
    myGame.start();
  }
};
