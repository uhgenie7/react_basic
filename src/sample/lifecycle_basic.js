import React, { Component } from 'react';

class App extends Component {
    state = {
      count: 0,
    };
  
    plus = () => {
      this.setState({ count: this.state.count + 1 });
    };
  
  constructor(props) {
    // constructor에서 받아온 props 전달값은 super의 파라미터에 지정한다.
    super(props);
    // super은 props를 가장 우선적으로 저장합니다.
    console.log("2. constructor call");
  }

  componentDidMount() {
    console.log("3. componentDidMount call");
    // 렌더 된 뒤 화면이 갱신되면 가장 마지막에 실행
    // 로딩이 끝나면 로딩 이미지 없애면 되는 느낌.
  }

  componentDidUpdate() {
    console.log("4. componentDidUpdate call");
    // 화면이 한 번 변환되어야 실행
  }

  render() {
    console.log("1. render call");
    return (
      <div>
        <h1>This is Life Cycle Basics</h1>
        <h1>The Number is : { this.state.count}</h1>
        <button onClick={this.plus}>ADD</button>
      </div>
    );
  }
}

export default App;