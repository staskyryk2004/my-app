import React from 'react';
class Money extends React.Component {
    render(){
        return(
        <>
        <h2 className="main-title">Внесення реквізитів про підвищення кваліфікації</h2>
        <form className="form-container">
        <fieldset className="form-box">
        <legend className="box-title">Семестр вивчення ОК</legend>
        <div className="checkbox-row">
        <label className="checkbox-label">
        <input type="checkbox" name="education" value="semester"/>1 сем. <br></br>
        </label>
        <input type="checkbox" name="education" value="semester"/>2 сем. <br></br>
        <label className="checkbox-label">
        <input type="checkbox" name="education" value="semester"/>3 сем.<br></br>
        </label>
        <input type="checkbox" name="education" value="semester"/>4 сем. <br></br>
        <label className="checkbox-label">
        <input type="checkbox" name="education" value="semester"/>5 сем. <br></br>
        </label>
        <input type="checkbox" name="education" value="semester"/>6 сем. <br></br>
        <label className="checkbox-label">
        <input type="checkbox" name="education" value="semester"/>7 сем. <br></br>
        </label>
        </div>
        </fieldset>
        <fieldset className="form-box">
         <legend className="box-title">Приєднання файлу</legend> 
         <div className="file-section">  
        <input type="checkbox" name="language" value="file"/>Прикріпити файл документа до ОК <br></br>
        <div className="file-upload">
        <label htmlFor="file-input">Виберіть файл ОК (тільки PDF):</label>
            <input type="file" name="file-input" accept=".pdf" /> 
            </div>
          </div> 
        </fieldset>
        </form>    
        </>
        );
    }
}
export default Money;