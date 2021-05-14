const { Component } = require("react");

class Counter extends Component{
    componentWillMount() {
        console.log('Component WILL MOUNT!')
     }
     componentDidMount() {
        console.log('Component DID MOUNT!')
     }
     componentWillReceiveProps(newProps) {    
        console.log('Component WILL RECIEVE PROPS!')
     }
     shouldComponentUpdate(newProps, newState) {
        return true;
     }
     componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
     }
     componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
     }
     componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
     }
    constructor(props){
        console.log("Contrustor Props")
        super(props);
        this.state  = {
            count: 0
        }
    }
    inCrease(){
        this.setState({
            count: this.state.count + 1
        });
    }
    deCrease(){
        this.setState({
            count: this.state.count -1
        })
    }
    render(){

        console.log(' Count Render');
        return(
            <div className="couter">
                <button onClick= {() => this.inCrease()}>+</button>
                <span>{this.state.count}</span>
                <button onClick= {() => this.deCrease()}>-</button>

            </div>
        )
    }
}

export default Counter;