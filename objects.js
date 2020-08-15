var playlist = {
  artistName: 'David Bowie',
  songTitle: 'Ziggy Stardust'
}

function updatePlaylist(playlist, artistName, songTitle){
  return playlist.assign({}, playlist, {[playlist]:'Muse'})
}

function removeFromPlaylist(playlist, artistName){
  var newPlaylist = playlist.assign({}, playlist)
  delete newPlaylist[artistName]
  return newPlaylist
}
