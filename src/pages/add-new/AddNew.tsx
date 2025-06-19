import ButtonSave from "./components/ButtonSave";

const AddNew = () =>{
    return(
        <>
            <header>
                <h1>
                    Add new task
                </h1>
            </header>
            <form action="">
                <textarea placeholder="Add a new task..."></textarea>
                <label htmlFor="Status">Статус</label>
                <select name="" id="Status" >
                    <option value="">Не начата</option>
                    <option value="">В процессе</option>
                    <option value="">Завершена</option>
                </select>
                <ButtonSave/>
            </form>
        </>
    )
}

export default AddNew;