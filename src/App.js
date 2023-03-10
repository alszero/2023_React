import './App.css';

function App() {
  const name = '리액트';
  return (
    <div
      style={{
        backgroundColor : 'yellow', // background-Color ---> bacgroundColor로 표현(카멜)
        color : 'aqua',
        fontSize : '48px',
        fontWeight : 'bold',
        padding : 16 //단위가 px
        
      }}
    >
      name
    </div>
  );
}

export default App;
