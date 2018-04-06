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
      <div>
        <input 
          value={this.state.searchTerm}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }
}

export default Searchbar;