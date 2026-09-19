function File(){
    return (
        <>
        <h2>Завантаження файлу</h2>
        <p>Вибрати і завантажити файл на сервер</p>
        <form class="form">
        <label>Вибрати файл: </label>
        <input class="button" type="file" name="file"/>    
        </form>
        </>
        
    );
}
export default File;