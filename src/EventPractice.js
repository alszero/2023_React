import { useState } from "react";

const EventPractice = () => {
  const [username, setUsername] = useState("");
  // username=''
  // setUsername는 username값을 변경할 때 사용
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    setUsername(e.target.value); //username값을 변경
  };

  const onChangeMessage = (e) => {
    setMessage(e.target.value); //username값을 변경
  };

  const onClick = () => {
    alert(this.state.username + ":" + this.state.message);
    this.setState({
      username: "",
      message: "",
    });
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자 이름"
        value={username}
        onChange={onChangeUsername}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={message}
        onChange={onChangeMessage}
        onKeyDown={onKeyDown}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};
export default EventPractice;
