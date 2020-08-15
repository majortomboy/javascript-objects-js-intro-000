var playlist = {
  artistName: 'David Bowie',
  songTitle: 'Ziggy Stardust'
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist.artistName = 'MUSE';
  playlist.songTitle = 'Starlight';
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName;
  return playlist
}
