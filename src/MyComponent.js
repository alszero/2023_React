//MyComponent.js
//function ---> =() => {}
import PropTypes from "prop-types"
import { Component } from "react";
class MyComponent extends Component {
    render() {
        const {name, favoriteNumber, children} = this.props;
        // this.props를 통해 조회함
        return (
            <div>
            안녕하세요, 제 이름은 {name} 입니다. <br />
            children 값은 {children}
            입니다. <br />
            제가 좋아하는 숫자는 {favoriteNumber} 입니다.
            </div>
            );
    }
    
};

MyComponent.defaultProps = {
    name: "기본이름",
};
MyComponent.propTypes = {
    name:PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
}
export default MyComponent;
