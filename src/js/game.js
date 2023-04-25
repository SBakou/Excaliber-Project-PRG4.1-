import { Actor, Engine, Vector, Label, Color, Font } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";

export class Game extends Engine {
  constructor() {
    super({ width: 640, height: 480 });
    this.start(ResourceLoader).then(() => this.startGame());
  }

  startGame() {
    const BG = new Actor();
    BG.graphics.use(Resources.BG.toSprite());
    BG.pos = new Vector(400, 300);
    BG.vel = new Vector(0, 0);
    BG.scale = new Vector (0.4, 0.4);
    BG.enableCapturePointer = true;
    BG.on("pointerup", (event) => {event.pos = new Vector(300,500) });   // verplaatsen
    this.add(BG);
  
    const fish = new Actor();
    fish.graphics.use(Resources.Fish.toSprite());
    fish.pos = new Vector(400, 300);
    fish.vel = new Vector(30, 10);
    fish.scale = new Vector (0.5, 0.5);
    fish.enableCapturePointer = true;
    fish.on("pointerup", (event) => {event.pos = new Vector(300,500) });   // verplaatsen
    this.add(fish);

    const anotherFish = new Actor();
    anotherFish.graphics.use(Resources.Fish2.toSprite());
    anotherFish.pos = new Vector(100, 100);
    anotherFish.vel = new Vector(10, 10);
    anotherFish.scale = new Vector (1.5,1.5);
    this.add(anotherFish);
  
    const thirdFish = new Actor();
    thirdFish.graphics.use(Resources.Fish3.toSprite());
    thirdFish.pos = new Vector(400, 200);
    thirdFish.vel = new Vector(10, -10);
    thirdFish.scale = new Vector (1,1);
    this.add(thirdFish);
  }
}


new Game();

