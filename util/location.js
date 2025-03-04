// const axios = require('axios');

// const HttpError = require('../models/http-error');


// async function getCoordsForAddress(address){
    
//     return { lat: 40.7484474,
//         lng: -73.9871516};
// }

// module.exports = getCoordsForAddress;
const HttpError = require('../models/http-error');

async function getCoordsForAddress(address) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!address) {
        reject(new HttpError('Could not find location for the specified address.', 422));
      }
      
      // Dummy coordinates
      resolve({
        lat: 40.7484474,
        lng: -73.9871516
      });
    }, 1000); // Simulating async behavior
  });
}

module.exports = getCoordsForAddress;
