function Keyboard(){
    const keyDown = (Event) => {
        console.log(Event.key);
    }
    return (
        <>
        <h2>Press Keyboard</h2>
        <form class="form">
        <input class="key" type="text" onKeyDown={keyDown} name="file"/><br></br> 
        <button>Submit</button>   
        </form>
        </>
        
    );
}
export default Keyboard;