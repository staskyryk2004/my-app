import React from 'react';
class Form extends React.Component {
    render(){
        return(
        <>
        <h2>Контактна форма</h2>
        <form>
        <p>Відправити по електроній пошті</p>
        <label>Ім'я</label>
        <input type="text" name="firstname" /><br></br>
        <label>Електронна пошта</label>
        <input type="text" name="lastname" /><br></br>
        <label>Тема</label>
        <input type="text" name="theme" /><br></br>
        <label>Повідомлення</label>
        <textarea name="message"></textarea><br></br>
        <button>Надіслати електронного листа</button>
        </form>    
        </>
        );
    }
}
export default Form;