function AutoPlay() {
    
}

AutoPlay.prototype.run = function (player) {
    if(!player.muted)
        player.muted = true;
    
    player.play();

    // if(player.muted)
    //     player.muted = false;
}

export default AutoPlay;