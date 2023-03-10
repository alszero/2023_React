import './App.css';

function App(){
  const name = '리액트';
  return (
    <>
    {/* 주석은 이렇게 작성합니다 */}
    <div
      className="react" //시작 태그를 여러줄로 작성하게 된다면 주석이 된다.
      // 주석 되나요
      >{name}
      </div>
      // 하지만 이런 주석이나
      /* 이런 주석은 화면에 그대로 나타나게 된다.*/
      <input/>
        </>
      )
}

export default App;
