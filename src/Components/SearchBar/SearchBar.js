import React, {Component} from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = {};
    this.state.searchTerm = '';
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }
  search(e){
    //this.state = this.props.onSearch();
    this.setState({search: e.target.value});
  }
  handleTermChange(e){
    this.setState({searchTerm: e.target.value});
    //this.props.onSearch(this.state.searchTerm);
  }
  render() {
    return (
      <div className="SearchBar">
  <input placeholder="Enter A Song, Album, or Artist" onChange = {this.handleTermChange}/>
  <a onClick = {this.props.onSearch(this.state.searchTerm)}>SEARCH</a>
</div>
);
}
}

export default SearchBar;
