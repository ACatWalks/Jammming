import React, {Component} from 'react';
import Track from '../Track/Track.js';
import SearchResults from '../SearchResults/SearchResults.js';
import './TrackList.css';
import Playlist from '../Playlist/Playlist.js';

class TrackList extends Component{
  generate_tracks(){
    if (this.props.tracks) {
      this.props.tracks.map(track => (<Track key = {track.id} name = {track.name} artist = {track.artist} album = {track.album} onAdd = {this.props.onAdd} onRemove = {this.props.removeTrack} isRemoval = {this.props.isRemoval} />))
    }
  }
  render(){
    return(
      <div className = "TrackList">
      {this.generate_tracks()}
      </div>
    );
  }
}

export default TrackList;

//<Track track = {this.props.tracks.map(track => {key: track.id})}
  //<Track key = {track.id} name = {track.name} artist = {track.artist} album = {track.album} onAdd = {this.props.onAdd} onRemove = {this.props.removeTrack} isRemoval = {this.props.isRemoval} />
  //if (this.props.tracks)
    //this.props.tracks.map(track => (
   //<Track key = {track.id} name = {track.name} artist = {track.artist} album = {track.album} onAdd = {this.props.onAdd} onRemove = {this.props.removeTrack} isRemoval = {this.props.isRemoval} />
  //))
