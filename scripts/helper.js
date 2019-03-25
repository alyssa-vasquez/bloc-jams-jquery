class Helper{
  playPauseAndUpdate(song){
    player.playPause(song);
    $('#time-control .total-time').text(player.currentlyPlaying.duration);
  }
}

const helper = new Helper();
