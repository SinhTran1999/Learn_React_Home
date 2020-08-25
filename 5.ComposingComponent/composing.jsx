function Welcome(props){
    return <h1>Hello, {props.name}</h1>;
}
function App(){
    return (
        <div>
            <Welcome name ="Sinh"/>
            <Welcome name ="Tien"/>
            <Welcome name ="Phuc"/>
        </div>
    );
}
ReactDOM.render(<App/>, document.getElementById('root'));