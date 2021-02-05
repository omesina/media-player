import MediaPlayer from '../MediaPlayer';

class AutoPlay {
    constructor() {
    }
    run(player: MediaPlayer) {
        if (!player.media.muted)
            player.media.muted = true;

        player.play();

        // if(player.muted)
        //     player.muted = false;
    }
}


export default AutoPlay;