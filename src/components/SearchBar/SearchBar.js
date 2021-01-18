import React from 'react';
import './SearchBar.css';



class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      term : "",
      location : "",
      sortBy : "best_match"
    }

    this.sortByOptions = {
      'Best Match' : 'best_match',
      'Highest Rated' : 'rating',
      'Most Reviewed' : 'review_count'
    }

    this.handleSortByChange = this.handleSortByChange.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    

  }

  
  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      // return a list element for each sort option
      // on click, call the event handler: handleSortByChange()
      // each element receives a class 'active' or '' as set by getSortByClass()
      const sortByOptionValue = this.sortByOptions[sortByOption];
      return (
        <li key={sortByOptionValue} 
          className={this.getSortByClass(sortByOptionValue)}
          onClick={() => this.handleSortByChange(sortByOptionValue)}>
            {sortByOption}
        </li>
      );
    });
  }

  // returns a className for the sort option that css will use
  getSortByClass(sortByOption) {
    if (sortByOption === this.state.sortBy) {
      return 'active';
    }
    return '';
  }

  // sets the SearchBar's sortBy state
  handleSortByChange(sortByOption) {
    this.setState({sortBy : sortByOption});
    console.log("handleSortByChange " + sortByOption);
  }

  // get search term from input field
  handleTermChange(event) {
    const searchTerm = event.target.value;
    this.setState({term : searchTerm});

  }

  // get location from input field
  handleLocationChange(event) {
    const locationTerm = event.target.value;
    this.setState({location : locationTerm});

  }

  handleSearch(event) {
    event.preventDefault();
    this.props.searchFunc(this.state.term, this.state.location, this.state.sortBy);
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermChange} />
          <input placeholder="Where?" onChange={this.handleLocationChange} />
        </div>
        <div className="SearchBar-submit">
          <a href="#" onClick={this.handleSearch}>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;