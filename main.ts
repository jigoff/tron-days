namespace SpriteKind {
    export const enemy_monkey = SpriteKind.create()
    export const enemy_bear = SpriteKind.create()
    export const princess = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemy_monkey, function (sprite, otherSprite) {
    monkey.destroy()
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
let spear: Sprite = null
let monkey: Sprite = null
let bear: Sprite = null
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
controller.moveSprite(knight)
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
    . . . . . . e e e e . . . . . . 
    . . . . . e f e e e . . . . . . 
    . . . . e e e e e e . . . . . . 
    . . . . e e e e e e e . . . . . 
    . 5 . . . e e e e . e . . . . . 
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
