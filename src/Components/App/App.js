import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';
import Playlist from '../Playlist/Playlist.js';
import Spotify from '../../util/Spotify.js';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {};
    this.state.SearchResults = Spotify.search('New Playlist');
    this.state.playlistName = 'New Playlist';
    this.state.playlistTracks = [];
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }
  addTrack(track) {
    if(this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)){
      return;
    } else{
      this.state.playlistTracks.push(track);
      return this.state.playlistTracks;
    }
  }
  removeTrack(track){
    if(this.state.playlistTracks.find(savedTrack => savedTrack.id !== track.id)){
      return;
    } else{
      this.state.playlistTracks.splice(track.id, 1);
      return this.state.playlistTracks;
    }
  }
  updatePlaylistName(name){
    this.state.playlistName = name;
  }
  savePlaylist(){
    var trackURIs = this.state.playlistTracks.map(track =>
      track.uri
    )
    Spotify.savePlaylist();
    return trackURIs;
  }
  search(search_term){
    return Spotify.search(search_term);
  }
  render(){
    return(
      <div>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div className="App">
    <SearchBar onSearch = {this.search}/>
      <div className="App-playlist">
        <SearchResults searchResults = {this.state.SearchResults} onAdd = {this.state.addTrack} />
        <Playlist plname = {this.state.playlistName} pltracks = {this.state.playlistTracks} onRemove = {this.state.removeTrack} onNameChange = {this.state.updatePlaylistName} onSave = {this.state.savePlaylist} />
      </div>
    </div>
  </div>
    );
  }
}


export default App;

//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//   </div>
