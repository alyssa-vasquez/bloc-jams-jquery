class Helper{
  playPauseAndUpdate(song){
    player.playPause(song);
    $('#time-control.total-time').text(player.duration);
  }
}

const helper = new Helper();
