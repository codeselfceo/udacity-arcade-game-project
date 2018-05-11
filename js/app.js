/**
 * @description Enemy our player must avoid
 */
class Enemy {
    constructor() {
        this.sprite = `images/enemy-bug.png`;
        
        // Initializes bugs in random positions
        this.randomYPositions = [220, 140, 60];
        this.x = -8;
        this.y = this.randomYPositions[Math.floor(Math.random() * 3)];
        this.random = Math.floor(Math.random() * 6);
    }

    // Update the enemey's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {

    }

    // Draw the enemy on the screen, required method for game
	render() {
        setTimeout(() => {
            if (this.x >= 420) {
                this.y = this.randomYPositions[Math.floor(Math.random() * 3)];
                this.x = -8;
                this.random = Math.floor(Math.random() * 6);
            }
            this.x += this.random + 1;
        });
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	}
}

/**
 * @description Our amazing player
 */
class Player {
    constructor() {
        this.sprite = `images/char-boy.png`;

        // Initializes the player in a random position
        this.randomXPositions = [-2, 100, 202, 304];
        this.randomYPositions = [380, 300];
        this.x = this.randomXPositions[Math.floor(Math.random() * 4)];
        this.y = this.randomYPositions[Math.floor(Math.random() *  2)];
    }

    // Update the player's position, required method for game
    // Parameter: dt, a time delta between ticks
    update() {
        
    }
    
    // Draw the player on the screen, required method for game
	render() {
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
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
// const enemy5 = new Enemy();
// const enemy6 = new Enemy();

const [...allEnemies] = [enemy1, enemy2, enemy3, enemy4];//, enemy5, enemy6];
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
