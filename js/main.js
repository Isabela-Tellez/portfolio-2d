import { Level } from './principal.js';

class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
        this.level = null;
    }

    preload() {
        // Cargar spritesheet de personaje
        this.load.spritesheet('isabela', 'assets/characters/isabela.png', { 
            frameWidth: 298, 
            frameHeight: 298 
        });

        // Carga de los tilesets como spritesheets de 32x32 para poder recortar sus frames
        this.load.spritesheet('floor', 'assets/tilesets/Floor.jpeg', {
            frameWidth: 32,
            frameHeight: 32
        });
        this.load.spritesheet('detailr', 'assets/tilesets/details.jpeg', {
            frameWidth: 32,
            frameHeight: 32
        });
    }

    create() {
        // Inicializar el nivel
        this.level = new Level(this);
    }

    update() {
        if (this.level) {
            this.level.update();
        }
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#0d0d0d',
    parent: 'game-container',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: [GameScene]
};

const game = new Phaser.Game(config);