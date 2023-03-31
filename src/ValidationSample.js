// ValidationSample.js
import { Component } from "react";
import "./ValidationSample.css";

class ValidationSample extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    }); //input박스에 값을 입력할 때 실행하는 메소드
    // 입력된 값이 password에 저장
  };

  handleButtonClick = (e) => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
      // 검증하기 버튼을 눌렀을때 실행하는 메소드
      // 만약에 handleChange함수에서 password에 0000을 ㅣㅇㅂ력했다고 가정하면
      // validated: "0000" == "0000", 에서 "0000" === "0000" ---> true
      // validated는 true값을 가짐
    });
  };
  render() {
    return (
      <div>
        <input
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          //classname은 ValidationSample.css에 있는 클래스 이름(success, failure)
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;
