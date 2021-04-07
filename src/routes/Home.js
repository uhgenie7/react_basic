import React, { Component } from 'react';
// json module terminal>> npm install axios
import axios from 'axios';
import Movie from '../components/Movie';
// import '../App.css';

class Home extends Component {
  // 로딩 중 >> 로딩 완료 / 즉, 상태 변화가 일어나는 페이지 / state를 정하고 setState를 만든다!
  state = {
    isLoading: true,
    moviesArray : [],
  };

  // getMovies = () => {
  //   const movies = axios.get('https://yts.mx/api/v2/list_movies.json');
  //   console.log(movies);
  // }

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
  } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
  // state 처럼 만들어준 것
    console.log(movies);
  // 배열 안에 넣어줘야 함.
    
    this.setState({ isLoading: false, moviesArray: movies });
    // movies도 상태가 변화됨.
    // moviesArray~ : state의 moviesArray 빈 배열
    // ~movies: json으로 받아온 movies (console.log(movies))
    // 받아온 movies를 만들어준 빈 배열 movies에 넣어줌
  };
  
  // async 와 await는 짝꿍. 비동기 async 로 부르면 await 다른 일을 할 수 있게 한다.


  componentDidMount() {
    // setTimeout(function () {
    //   this.setState({ isLoading: false });
    // }, 3000);
    //this 바인딩이 안 됨

    // setTimeout(() => {
    //   this.setState({ isLoading: false });
    // }, 3000);

    // const movies = axios.get('https://yts.mx/api/v2/list_movies.json');
    // console.log(movies);

    this.getMovies();
    // console.log(this);
  }

  render() {
    // const isLoading = this.state.isLoading;
    // this.state.isLoading; = true;
    // const isLoading = true;

    // ES6
    // const { isLoading } = this.state;
    // state에 담긴 key가 여러개일 경우 중괄호를 써서 this.state를 통으로 받는다.

    const { isLoading, moviesArray } = this.state;

    return (
      <section className='container'>
        {/* {isLoading ? 'Loading' : 'All Data Loading Complete!'} */}
        {/* {isLoading ? 'Loading' : <Movie/>} */}

        {isLoading ? (
          <div className="loader">Loading</div>
        ) : (
          <div className="movies">
              {moviesArray.map((movie) => (
                <Movie
                  key={movie.id}
                  title={movie.title}
                  year={movie.year}
                  rating={movie.rating}
                  genres={movie.genres}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                />
              ))}
          </div>
        )}
      </section>
    );
  }
}


export default Home;