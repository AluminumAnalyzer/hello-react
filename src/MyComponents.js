const MyComponents = props =>{
    return <div>안녕하세요, 제 이름은 {props.name}입니다. <br/> children의 값은 {props.children}입니다.</div>;
}


MyComponents.defaultProps = {
    name : '기본이름'};
export default MyComponents;