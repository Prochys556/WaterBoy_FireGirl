tiles.setCurrentTilemap(tilemap`level2`)
let waterBoy = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 9 9 9 9 9 . . . . . . 
    . . . . 9 9 9 9 9 9 9 . . . . . 
    . . . . 9 9 9 9 9 9 9 . . . . . 
    . . . . 9 9 9 9 9 9 9 . . . . . 
    . . . . 9 9 9 9 9 9 9 . . . . . 
    . . . . 9 9 9 9 9 9 9 . . . . . 
    . . . . . 9 9 9 9 9 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let fireGirl = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 4 4 4 4 4 . . . . . . 
    . . . . 4 4 4 4 4 4 4 . . . . . 
    . . . . 4 4 4 4 4 4 4 . . . . . 
    . . . . 4 4 4 4 4 4 4 . . . . . 
    . . . . 4 4 4 4 4 4 4 . . . . . 
    . . . . 4 4 4 4 4 4 4 . . . . . 
    . . . . . 4 4 4 4 4 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.player1.moveSprite(waterBoy)
controller.player2.moveSprite(fireGirl)
game.onUpdate(function () {
    if (Math.abs(waterBoy.x - fireGirl.x) <= 160 && Math.abs(waterBoy.y - fireGirl.y) <= 120) {
        splitScreen.setSplitScreenEnabled(false)
        scene.centerCameraAt((waterBoy.x + fireGirl.x) / 2, (waterBoy.y + fireGirl.y) / 2)
    } else {
        splitScreen.setSplitScreenEnabled(true)
        splitScreen.cameraFollowSprite(splitScreen.Camera.Camera1, waterBoy)
        splitScreen.cameraFollowSprite(splitScreen.Camera.Camera2, fireGirl)
    }
})
