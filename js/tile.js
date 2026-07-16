import { SETTINGS } from './settings.js';

export class Tile extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        // "true" para que sea un objeto estático con el que chocar
        scene.physics.add.existing(this, true); 
        // Usar la misma escala que configuramos en SETTINGS
        this.setScale(SETTINGS.SCALE_FACTOR); 
    }
}