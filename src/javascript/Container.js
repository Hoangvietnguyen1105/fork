import { Application, Sprite, Container, Point, Graphics, Text, TextStyle } from 'pixi.js'

const app = new Application({
    resolution: 1,
    backgroundColor: 0x6495ed,
    width: 720,
    height: 1280
});
document.body.appendChild(app.view);
var style = new TextStyle({
    align: "center",
    fill: "#754c24",
    fontSize: 42
});
const texty = new Text('Hello world！', style); // Text supports unicode!
texty.text = "This is expensive to change, please do not abuse";

app.stage.addChild(texty);