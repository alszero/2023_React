import { useState } from "react";

const Say = () => {
    const [message, setMessage] = useState('');
    // message를 멤버변수, setMessage에 의해서 message값을 변경
    // setMessage는 함수라고 생각
    const onClickEnter = () => setMessage('안녕하세요!!');
    const onClickLeave = () => setMessage('안녕히 가세요!!');
    const [color, setColor] = useState("black");
    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{color}}>{message}</h1>
            <button style={{color:"red"}} onClick = {()=> setColor("red")}></button>
                빨간색
            <button style={{color:"green"}} onClick = {()=> setColor("green")}></button>
                초록색
            <button style={{color:"blue"}} onClick = {()=> setColor("blue")}></button>
                파랑색


        </div>
    )
}
export default Say;