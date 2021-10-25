import './AddItemForm.css';
import {useRef} from 'react';
function AddItemForm(props){
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
        //console.log(item);
        props.onAddItem(item);
    }
    return(
    <div className="iteminput">
    <form className="itemform" onSubmit={formSubmitHandler}>
        <label>Eseme nimi</label>
        <input type="text" placeholder="Nimi" required ref={nameInputRef}/>
        <label>Eseme hind</label>
        <input type="number" placeholder="Hind" required ref={priceInputRef}/>
        <label>Eseme Kategooria</label>
        <input type="text" placeholder="Kategooria" required ref={categoryInputRef}/>
        <button className="nupp">Sisesta uus ese</button>
    </form>
    </div>
    )
}
export default AddItemForm;