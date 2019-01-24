import React, {Component} from 'react';
import TrackList from '../TrackList/TrackList.js';
import './Playlist.css';

class Playlist extends Component{
  constructor(props){
    super(props)
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  handleNameChange(){
    this.setState({defaultValue : this.props.onChange});
  }
  render(){
    return (
      <div className="Playlist">
  <input defaultValue={'New Playlist'} onChange = {this.props.onChange}/>
  <TrackList tracks = {this.props.pltracks} onRemove = {this.props.removeTrack} isRemoval = {true} />
  <a className="Playlist-save" onClick = {this.props.onSave}>SAVE TO SPOTIFY</a>
</div>
    );
  }
}

export default Playlist;
