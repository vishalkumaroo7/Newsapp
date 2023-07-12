import React, { useState ,useRef} from 'react'

function UserForm() {

    const [name,setName] =useState('');
    const [fruit,setFruit] = useState('');

    const nameInputRef=useRef(null);
    const fruitSelectRef=useRef(null);

    function handleSubmit(event){
        event.preventDefault();
        const nameInputValue=nameInputRef.current.value;
        const fruitValue=fruitSelectRef.current.value;
        alert(nameInputValue+fruitValue);
    }

    function handleChange(e){
        console.log(e.target.value);
        setFruit(e.target.value)
    }

  return (
    <form style={{padding :'20px', margin:'20px'}}>
        <label htmlFor="name">Name</label>
        <input type="text" id='nameInput' ref={nameInputRef} />
        <br />
        <select ref={fruitSelectRef} onChange={handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
        </select>
        <br />

        <button onClick={handleSubmit}>Submit</button>




    </form>
  )
}

export default UserForm