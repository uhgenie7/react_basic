import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import { Link } from 'react-router-dom';

// function Movie() {
//   return <h4>Title</h4>
// }

function Movie({title, year, summary, poster, genres}) {
  return (
    <div className="movie">
      <Link to={{pathname: '/movie_detail', state:{year, title, summary, poster, genres}}}>
        <img
          src={poster}
          alt={title}
          onError={(e) => { e.target.onerror = null; e.target.src = "https://developers.google.com/maps/documentation/streetview/images/error-image-generic.png" }}>
          </img>
        <div className="movie_data">
          <h3 className="movie_title">{title}</h3>
          <h5 className="movie_year">{year}</h5>
          <ul className="movie_lists">
            {genres.map((genres, idx) => {
              return (
                <li className="movie_list" key={idx}>{genres}</li>
              )
            })}
            {/* map은 return이 있으면 {}, 없으면 ()을 쓴다 */}
          </ul>
          <p className="movie_summary">{ summary}</p>
        </div>
      </Link>
    </div>
    )
}

Movie.propType = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;