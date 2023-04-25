import { ImageSource, Sound, Resource, Loader } from "excalibur";
import fishImage from "./Sprite1.png";
import fish2Image from "./Sprite2.png";
import fish3Image from "./Sprite3.png";
import BGImage from "./BG.jpeg";

const Resources = {
  Fish: new ImageSource(fishImage),
  Fish2: new ImageSource (fish2Image),
  Fish3: new ImageSource (fish3Image),
  BG: new ImageSource (BGImage)
};

const ResourceLoader = new Loader([Resources.Fish, Resources.Fish2, Resources.Fish3, Resources.BG]);

export { Resources, ResourceLoader };