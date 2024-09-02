import logo from './logo.svg';
import './App.css';

//아래 언어는 사실 html이 아니라 JSX
function App() {

  let post = '강남 우동 맛집'; //DB에서 가져왔다고 가정

  return (
    <div className="App">
      {/* 상단메뉴 만들기 */}
      <div className="black-nav">
        <h4 style={{color: 'red', fontSize: '20px'}}>블로그입니다.</h4>
      </div>
      <h4>{post}</h4>
    </div>
  );
}

export default App;
