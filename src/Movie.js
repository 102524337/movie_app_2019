import React from "react";
import PropTypes from "prop-types"; 
import "./App.css" ;
import Popup from "reactjs-popup";





Movie.propTypes = {
    
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}



function Movie ({title, summary,poster, year, genres})
{
    //console.log(title); String


    return (
    <div className = "movie">
        <img src = {poster} alt = {title} title = {title}/>
        <div className = "movie_data">
            <h3 className = "title">{title}</h3>
            <ul className = "genres">
            {genres.map((genre, index) => {return <li key ={index} className = "genres_list" >{genre}</li>})}
            </ul>
            <h5 className = "year">{year}</h5>
            <p className = "summary" >
                {summary.slice(0, 140)}...
                <Popup />
            </p>         
        </div>
    </div>
    );
}


export default Movie;