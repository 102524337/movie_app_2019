import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import "./App.css"



class App extends React.Component {
  
  state = {
    isLoading: true,
    movies: []
  };

  getMovie = async ()  => {
    const {data: {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading:false});
  } 

  componentDidMount(){ //executed after render() function.
    
    //setTimeout(() => {this.setState({isLoading:false})}, 3000);
    this.getMovie();
  }

  render(){
    const {isLoading, movies} = this.state;
    return (
      <div id = "potato">
      <section className = "container">
        {isLoading? (
        <div className = "loader">
          <span className = "loader_text">
            Loading...
          </span>
        </div>
        ): (
        <div className = "movies">
          {
            movies.map(movie => {
              return(
                <Movie 
      
                key = {movie.id}
                id = {movie.id} 
                title = {movie.title} 
                summary= {movie.summary} 
                poster = {movie.medium_cover_image} 
                year={movie.year}
                genres = {movie.genres}
                />
              )
            })
          }
        </div>
        )
        }   
      </section>
      </div>
    );
  }
}
export default App;
