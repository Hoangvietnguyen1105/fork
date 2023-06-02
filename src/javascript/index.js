import { Application, Sprite } from 'pixi.js'

const app = new Application({
    resolution: window.devicePixelRatio || 1,
    backgroundColor: 2,
    width: 720,
    height: 1280
});
console.log("abc")
document.body.appendChild(app.view);
var clampy = Sprite.from("test.png");
clampy.anchor.set(0.5);
clampy.x = app.screen.width / 2;
clampy.y = app.screen.height / 2;
app.stage.addChild(clampy);