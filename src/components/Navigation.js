import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      {/* <a href="/">Home</a>
      <a href="/about">About</a> */}
      {/* a태그는 페이지를 갈아버리기 때문에 a태그를 쓰면 react를 쓰는 의미가 없음 */}
      {/* a태그는 props를 넘기기가 힘듬 */}
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      {/* Link는 react-router-dom의 기능 */}
    </div>
  )
}

export default Navigation;