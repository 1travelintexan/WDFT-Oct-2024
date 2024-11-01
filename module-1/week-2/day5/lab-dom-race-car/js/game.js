class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.endScreen = document.getElementById("game-end");
    this.scoreElement = document.getElementById("score");
    this.livesElement = document.getElementById("lives");
    this.player = new Player(380, 165, "../images/car.png");
    this.height = 500;
    this.width = 400;
    this.obstacles = [new Obstacle(this.gameScreen)];
    this.score = 0;
    this.lives = 3;
    this.isGameOver = false;
    this.gameIntervalId = null;
    this.gameLoopFrequency = Math.round(1000 / 60);
    this.frames = 0;
  }
  start() {
    //set the height and width of the game screen
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
    //hide the start screen
    this.startScreen.style.display = "none";
    //show the game screen
    this.gameScreen.style.display = "block";
    //start the game loop
    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrequency);
  }
  gameLoop() {
    // console.log("this is the game loop");
    this.frames++;
    this.update();
    //if the gameover is true then we call the this.gameover method
    if (this.isGameOver === true) {
      clearInterval(this.gameIntervalId);
      this.gameOver();
    }
    //this adds a new obstacle to the array every so many frames
    if (this.frames % 180 === 0) {
      this.obstacles.push(new Obstacle(this.gameScreen));
    }
  }
  update() {
    //this calls the move method from the Player class
    this.player.move();
    //this calls the move method on EACH obstacle
    this.obstacles.forEach((oneObstacle, oneObstacleIndex) => {
      oneObstacle.move();
      //this checks each oneObstacle if it collided with my player
      const didHitMyCar = this.player.didCollide(oneObstacle);
      //if the red car hits my car, based on the didCollide method
      //then we subtract a life, remove the car from the array (splice), and remember to remove from the DOM
      console.error("did it hit???", didHitMyCar);
      //conditional checking when there is a collision
      if (didHitMyCar) {
        //subtract a life
        this.lives--;
        if (this.lives === 0) {
          this.isGameOver = true;
        }
        //update the lives DOM to the new value
        this.livesElement.innerText = this.lives;
        //splice the obstacle out of the array
        this.obstacles.splice(oneObstacleIndex, 1);
        //remove the red car from the DOM
        oneObstacle.element.remove();
      }

      //check that the red car passes the bottom
      //then remove the car from the array and the DOM
      if (oneObstacle.top > 550) {
        //splice removes object from the array
        this.obstacles.splice(oneObstacleIndex, 1);
        //.remove method removes the car the game screen
        oneObstacle.element.remove();
        //increase the score when the red car passes
        this.score++;
        //update the DOM to have the new score
        this.scoreElement.innerText = this.score;
      }
    });
  }
  gameOver() {
    console.log("game is over");
    this.gameScreen.style.display = "none";
    this.endScreen.style.display = "block";
  }
}
