class Projectile {
  constructor(positionX, positionY) {
    this.gameScreen = document.getElementById("game-screen");
    this.left = positionX;
    this.top = positionY;
    this.width = 10;
    this.height = 30;
    //this is creating the player and adding them to the screen
    this.element = document.createElement("img");
    this.element.src = "../images/bullet.png";
    this.element.style.position = "absolute";
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    //add the image to the screen
    this.gameScreen.appendChild(this.element);
  }
  move() {
    this.top -= 5;
    this.updatePosition();
  }
  updatePosition() {
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
