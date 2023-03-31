import React, { Component } from "react";

class RefSample extends Component {
  input = React.createRef();
  // 멤버변수로 React.createRef();에 의해서 ref 생성하기

  handleFocus = () => {
    this.input.current.focus();
  };
  render() {
    return (
      <div>
        {/* ref는 input태그에 React.createRef()에서 생성한 값으로 넣어주기 */}
        <input ref={this.input}></input>
        <button onClick={this.handleFocus}>Click</button>
      </div>
    );
  }
}
export default RefSample;
