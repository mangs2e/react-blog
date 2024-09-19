import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

//아래 언어는 사실 html이 아니라 JSX
function App() {

  let [title, changeTitle] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [like, updateLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState('close');
  let [detailedTitle, setTitle] = useState(0);  
  let [inputValue, setInputValue] = useState('');

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
        }}>제목 수정</button> 

      {/* 블로그 글 리스트 만들기 */}
      {/* 코드 반복문 */}
      {
        title.map(function(a, i) {
          return (
            <div className="list" key={i}>
            {/* 제목 클릭시 상세 모달 생성, 꺼짐 */}
            <h4 onClick={() => {
              modal === 'open' ?  setModal('close') : setModal('open');
            {/* 제목 클릭시 제목 순서값 저장 */}
              setTitle(i);
            }}>{title[i]} 
            <span onClick={(e)=>{
              e.stopPropagation(); //이벤트 버블링 막아주는 함수
              let copy = [...like];
              copy[i] = copy[i] + 1;
              updateLike(copy)
              }}>♥️</span> {like[i]}</h4>
            <p>2월 17일 발행</p>
            <button onClick={() => {
              let titleCopy = [...title];
              let likeCopy = [...like];
              titleCopy.splice(i, 1);
              likeCopy.splice(i, 1);
              changeTitle(titleCopy);
              updateLike(likeCopy);
            }}>삭제</button>
          </div>
          )
        })
      }

      {/* 글 발행 기능 */}
      <input onInput={(e) => {
        setInputValue(e.target.value)}}></input>
      <button onClick={() => {
        let titleCopy = [...title];
        let likeCopy = [...like];
        titleCopy.push(inputValue);
        likeCopy.push(0);
        changeTitle(titleCopy);
        updateLike(likeCopy);
      }}>글 발행</button>

      {/* 모달 상세페이지 컴포넌트 생성(조건문 사용) */}
      {
        modal === 'open' ? <Modal title={title} detailedTitle={detailedTitle} color="orange" changeTitle={changeTitle}/> : null
      }
      
    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal' style={{background: props.color}}>
      <h4>{props.title[props.detailedTitle]}</h4>
      <p>내용</p>
      <p>상세내용</p>
      <button onClick={() => {
        let copy = [...props.title];
        copy[0] = '여자코트 추천';
        props.changeTitle(copy);
      }}>제목 수정</button>
    </div>
  )
}

export default App;
