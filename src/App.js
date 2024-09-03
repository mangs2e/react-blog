import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

//아래 언어는 사실 html이 아니라 JSX
function App() {

  let [title, b] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);

  return (
    <div className="App">
      {/* 상단메뉴 만들기 */}
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      {/* 블로그 글 리스트 만들기 */}
      <div className="list">
        <h4>{title[0]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
