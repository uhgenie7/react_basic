import React from 'react';
import './App.css';
import Home from './routes/Home';
import { HashRouter, Route } from 'react-router-dom';
// npm install react-router-dom
// /package.json >> "react-router-dom": "^5.2.0",
import About from './routes/About';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';

function App() {
  // return <Home/>
  return (
    <HashRouter>
      <Navigation/>
      {/* <Route /> */}
      {/* http://localhost:3000/#/ */}
      {/* <Route path="/" component={Home} /> */}
      {/* http://localhost:3000/#/home */}
      {/* exact 속성을 넣어주지 않으면 이 페이지는 {Home} 페이지와 {About} 페이지를 모두 나열한다. */}
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      {/* path는 우리가 정하는 이름. #에 찍히는 이름으로 컴포넌트 {About}으로 이동! */}
      {/* http://localhost:3000/#/about */}
      <Route path="/movie_detail" component={Detail} />
    </HashRouter>
  )
}

export default App;