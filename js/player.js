import { SETTINGS } from './settings.js';

export class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'isabela');
        scene.add.existing(this);
        scene.physics.add.existing(this);
        
        this.setScale(0.3);
        this.setCollideWorldBounds(true);
        this.setDepth(2); // Asegura que se dibuje por encima del suelo
        this.cursors = scene.input.keyboard.createCursorKeys();
        this.createAnimations(scene);
    }

    createAnimations(scene) {
        if (!scene.anims.exists('walk-down')) {
            scene.anims.create({
                key: 'walk-down',
                frames: scene.anims.generateFrameNumbers('isabela', { start: 0, end: 2 }),
                frameRate: 8,
                repeat: -1
            });
            scene.anims.create({
                key: 'walk-left',
                frames: scene.anims.generateFrameNumbers('isabela', { start: 3, end: 5 }),
                frameRate: 8,
                repeat: -1
            });
            scene.anims.create({
                key: 'walk-right',
                frames: scene.anims.generateFrameNumbers('isabela', { start: 6, end: 8 }),
                frameRate: 8,
                repeat: -1
            });
            scene.anims.create({
                key: 'walk-up',
                frames: scene.anims.generateFrameNumbers('isabela', { start: 9, end: 11 }),
                frameRate: 8,
                repeat: -1
            });
        }
    }

    update() {
        this.setVelocity(0);

        if (this.cursors.left.isDown) {
            this.setVelocityX(-SETTINGS.PLAYER_SPEED);
            this.anims.play('walk-left', true);
        } else if (this.cursors.right.isDown) {
            this.setVelocityX(SETTINGS.PLAYER_SPEED);
            this.anims.play('walk-right', true);
        } else if (this.cursors.up.isDown) {
            this.setVelocityY(-SETTINGS.PLAYER_SPEED);
            this.anims.play('walk-up', true);
        } else if (this.cursors.down.isDown) {
            this.setVelocityY(SETTINGS.PLAYER_SPEED);
            this.anims.play('walk-down', true);
        } else {
            this.anims.stop();
            this.setFrame(1); // Frame estático mirando al frente
        }
    }
}