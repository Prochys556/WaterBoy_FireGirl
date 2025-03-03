function fireStart () {
    // this code makes it, so that the sprites do not spawn on the move
    fireGirl.ax = 0
    waterBoy.ax = 0
    // This block gives the sprites a place to spawn at the start of the game
    for (let value of tiles.getTilesByType(sprites.dungeon.stairEast)) {
        tiles.placeOnTile(fireGirl, tiles.getTileLocation(0, 18))
        tiles.placeOnTile(waterBoy, tiles.getTileLocation(0, 18))
    }
}
// when the B button is pressed fireGirl will jump
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    fireGirl.vy = -125
})
// If you touch this specific block, you sill lose the game
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.gameOver(false)
})
// when the A button is pressed waterBoy will jump
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    waterBoy.vy = -125
})
function waterStart () {
	
}
// if you touch this specific block, you will win
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    game.gameOver(true)
})
let fireGirl: Sprite = null
let waterBoy: Sprite = null
// the map that the players need to complete
tiles.setCurrentTilemap(tilemap`level0`)
// what will the waterBoy look like
waterBoy = sprites.create(img`
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
// what will the fireGirl look like
fireGirl = sprites.create(img`
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
// the player uses arrows to allow the sprite to move left and right
controller.player1.moveSprite(waterBoy, 100, 0)
// the player uses arrows to allow the sprite to move left and right
controller.player2.moveSprite(fireGirl, 100, 0)
fireStart()
// this code is done, so that when the player presses the A button, the sprite will not just hang in the air
waterBoy.ay = 200
// this code is done, so that when the player presses the B button, the sprite will not just hang in the air
fireGirl.ay = 200
game.onUpdate(function () {
    // if the two sprites are in a specific range of each other , they will share the same screen, but if not, they will convert to split screen
    if (Math.abs(waterBoy.x - fireGirl.x) <= 160 && Math.abs(waterBoy.y - fireGirl.y) <= 120) {
        splitScreen.setSplitScreenEnabled(false)
        scene.centerCameraAt((waterBoy.x + fireGirl.x) / 2, (waterBoy.y + fireGirl.y) / 2)
    } else {
        splitScreen.setSplitScreenEnabled(true)
        splitScreen.cameraFollowSprite(splitScreen.Camera.Camera1, waterBoy)
        splitScreen.cameraFollowSprite(splitScreen.Camera.Camera2, fireGirl)
    }
})
