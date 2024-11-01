class Player {
  constructor(top, left, playerImage) {
    this.gameScreen = document.getElementById("game-screen");
    this.top = top;
    this.left = left;
    this.width = 75;
    this.height = 150;
    this.directionX = 0;
    this.directionY = 0;
    //this is creating the player and adding them to the screen
    this.element = document.createElement("img");
    this.element.src = playerImage;
    this.element.style.position = "absolute";
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    //add the image to the screen
    this.gameScreen.appendChild(this.element);
  }
  move() {
    this.left += this.directionX;
    this.top += this.directionY;
    //this keeps the car from going to far left
    if (this.left < 25) {
      this.left = 30;
    }
    //this keeps the car from going to far Right
    if (this.left + this.width > 370) {
      this.left = 365 - this.width;
    }
    //this keeps the player from going to far up
    if (this.top < 0) {
      this.top = 0;
    }
    //this keeps the player from going to far down
    if (this.top + this.height > 535) {
      this.top = 535 - this.height;
    }
    this.updatePosition();
  }
  updatePosition() {
    //actually moving the car on the screen
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }
  didCollide(obstacle) {
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }
}
