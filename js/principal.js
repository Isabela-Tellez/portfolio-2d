import { Player } from './player.js';
import { Tile } from './tile.js';
import { SETTINGS } from './settings.js';

export class Level {
    constructor(scene) {
        this.scene = scene;
        this.player = null;
        this.obstacles = scene.physics.add.staticGroup();
        this.createMap();
    }

    createMap() {
        // Obtenemos el ancho y alto del tile escalado
        const size = SETTINGS.TILE_SIZE * SETTINGS.SCALE_FACTOR;

        SETTINGS.WORLD_MAP.forEach((row, rowIndex) => {
            row.forEach((col, colIndex) => {
                // Posición x, y base (esquina superior izquierda de la celda)
                const x = colIndex * size;
                const y = rowIndex * size;

                // 1. Dibujamos el suelo
                const ground = this.scene.add.sprite(x, y, 'floor', 3).setOrigin(0);
                // Usamos setScale para coincidir con la física y settings
                ground.setScale(SETTINGS.SCALE_FACTOR); 
                ground.setDepth(0);

                // 2. Si hay una 'x', colocamos un obstáculo
                if (col === 'x') {
                    // Creamos el tile de colisión, posicionándolo según su origen
                    const tile = new Tile(this.scene, x, y, 'detailr', 1).setOrigin(0);
                    this.obstacles.add(tile);
                } 
                // 3. Si hay una 'p', posicionamos al jugador
                else if (col === 'p') {
                    // Posicionamos al personaje en el centro del tile
                    this.player = new Player(this.scene, x + size / 2, y + size / 2);
                }
            });
        });

        // Habilitamos las colisiones físicas entre Isabela y los obstáculos
        if (this.player) {
            this.scene.physics.add.collider(this.player, this.obstacles);
        }
    }

    update() {
        if (this.player) {
            this.player.update();
        }
    }

}