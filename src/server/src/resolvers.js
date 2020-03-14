// TODO: Import Mongoose here
const mongoose = require('mongoose');
// TODO: Connect to mongo here
const {MongoClient} = require('mongodb');

// TODO: Replace `{}` with actual Movie model
const Movie = {}

const getMovieList = async () => {
  return await Movie.find({})
}

const resolvers = {
    Query: {
      movies: async () =>  {
        const movieList = await getMovieList()
        return movieList
      }
    },
  };
  
export default resolvers;