namespace SpriteKind {
    export const enemy_monkey = SpriteKind.create()
    export const enemy_bear = SpriteKind.create()
    export const princess = SpriteKind.create()
    export const objec = SpriteKind.create()
    export const object = SpriteKind.create()
    export const enemy_tiger = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    knight.vy = -200
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    spear = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 1 . . . . . 
        . f f f f f f f f f 1 1 1 . . . 
        . . . . . . . . . . 1 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, knight, 100, 10)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.enemy_bear, function (sprite, otherSprite) {
    bear.destroy()
    spear.destroy()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.enemy_tiger, function (sprite, otherSprite) {
    tiger.destroy()
    spear.destroy()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.enemy_monkey, function (sprite, otherSprite) {
    monkey.destroy()
    spear.destroy()
})
let spear: Sprite = null
let monkey: Sprite = null
let bear: Sprite = null
let tiger: Sprite = null
let knight: Sprite = null
knight = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 2 2 . . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . . . . 5 5 5 5 . . . . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . . . 5 5 5 5 f 5 1 . . . . 
    . . . . . 5 5 5 d d 5 1 . . . . 
    . . . . . . 5 5 d d 1 1 1 . . . 
    . . . . . . . 5 d 5 . f . . . . 
    . . . . . . 2 2 5 5 5 f . . . . 
    . . . . . 2 2 2 d d d d . . . . 
    . . . . . 2 2 5 5 5 5 f . . . . 
    . . . . . 2 2 5 5 5 . f . . . . 
    . . . . . 2 2 . 5 5 . f . . . . 
    . . . . 2 2 2 . e e e f . . . . 
    `, SpriteKind.Player)
tiles.setTilemap(tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010101010101000000000000000000000000000000000000000000000000000000000000000000000000010101010100000000000000000101010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 2 2 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    2 2 2 2 2 . . . . . . . . 2 2 2 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, [myTiles.transparency16,sprites.builtin.brick], TileScale.Sixteen))
knight.ay = 280
controller.moveSprite(knight, 100, 0)
tiger = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ...........f....................
    ..........f1....................
    ........dd44....................
    ......4dff44f44.................
    .....444f44f444f4...............
    .....444444f444ff4..............
    .....133f4444444f44f4...........
    .....144fddd444ff44f44f4ff......
    .......4ffdd4fff444f44f44f4ff...
    ...........dff4444ff44f44f4df...
    ..........4ff444fff444f4df.d4...
    ........444fddddfdddddfdd...ff..
    ......ff44444ddffdddddf.....d4..
    ......f444..44df...d4ff.....df4.
    ............44d....444........d4
    ...........4444....444.........4
    .........ff4444..ff444..........
    .........f4444...f444...........
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.enemy_tiger)
let key = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . f f f f . . . . . . . . . . . 
    . f . . 5 5 5 . . . . . . . . . 
    . . f . 5 f 5 5 5 5 5 . . . . . 
    . . . f f 5 5 . 5 . 5 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.object)
bear = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    .............ee.ee..............
    ............eeeeee..............
    .........fffeffeeee.............
    .........fffefeeeee.............
    .........feeeeeeeee.............
    .........eeeeeeeeee.............
    .........1.3eeeeee..............
    ..........eeeeeeee..............
    ...........eeeeeeee.............
    ....eeee....eeeeeeee............
    ..eeeeeeeeeeeeeeeeee............
    ..feeeeeeeeeeeeeeeee............
    ..ffeeeeeeeeeeeeeeee............
    ..fff...eeeeeeeeeeeee...........
    ...f......eeeeeeeeeee...........
    ..........eeeeeeeeeee...........
    ..........eeeeeeeeeee...........
    ..........eeeeeeeeeeeee.........
    ..........eeeeeeeeeeeee.........
    ...........eeeeeeeeeeee.........
    ............eeeeeeeee...........
    ............eeeeeeee............
    .............eeeeeee............
    .............eeeee..............
    ............eeeee...............
    ..........feeeeee...............
    .........ffeeeeee...............
    `, SpriteKind.enemy_bear)
monkey = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . d d e e . . . . . . 
    . . . . . d f d e e . . . . . . 
    . . . . d d d d e e . . . . . . 
    . . . . d d d d e e e . . . . . 
    . 5 . . . d d e e . e . . . . . 
    . . 5 . . . e e e . e . . . . . 
    . . 5 . . e e e e e e . . e . . 
    . . e e e e e e e e . . e e . . 
    . . f . e e e e e e . e e . . . 
    . . . . . e e e e e . e . . . . 
    . . . . . e e e e e e e . . . . 
    . . . . . . e e e e . . . . . . 
    . . . . . e e e . e . . . . . . 
    `, SpriteKind.enemy_monkey)
let princess = sprites.create(img`
    . . . . . . 2 e e e . . . . . . 
    . . . . . . 5 5 5 e e . . . . . 
    . . . . . . d e e e e . . . . . 
    . . . . . . f d e e e . . . . . 
    . . . . . . d d d e e . . . . . 
    . . . . . . . d d e e . . . . . 
    . . . . . 3 3 3 d e e . . . . . 
    . . . . . 3 3 3 d e e . . . . . 
    . . . . . . 3 3 d e . . . . . . 
    . . . . . 3 3 3 d 3 . . . . . . 
    . . . . 3 3 3 3 d 3 3 . . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . 3 3 3 3 3 3 3 3 3 . . . . 
    . . . 3 3 3 3 3 3 3 3 3 . . . . 
    . . . 3 3 3 3 3 3 3 3 3 . . . . 
    `, SpriteKind.princess)
