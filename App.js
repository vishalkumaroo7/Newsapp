import Counter from "./components/Counter";
import Fruits from "./components/Fruits";
import Notes from "./components/Notes";
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";
import { useState } from "react";
import UserForm from "./forms and hooks/UserForm";
import UseEffectHook from "./forms and hooks/UseEffectHook";
import NewsApp from "./forms and hooks/NewsApp";


function App() {

  const [countInParent,setCountInParent]=useState(0);

  function updateCountInParent(count){
    setCountInParent(count)
  }


  function uploadData(){
    console.log('I will start uploading the data now.');
  }

  return (
    <div>
{/* 
      <p>Inside the parent: {countInParent}</p>
      <Child1 onCountUpdate={updateCountInParent} />
      <Child2 countFromParent ={countInParent} uploadData={uploadData} /> */}

      {/* <UserForm/> */}

      {/* <UseEffectHook/> */}

      <NewsApp/>

    </div>    
  );
}

export default App;
