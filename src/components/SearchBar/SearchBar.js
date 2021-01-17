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

  }

  
  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      const sortByOptionValue = this.sortByOptions[sortByOption];
      return (
        <li key={sortByOptionValue} 
          className={this.getSortByClass(sortByOption)}
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

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a href="#">Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;