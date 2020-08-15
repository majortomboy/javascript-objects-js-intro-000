var playlist = {
  artistName: 'David Bowie',
  songTitle: 'Ziggy Stardust'
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist.assign({}, {artistName: 'Muse'})
  playlist.assign({}, {songTitle: 'Starlight'})
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  var newPlaylist = playlist.assign({}, playlist)
  delete newPlaylist[artistName]
  return newPlaylist
}
