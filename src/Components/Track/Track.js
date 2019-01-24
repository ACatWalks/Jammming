import React, {Component} from 'react';
import './Track.css';
import TrackList from '../TrackList/TrackList.js';

class Track extends Component{
  constructor(props){
    super(props)
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }
  renderAction(){
    var trackAction = (this.props.isRemoval)? '-': '+';
    return trackAction;
  }
  addTrack(){
    this.props.onAdd(this.props.track);
  }
  renderSign(sign){
    if(sign === '+'){
      return ('onClick = this.addTrack');
    } else {
      return ('onClick = this.removeTrack');
    }
  }
  removeTrack(){
    this.props.onRemove(this.props.track);
  }
  render(){
    var sign = this.renderAction();
    var onClickMethod = this.renderSign(sign);
    return(
      <div className="Track">
  <div className="Track-information">
    <h3>{this.props.name}</h3>
    <p>{this.props.artist} | {this.props.album}</p>
  </div>
  <a className="Track-action">{sign}{onClickMethod}</a>
</div>
    );
  }
}

export default Track;
