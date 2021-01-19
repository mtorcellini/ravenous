const apiKey = "";

const yelp = {

  search(term, location, sortBy) {
    // have to use cors-anywhere to make the request with proper CORS permissions
    const cors = "https://cors-anywhere.herokuapp.com/";
    const yelpEndpoint = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;

    return fetch(`${cors}${yelpEndpoint}`, {headers : {'Authorization' : `Bearer ${apiKey}`}})
      .then(response => {
        console.log(">>> ", response);
        return response.json();
        // return response;
      })
      .then(jsonResponse => {
        if (jsonResponse.businesses) {
          // build an array of all businesses
          const businessArray = jsonResponse.businesses.map(business => {
            // for each business, create a business object
            const businessObj = {
              id : business.id,
              imageSrc : business.image_url,
              name : business.name,
              address : business.location.address1,
              city : business.location.city,
              state : business.location.state,
              zipCode : business.location.zip_code,
              category : business.categories[0].title,
              rating : business.rating,
              reviewCount : business.review_count
            }
            // return the business object to th businesses array;
            return businessObj;
          });
          // return array of all businesses
          return businessArray;
        }
      })


  }

};

export default yelp;