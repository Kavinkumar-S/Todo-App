import { useState } from 'react';
// import logo from './logo.svg';
import './Style.css';

function App() {
 
  const [inputvalue , setInputvalue] =useState("");
  const [tasklist,setTasklist] = useState([]);
  

  const inputValue=(e)=>{

    setInputvalue(e.target.value);

  }

  const getTask=(e)=>{
      e.preventDefault();
    setTasklist([...tasklist,{
      task:inputvalue,
     id:Math.ceil(Math.random()*100) 
    }])

    setInputvalue("");

  }

  console.log("tasklist",tasklist);
 
  // deleteTask

  const delTask=(id)=>{

    console.log("button clicked");

   const del = tasklist.filter((val)=> val.id !== id);  
   setTasklist(del)

  }

  
  return (
    <>

    <div className='container'>    

    <div className='todo-container'>
    <h3 className='title'>A simple Todo</h3>

    <form onSubmit={getTask}>
    <input type="text"  value={inputvalue} onChange={inputValue}/>
    <button>Add</button>

    </form>

   {
 tasklist.map( (val,index )=>
 <div className='todo-list' key={index}>
      <p >{val.task}</p>

      <div>
      <button 
      onClick={()=> delTask(val.id)}
      >X</button>
    </div>
    </div>)
}

    </div>

   




    </div>

    </>
  );
}

export default App;
