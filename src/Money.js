import React from 'react';
class Money extends React.Component {
    render(){
        return(
        <>
        <h2>Семестр вивчення</h2>
        <form>
        <fieldset className="box">
        <legend>Семестр вивчення ОК</legend>
        <div className="semester-row">
        <label><input type="checkbox" name="education" value="semester"/> 1 сем.</label>
        <label><input type="checkbox" name="education" value="semester"/> 2 сем.</label>
        <label><input type="checkbox" name="education" value="semester"/> 3 сем.</label>
        <label><input type="checkbox" name="education" value="semester"/> 4 сем.</label>
        <label><input type="checkbox" name="education" value="semester"/> 5 сем.</label>
        <label><input type="checkbox" name="education" value="semester"/> 6 сем.</label> 
        <label><input type="checkbox" name="education" value="semester"/> 7 сем.</label>
        </div>
        </fieldset>
        <fieldset className="box">
         <legend>Приєднання файлу</legend> 
         <div className="file-box"> 
        <div className="file-line">
        <label>Виберіть файл ОК (тільки PDF):</label>
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