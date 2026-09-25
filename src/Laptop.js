import React from 'react';
class Laptop extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            brand: "Apple",
            model: "MacBook Air 13",
            proc: "M1",
            memory: "16GB",
            disk: "512GB"
        }
    }
    render(){
        return (
            <>
            <h2>My <b>{this.state.model}</b></h2>
            <p> Brand: <b>{this.state.brand}</b></p>
            <p> Model: <b>{this.state.model}</b></p>
            <p>Processor: <b>{this.state.proc}</b></p>
            <p>Memory: <b>{this.state.memory}</b></p>
            <p>Disk: <b>{this.state.disk}</b></p>
            </>
        )
    }
}
export default Laptop;