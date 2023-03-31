import { Component } from "react";
// import ValidationSample from "./ValidationSample"; // 모듈 불러오기
// import RefSample from "./RefSample";
import ScrollBox from "./ScrollBox";
class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => (this.ScrollBox = ref)} />
        <button onClick={() => this.ScrollBox.scrollBottom()}>맨 밑으로</button>
      </div>
    );
  }
}

export default App;
