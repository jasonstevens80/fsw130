const store = require("./redux/index.js")
const store = require("./redux/movies.js")
const store = require("./redux/tvshows.js")


const {addMovie, getAllMovies} = require ("./redux/movies")
const {removeMovie} = require ("./redux/movies")
const {addtvshow, getalltvshows} = require ("./redux/tvshows")
const {removetvshow} = require ("./redux/tvshows")


store.dispatch(addMovie("Star Wars"))
store.dispatch(addMovie("Batman"))
store.dispatch(addtvshow("Seinfeld"))
store.dispatch(addtvshow("Family Guy"))
store.dispatch(getAllMovies())
store.dispatch(getAlltvshows())