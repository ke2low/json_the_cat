const args = process.argv;
const { fetchBreedDescription } = require('./breedFetcher');
const breedName = args[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error)  {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
})