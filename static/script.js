const _getToken = async () => {

  const result = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)

    },
    body: 'grant_type=client_credentials'
  });

  const data = await result.json();
  return data.access_token;
}
async function fetchId() {

  const accessToken = ''
  const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing',{
    method: 'GET', headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + accessToken
    }
  });


  const responseJson = await response.json();
  console.log(responseJson);
  const playlistTitleElement = document.getElementById('song-title');
  playlistTitleElement.innerText = responseJson.item.name;
  const playlistArtitistElement = document.getElementById('song-artist');
  playlistArtitistElement.innerText = responseJson.item.artists[0].name;
  const playlistLinkElement = document.getElementById('song-link');
  playlistLinkElement.href = responseJson.item.href;
  const playlistThumbnailElement = document.getElementById('song-thumbnail');
  playlistThumbnailElement.src = responseJson.item.album.images[0].url;
  const playlistPreviewElement = document.getElementById('song-preview');
  playlistPreviewElement.src = responseJson.item.preview_url;
}
  async function fetchRecentlyPlayed() {

    const accessToken2 = ''
    const response = await fetch('https://api.spotify.com/v1/me/player/recently-played',{
      method: 'GET', headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken2
      }
    });

    const responseJson = await response.json();
    console.log(responseJson);
    var playlistTitleElement = new Array(20);
    playlistTitleElement = document.getElementById('song-title2');

    for(let i = 0; i < 20; i++){
      playlistTitleElement.innerText = responseJson.items[0].track.name;

    }

    const playlistArtitistElement = document.getElementById('song-artist2');
    playlistArtitistElement.innerText = responseJson.items[0].track.artists[0].name;
    const playlistLinkElement = document.getElementById('song-link2');
    playlistLinkElement.href = responseJson.items[0].track.href;
    const playlistThumbnailElement = document.getElementById('song-thumbnail2');
    playlistThumbnailElement.src = responseJson.items[0].track.album.images[0].url;
    const playlistPreviewElement = document.getElementById('song-preview2');
    playlistPreviewElement.src = responseJson.items[0].track.preview_url;
}
