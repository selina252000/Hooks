import React , {useState} from 'react'

const HookState = () => {
    const [myName,setMyName] = useState("selina ");

    const changeName =()  =>{
        let val = myName;
        // ternary operator
        if(val === 'selina') {
          setMyName("solomi")
        } else{
          setMyName("selina")
        } 
    }
  return (
    <div>
      <h1>{myName}</h1>
       <button className=' btn' onClick={changeName}> click here</button>
 
    </div>
  )
  
}

export default HookState
