import './App.css';

function App() {
  const name = undefined;
  return name || '값이 undefined 입니다.'; // 값이 거짓이어도 뒤에를 체크해야 된다.
}

export default App;
