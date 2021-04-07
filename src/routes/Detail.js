import React from 'react';

// function Detail(props) {
//   console.log(props);
//   return (
//     <div>Hello details...</div>
//   )
// }
// componentDidmount를 쓰려면 class 로 써줘야함

class Detail extends React.Component {
  componentDidMount() {
    console.log("2.componentDidMount");
    const { history, location } = this.props;
    // console.log(location);
    // console.log(history);
    if (location.state === undefined) {
      history.push('/');
    }
  }
  
  render() {
    console.log("1. render");
    console.log(this);
    const { location } = this.props;
    if (location.state) {
      return(
        <div>
          {location.state.title}
        </div >
      )
    } else {
      return null;
    }
    // return (
    //   <div>
    //     {location.state.title}
    //     hello Detail
    //   </div>
    // )
  }
}

export default Detail;