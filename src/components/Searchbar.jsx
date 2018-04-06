import React, { Component } from 'react';


class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = { term : '' };
  }

onInputChange(term) {
  this.setState({term});
  this.props.onSearchTermChange(term);
  console.log(term)
}

  render() {
    return(
      <div className="searchComp">
        <h1>Welcome to React-Tube</h1>
        <input 
          value={this.state.searchTerm}
          onChange={event => this.onInputChange(event.target.value)}
          placeholder='Search Youtube Videos...' />
      </div>
    );
  }
}

export default Searchbar;