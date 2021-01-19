import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business.js';

class BusinessList extends React.Component {

  

  render() {
    const businesses = this.props.businesses;
    return (
      <div className="BusinessList">
        {businesses.map(businessToRender => {
          return <Business key={businessToRender.id} business={businessToRender} />;
        })}
      </div>
    )
  }
}

export default BusinessList;