
const clientID = '6d5061b790f94e1dbdca3844cc86cba7';
const redirectURI = 'http://localhost:3000/';
let userAccessToken = '';
const Spotify = {
  getAccessToken(){
    if(userAccessToken){
      return userAccessToken;
    } else if (window.location.href.match(/access_token=([^&]*)/) && window.location.href.match(/expires_in=([^&]*)/)){
      let userAccessToken = window.location.href.match(/access_token=([^&]*)/)[1];;
      //let expirationURL = new URLSearchParams(window.location.search);
      let expirationTime = window.location.href.match(/expires_in=([^&]*)/)[1];
      window.setTimeout(() => userAccessToken = '', expirationTime * 1000);
      window.history.pushState('Access Token', null, '/');
      return userAccessToken;
    } else{
      let url = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
      window.location = url;
    }
  },
  search(search_term){
    fetch(`https://api.spotify.com/v1/search?type=track&q=${search_term}`, {headers: {Authorization: `Bearer ${userAccessToken}`}}).then(response =>{
      if(response.ok){
        var response = response.json();
        var spotifyList = response.map(track => {
          return {id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri
        }
        }
      )
      return spotifyList;
      }
      //throw new Error('Request failed!');
    }, networkError => console.log(networkError.message));
  },
  savePlaylist(playlistName, trackURIs){
    if(playlistName && trackURIs){
      const accessToken = userAccessToken;
      const header = {Authorization: `Bearer ${userAccessToken}`};
      let userId;
      fetch('https://api.spotify.com/v1/me', {headers: header}).then(response => {
        if(response.ok){
          var userIdResponse = response.json();
          userId = userIdResponse.id;
          return userId;
        }
        throw new Error ('Request failed!');
      }, networkError => console.log(networkError.message));
      var playlistID;
      fetch('/v1/users/{user_id}/playlists',{headers: header, method: 'POST', body: JSON.stringify({user_id: userId, name: playlistName})}).then(response =>{
        if(response.ok){
          let playlistIdResponse = response.json();
          playlistID = playlistIdResponse.id;
          return playlistID;
        }
        throw new Error('Request failed!');
      }, networkError => console.log(networkError.message));
      fetch('/v1/users/{user_id}/playlists/{playlist_id}/tracks', {headers: header, method: 'POST', body: JSON.stringify({playlist_id: playlistID, uris: trackURIs})}).then(response =>{
        if(response.ok){
          let playlistIdResponse = response.json();
          playlistID = playlistIdResponse.id;
          return playlistID;
        }
        throw new Error('Request failed!');
      }, networkError => console.log(networkError.message));
    }else{
      return;
    }
  }
};

export default Spotify;

//expirationURL.get('/expires_in=([^&]*)/')
