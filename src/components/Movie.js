import React from 'react';
import PropTypes from 'prop-types';

// function Movie() {
//   return <h4>Title</h4>
// }

function Movie({title, year, summary, poster, genres}) {
  return (
    <div className="movie">
      <img src={poster} alt={title}></img>
      <div className="movie_data">
        <h3 className="movie_title">{title}</h3>
        <h5 className="movie_year">{year}</h5>
        <ul>
          {genres.map((genres, idx) => {
            return (
              <li key={idx}>{genres}</li>
            )
          })}
          {/* map은 return이 있으면 {}, 없으면 ()을 쓴다 */}
        </ul>
        <p className="movie_summery">{ summary}</p>
      </div>


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