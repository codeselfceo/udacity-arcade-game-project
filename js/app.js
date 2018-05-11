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

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
/**
 * @description Our amazing player
 */
class Player extends Piece {
    constructor() {
        super(`images/char-boy.png`);
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

    }

    // Move down
    _moveDown() {

    }

    // Move right
    _moveRight() {

    }

    // Move left
    _moveLeft() {

    }
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



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
