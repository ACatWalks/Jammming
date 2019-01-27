import React, {Component} from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = {};
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }
  search(e){
    //this.state = this.props.onSearch();
    this.setState({search: e.target.value});
  }
  handleTermChange(e){
    //this.setState(this.state.search = e.target.value);
    this.props.onSearch(this.state.search);
  }
  render() {
    return (
      <div className="SearchBar">
  <input placeholder="Enter A Song, Album, or Artist" onChange = {this.handleTermChange}/>
  <a>SEARCH</a>
</div>
);
}
}

export default SearchBar;
