class Helper{
  playPauseAndUpdate(song){
    player.playPause(song);
    $(`#time-control.total-time`).text(duration);
  }
}

const helper = new helper();
