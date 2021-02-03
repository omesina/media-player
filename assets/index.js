import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'

const video = document.querySelector("video");
const playButton = document.querySelector("#playButton");
const mutedButton = document.querySelector("#mutedButton");

//const player = new MediaPlayer({el: video, plugins: []});
const player = new MediaPlayer({el: video, plugins: [new AutoPlay(), new AutoPause()]});

playButton.onclick = () => player.tooglePlay();
mutedButton.onclick = () => player.toogleMuted();

if('serviceWorker' in navigator)
{
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    });
}