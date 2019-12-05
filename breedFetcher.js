const request = require('request');
const args = process.argv;

request(`https://api.thecatapi.com/v1/breeds/search?q=${args[2]}`, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  // console.log(body);
  console.log(typeof body);
  let data = JSON.parse(body);
  // console.log(data)
  console.log(data[0].description);
});
