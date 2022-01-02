// npm install -save prop-types을 한뒤에 아래와 같이 설정해주면 에러가 발생하지 않습니다.
import PropTypes from "prop-types";

const MyComponents = props =>{
    const {name, children} = props;
    return (
    <div>
        안녕하세요, 제 이름은 {name}입니다. <br/> 
        children 값은 {children}입니다.
    </div>);
}

MyComponents.propTypes = {
    name : PropTypes.string
}


MyComponents.defaultProps = {
    name : '기본이름'};
export default MyComponents;