function Welcome(props){
    return <h1>Hello, {props.name}</h1>
}
const element =<Welcome name="Sinh" age="21"/>;
ReactDOM.render(element, document.getElementById("root"));