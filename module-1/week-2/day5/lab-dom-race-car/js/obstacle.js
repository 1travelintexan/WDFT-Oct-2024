class Obstacle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.positions = [70, 230, 85, 150, 70, 70];
    this.randomIndex = Math.floor(Math.random() * this.positions.length);
    this.left = this.positions[this.randomIndex];
    this.top = -200;
    this.width = 100;
    this.height = 175;
    //this is creating the player and adding them to the screen
    this.element = document.createElement("img");
    this.element.src = "../images/redCar.png";
    this.element.style.position = "absolute";
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    //add the image to the screen
    this.gameScreen.appendChild(this.element);
  }
  move() {
    this.top += 2;
    this.updatePosition();
  }
  updatePosition() {
    this.element.style.top = `${this.top}px`;
  }
}
