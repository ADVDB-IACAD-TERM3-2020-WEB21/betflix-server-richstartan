// TODO: Import Mongoose here
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:4000/test', {useNewUrlParser: true})

// TODO: Connect to mongo here
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', function() {
	// You are already connected to the database.
})

var movieSchema = new.mongoose.Schema( {
	title: String,
	//nothing will update unless it is connected to the database.
})

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