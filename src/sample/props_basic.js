import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
// function Movie(props) {
//   console.log(props.title);
// }
function Movie({title, ranking, picture}) {
  // console.log(title);
  // console.log(typeof (ranking));
  return (
    <div>
      <h3>My Favorite Movie is {title}</h3>
      <p>Ranking: {ranking}</p>
      <img src={picture} alt={ title}/>
    </div>
  )
}

// const arr = ['a', 'b', 'c', 'd'];
// arr.map(function (elem) {
//   console.log(elem);
//   return 0;
// });

// arr.map((elem) => {
//   console.log(elem);
//   return 0;
// });


const myMovies = [
  {
    id: 1,
    title: "shindler",
    ranking: 5,
    image: 'http://t1.daumcdn.net/movie/e29bd40296d944288046b02dded779d41548118641846'
  },
  {
    id: 2,
    title: "반도",
    ranking: 3,
    image: 'https://t1.daumcdn.net/movie/389d6e403d8ee48c419c7b16908919103e2c2670'
  },
  {
    id: 3,
    title: "신세계",
    ranking: 3,
    image: 'https://upload.wikimedia.org/wikipedia/ko/6/6b/%EC%98%81%ED%99%94_%EC%8B%A0%EC%84%B8%EA%B3%84_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg'
  },
  {
    id: 4,
    title: "해리포터",
    ranking: 4,
    image: 'https://img2.yna.co.kr/etc/inner/KR/2021/01/26/AKR20210126011600075_01_i_P2.jpg'
  },
  {
    id: 5,
    title: "봄",
    ranking: 5,
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Cherry_blossoms_at_POSTECH.jpeg'
  },
]

function App() {
  return (
    <div className="App">
      <h2>My Movie</h2>
      {myMovies.map((movies) => (
        <Movie title={movies.title} ranking={movies.ranking} picture={movies.image} key={movies.id}/>
      ))}


      {/* <Movie title={myMovies[0].title} ranking={myMovies[0].ranking} picture='shindler is...'/> */}

      {/* <Movie title='봄' ranking='6' 이거는 스트링 desc='봄 is...'/> */}
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  ranking: PropTypes.number.isRequired
};

export default App;