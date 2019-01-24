import React, {Component} from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = {};
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }
  search(){
    this.state = this.props.onSearch();
  }
  handleTermChange(e){
    this.setState(this.state.search = e.target.value);
    this.props.onSearch(e.target.value);
  }
  render() {
    return (
      <div className="SearchBar">
  <input placeholder="Enter A Song, Album, or Artist" onChange = {this.state.handleTermChange}/>
  <a>SEARCH</a>
</div>
);
}
}

export default SearchBar;
