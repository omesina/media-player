import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector("video");
const playButton = document.querySelector("#playButton");
const mutedButton = document.querySelector("#mutedButton");

const player = new MediaPlayer({el: video, plugins: []});
//const player = new MediaPlayer({el: video, plugins: [new AutoPlay()]});

playButton.onclick = () => player.tooglePlay();
mutedButton.onclick = () => player.toogleMuted();