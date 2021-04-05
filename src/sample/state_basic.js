import React, { Component } from 'react';

class App extends Component {
  // 요소 중에서 고정되어 있지만 향후 변경해야 할 요소의 경우 먼저 state로 상태를 지정한다.
  // 이후 특정한 조건이 진행되면 상태가 변경되는데 이때 setState로 변경한다.
  // 초깃값을 state를 세워줌.
  state = {
    count: 0,
  };

  // plus() {
  //   console.log('plus');
  //   this.state.count = 1;
  // }

  // 일반 함수의 경우 클래스 범위의 this 데이터가 바인딩 되지 않는다. 따라서 부모 클래스의 this 를 함수 안에서 사용해야 할 경우 화살표 함수를 사용해야 한다.
  plus = () => {
    // this.state.count = 1;
    // Do not mutate state directly. Use setState()  react/no-direct-mutation-state
    // this.setState({ count: 1 });
    // setState는 객체 형태로 적어줘야 함
    // count:1은 add를 누르면 1 추가가 아닌 1 고정값만 넣어주는 것.
    this.setState({ count: this.state.count + 1 });
  };

  // minus() {
  //   console.log('minus');
  // }

  minus = () => {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        <h1>The Number is : 0</h1>
        <h1>The Number is : { this.state.count}</h1>
        <button onClick={this.plus}>ADD</button>
        {/* Do Not onClick=plus() / onClick={this.plus} */}
        {/* DO Not {plus()} why? class 안에 있기 때문 */}
        <button onClick={this.minus}>MINUS</button>
      </div>
    );
  }
}

export default App;