function Student(){
    return (
        <>
        <h2>Освітня діяльність</h2>
        <form class="form">
        <b><p>Освітній ступінь</p></b>
        <input type="radio" name="education" value="Bachelor"/> Бакалавр<br></br>
        <input type="radio" name="education" value="Magister"/> Магістр<br></br>
        <b><p>Термін навчання</p></b>
        <input type="radio" name="education" value="Full"/> Повний<br></br>
        <input type="radio" name="education" value="Short"/> Скорочений<br></br>
        </form>
        </>
        
    );
}
export default Student;