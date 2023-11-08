// Código generado automáticamente. No editar.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "Mapa del terror":
            case "nivel1":return tiles.createTilemap(hex`10001000010101010101010101010101010101010102090909090909090909090909080101030d0d0d0d0d0d0d0d0d0d0d0d070101030d0d0d0d0d0d0d0d0d0d0d0d070101030d0d0d0d0d0d0d0d0d0d0d0d070101030d0d0d0d0d0d0d0d0d0d0d0d070101030d0d0d0d0d0d0d0d0d0d0d0d070101030d0d0d0d0d0d0d0d0d0d0d0d070101030a0e0a0a0a0e0a0e0a0a0a0a070101030b0b0b0b0b0b0b0b0b0b0b0b070101030c0c0c0c0c0c0c0c0c0c0c0c070101030c0c0c0c0c0c0c0c0c0c0c0c070101030c0c0c0c0c0c0c0c0c0c0c0c0701010c0c0c0c0c0c0c0c0c0c0c0c0c0c010104050505050505050505050505060101010101010101010101010101010101`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass1,sprites.castle.tilePath1,sprites.castle.tilePath4,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.castle.tilePath6,sprites.castle.tilePath3,sprites.castle.tilePath2,sprites.builtin.forestTiles22,sprites.builtin.forestTiles24,sprites.builtin.forestTiles19,sprites.builtin.crowd2,sprites.builtin.forestTiles23], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Código generado automáticamente. No editar.
