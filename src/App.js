import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

//아래 언어는 사실 html이 아니라 JSX
function App() {

  let [title, changeTitle] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [like, updateLike] = useState(0);

  // function setTitle() {
  //   title[0] = '여자코트 추천';
  //   changeTitle([...title]);
  // }

  return (
    <div className="App">
      {/* 상단메뉴 만들기 */}
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      {/* 가나다순 정렬 버튼 생성 */}
      <button onClick={() => {
        let sortedTitle = [...title.sort()];
        changeTitle(sortedTitle);
      }}>정렬</button>

      {/* 글목록 변경 버튼 생성 */}
      <button onClick={() => {
          let copy = [...title];
          copy[0] = '여자코트 추천';
          changeTitle(copy);
        }}>change</button> 

      {/* 블로그 글 리스트 만들기 */}
      <div className="list">
        {/* 좋아요 갯수 생성 */}
        <h4>{title[0]} <span onClick={()=>{updateLike( like+1 )}}>♥️</span> {like} </h4>
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

      {/* 모달 상세페이지 컴포넌트 생성 */}
      <Modal></Modal>
      
    </div>
  );
}

function Modal() {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>내용</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
