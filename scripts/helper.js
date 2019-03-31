class Helper{
  playPauseAndUpdate(song){
    player.playPause(song);
    $('#time-control .total-time').text(player.prettyTime(player.currentlyPlaying.duration));
  }
}

const helper = new Helper();
