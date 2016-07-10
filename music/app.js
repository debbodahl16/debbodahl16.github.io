var itunes = {
  getMusicByArtist: function (artist, cb) {

    var url = '//bcw-getter.herokuapp.com/?url=';
    var url2 = 'https://itunes.apple.com/search?term=' + artist;
    var apiUrl = url + encodeURIComponent(url2);

    $('#get-music-button').text('LOADING....');

    return $.getJSON(apiUrl).then(function (response) {
      var songList = response.results.map(function (song) {
        return {
          title: song.trackName,
          albumArt: song.artworkUrl60,
          artist: song.artistName,
          collection: song.collectionName,
          price: song.collectionPrice,
          preview: song.previewUrl
        };
      })
      $('#get-music-button').text('GET MUSIC');
      return songList;
    })
  }
}
//Do Not Modify the getMusic function
function getMusic() {
  var artist = document.getElementById('artist').value;
  itunes.getMusicByArtist(artist).then(drawSongs);
}



function drawSongs(songList) {
 

  for (var i = 0; i < songList.length; i++) {
    var currentSong = songList[i];
    // console.log('<li class="list-group-item" style="opacity: 0.7"><div class="col-sm-2"><img src="' + currentSong.albumArt + '"/></div><div class="col-sm-4">' + currentSong.title +'</div><div class="col-sm-2">$' + currentSong.price + '</div><div class="col-sm-4"><audio controls><source src="' + currentSong.preview +'" type="audio/mp4"></audio></div></li>')
    
    
    document.getElementById('songCard').innerHTML +='<li  style="margin:5px" ><div><img src="' + currentSong.albumArt + '"/></div><div >' + currentSong.title +'</div><div >$' + currentSong.price + '</div><div ><audio controls><source src="' + currentSong.preview +'" type="audio/mp4"></audio></div></li>';
  }
}