import {useRef} from 'react';
function AddCategoryForm(props){
    const nameInputRef = useRef();
    const priceInputRef = useRef();
    const categoryInputRef = useRef();
    function formSubmitHandler(event){
        event.preventDefault();
        const nameValue = nameInputRef.current.value;
        const priceValue = priceInputRef.current.value;
        const categoryValue = categoryInputRef.current.value;
        const item = {
            name: nameValue,
            price:  priceValue,
            category: categoryValue
        }
        props.onAddItem(item);
    }
    return(
    <div>
    <form className="catform" onSubmit={formSubmitHandler}>
        <label>Kategooria nimi</label>
        <input type="text" placeholder="Nimi" required ref={nameInputRef}/>
        <label>Eseme hind</label>
        <input type="number" placeholder="Hind" required ref={priceInputRef}/>
        <label>Eseme Kategooria</label>
        <select required ref={categoryInputRef}>
            <option value="BASIC">BASIC</option>
            <option value="PREMIUM">PREMIUM</option>
            <option value="DELUXE">DELUXE</option>
        </select>
        <button className="catbutton">Sisesta uus kategooria</button>        
    </form>
    </div>
    )
}
export default AddCategoryForm;