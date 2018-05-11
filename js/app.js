/**
 * Pieces class
 * @description Due to Enemy and Player share update() and render() functions and both are 'pieces' of the game, this class will contain those 2 main functions.
 */
class Piece {
    constructor(sprite) {
        this.sprite = sprite;
    }

    // Update the piece's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {

	}
	
	// Draw the piece on the screen, required method for game
	render() {
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	}
}

/**
 * @description Enemy our player must avoid
 */
class Enemy extends Piece {
    constructor() {
        super(`images/enemy-bug.png`);
    }
}

/**
 * @description Our amazing player
 */
class Player extends Piece {
    constructor() {
        super(`images/char-boy.png`);

        // Initializes the player in a random position
        const randomXPositions = [-2, 100, 202, 304];
        const randomYPositions = [380, 300];
        this.x = randomXPositions[Math.floor(Math.random() * 4)];
        this.y = randomYPositions[Math.floor(Math.random() *  2)];
    }

    // Handle Input
    handleInput(dir) {
        switch (dir) {
            case 'up':
                this._moveUp();
                break;
            case 'down':
                this._moveDown();
                break;
            case 'right':
                this._moveRight();
                break;
            case 'left':
                this._moveLeft();
                break;
            default:
                break;
        }
    }

    // Move up
    _moveUp() {
        // Prevents player going outside the box
        if (this.y === -20) { return; }

        this.y = (this.y >= 380) ? this.y - 80 : this.y - 80;
    }

    // Move down
    _moveDown() {
        // Prevents player going outside the box
        if (this.y === 380) { return; }

        this.y = (this.y >= 300) ? 380 : this.y + 80;
    }

    // Move right
    _moveRight() {
        // Prevents player going outside the box
        if (this.x === 406) { return; }

        this.x += 102;
    }

    // Move left
    _moveLeft() {
        // Prevents player going outside the box
        if (this.x === -2) { return; }

        this.x -= 102;
    }
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const enemy1 = new Enemy();
const enemy2 = new Enemy();
const enemy3 = new Enemy();
const enemy4 = new Enemy();
const enemy5 = new Enemy();
const enemy6 = new Enemy();

const [...allEnemies] = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6];
const player = new Player();



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
