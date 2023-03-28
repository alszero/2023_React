import { Component } from "react";

class EventPractice extends Component {
  state = {
    username: "",
    message: "",
  };
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // 생성자 메소드는 this(현재객체)와 메소드를 묶어주는 역할을 한다.
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      // 첫번째 input박스를 선택하면 [e.target.name]값은 username이 된다.
      // 두번째 input박스를 선택하면 [e.target.name]값은 message가 된다.
    });
  };

  handleClick = () => {
    alert(this.state.username + ":" + this.state.message);
    this.setState({
      username: "",
      message: "",
    });
  };

  handleKeyDown = (e) => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자 이름"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}
export default EventPractice;
