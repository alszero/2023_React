import { Component } from "react";

class ScrollBox extends Component {
  scrollBottom = () => {
    const { scrollHeight, clientHeight } = this.box;

    // 위 문장은 아래 코드와 같다
    // const scrollHeight = this.box.scrollHeight
    // const clientHeight = this.box.clientHeight
    this.box.scrollTop = scrollHeight - clientHeight;
    // scrollHeight는 박스의 전체 높이
    // 내부 clientHeight는 박스를 픽셀로 환산
  };
  render() {
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto",
      position: "relative",
    };

    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(white, black)",
    };

    return (
      <div
        style={style}
        ref={(ref) => {
          this.box = ref;
        }}
      >
        <div style={innerStyle}></div>
      </div>
    );
  }
}
export default ScrollBox;
