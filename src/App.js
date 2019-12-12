import React from 'react';
import PropTypes from 'prop-types';

Potato.propTypes = {
  movieListName: PropTypes.string.isRequired,
  movieImg: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

const movieLists = [
  
  {
    id: 1,
    name: "I know what you did in the last summer",
    image: "https://www.remove.bg/assets/start_remove-79a4598a05a77ca999df1dcb434160994b6fde2c3e9101984fb1be0f16d0a74e.png",
    rating: 5
  },
  
   {
    id:2,
    name: "82 year-born, JiYoung Kim",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-K-XJDBlXTJ_D1vZKOzLLzD0U7qJe84MqZjxqywl3zHl84jLr",
    rating: 3.5
  }
];

function Potato ({movieListName, movieImg, rating}){
  return (
  <div>
    <p>{movieListName}</p>
    <p><img src = {movieImg} alt = {"images"} /></p>
  <p>{rating}</p>
  </div>
  );
}

function App() {
  return (
  
      <div className="App">
        {movieLists.map(movieList => <Potato key = {movieList.id} movieListName = {movieList.name} movieImg = {movieList.image} rating = {movieList.rating} /> )}
      </div>
  );
}

export default App;
