import { Component } from "react";

class Counter extends Component {
   state = {
    number : 0,
    fixedNumber : 0
   };
   // 생성자 작성없이 state 문을 작성하면 초깃값을 설정 할 수 있도록
   // 내부저그올는 생성자가 실행되고 있음

   render(){
    const {number, fixedNumber} = this.state;
    // this.state은 생성자에서 설정한 값을 조회 후 number에 저장
    return (
            <div>
                <h1> { number }</h1>
                <h2> 바뀌지 않는 값 : {fixedNumber}</h2>
                <button
                    onClick = {() =>{
                        this.setState((prevState) => {
                            return{
                                number:prevState.number+1
                            }
                        });
                        //setState메서드에 의해서만 state(number)
                        //값 변경 가능
                        this.setState((prevState) => {
                            return{
                                number:prevState.number+1
                            }
                        });
                    }
                }
                >
                        +1
                </button>
            </div>
        );
    }
}
    

    

export default Counter;