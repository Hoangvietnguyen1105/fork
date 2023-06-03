import { Application, Sprite, Container, Point, Graphics, Text, TextStyle } from 'pixi.js'

const app = new Application({
    resolution: 1,
    backgroundColor: 0x6495ed,
    width: 720,
    height: 1280
});
document.body.appendChild(app.view);
var clampy = Sprite.from("cat.png");
clampy.tint = "0xFFFFFF"
clampy.anchor.set(0.5);

// setting it to "the middle of the screen
clampy.x = app.screen.width / 2;
clampy.y = app.screen.height / 2;

app.stage.addChild(clampy);