class Helper{
  playPauseAndUpdate(song){
    player.playPause(song);
    $('#time-control .total-time').text(player.currentlyPlaying.getDuration);
  }
}

const helper = new Helper();
