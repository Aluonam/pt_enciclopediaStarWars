import React from 'react'

const Input = () => {

    const [userText, setUserText] = useState()

    const shareName = ()=>{


        // localeCompare(cadena)
    }

    
    

  return (
    <>
    <input type='text' onChange={(e)=>{setUserText(e.target.value)}}></input>
    <button onClick={()=>{shareName()}}>Buscar personaje</button>
    </>
  )
}

export default Input