export const SETTINGS = {
    TILE_SIZE: 32,
    PLAYER_SPEED: 200,
    SCALE_FACTOR: 1,
    // Matriz del mapa: 
    // 'x' = Pared/Bloque sólido
    // '0' = Suelo transitable
    // 'p' = Punto de inicio del jugador (Isabela)
    WORLD_MAP: [
        ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
        ['x', '0', '0', '0', '0', '0', '0', '0', '0', 'x'],
        ['x', '0', 'p', '0', '0', '0', '0', '0', '0', 'x'],
        ['x', '0', '0', '0', '0', '0', '0', '0', '0', 'x'],
        ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']
    ]
};