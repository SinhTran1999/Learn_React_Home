// function Clock(props){
//     return (
//         <div>
//             <h2>Hello World</h2>
//             <h1>It is {props.date.toLocaleTimeString()}</h1>
//         </div>
//     );
// }
// function tick(){
//     ReactDOM.render(
//     <Clock date ={new Date()}/>,
//     document.getElementById('root'));
// }
// setInterval(tick, 1000);

//Converting a function to a class
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }
    componentDidMount(){
        this.timerID = setInterval(()=>this.tick(),1000);
    }
    componentWillMount(){
        clearInterval(this.timerID);
    }
    tick(){
        this.setState({
            date: new Date()
        });
    }
    render(){
        return (
            <div>
                <h2>Hello Word</h2>
                <h1>It is {this.state.date.toLocaleTimeString()}</h1>
            </div>
        );
    }
}
ReactDOM.render(<Clock/>, document.getElementById('root'));