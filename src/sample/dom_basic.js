// class Greeting extends Component{
//   render() {
//     return (
//       <div>
//         <p>Hello again react</p>
//       </div>
//     );
//   }
// }
//   react의 Component를 greeting에게 상속
//   render 함수의 내부에 return 값은 반드시 하나의 태그로 감싸져야 한다.


// function Greeting (){
//     return (
//       <div>
//         <p>Hello again react</p>
//       </div>
//     );
// }

// .....Component start.....
import React, { Component } from 'react';
// react의 component 를 상속주기 위함
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import Footer from './components/Footer';



// import 클래스명 from '경로';



function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
