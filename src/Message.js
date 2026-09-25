import React from 'react';
class Message extends React.Component{
    constructor(){
        super();
        this.state = {
            message: "Welcome User",
        }
    }

    changeMessage(){
        this.setState({
            message: "Login successful!"
        })
    }

    render(){
        return (
            <>
            <h2>{this.state.message}</h2>
            <button onClick={() => this.changeMessage()}>Submit</button>
            </>
        )
    }
}
export default Message;