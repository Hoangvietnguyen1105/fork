import { Application, Texture, Emitter, Container, Point, Graphics, Text, TextStyle, ParticleContainer, particles } from 'pixi.js'
import * as particleSettings from "../img/emitter.json";

const app = new Application({
    resolution: 1,
    backgroundColor: 0x6495ed,
    width: 720,
    height: 1280
});
document.body.appendChild(app.view);
var particleContainer = new ParticleContainer();
app.stage.addChild(particleContainer);

var emitter = new Emitter(particleContainer, Texture.from("particleTexture.png"), particleSettings);
emitter.autoUpdate = true; // If you keep it false, you have to update your particles yourself.
emitter.updateSpawnPos(200, 100);
emitter.emit = true;