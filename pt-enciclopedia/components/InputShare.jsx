import React, {useState, useContext} from 'react'

import { ListadoContext } from '@/context/ListadoContext'

const InputShare = () => {

    const [userText, setUserText] = useState()

    const {dataAPI, setDataAPI} = useContext(ListadoContext)
    

    const shareName = ()=>{

      const characterName = dataAPI.originData
      setDataAPI({...dataAPI, actualData:characterName.filter((elementoActual)=>elementoActual.name.toLowerCase().includes(userText.toLowerCase()))})

    }

    
    

  return (
    <>
    <input type='text' onChange={(e)=>{setUserText(e.target.value)}}></input>
    <button onClick={()=>{shareName()}}>Buscar personaje</button>
    </>
  )
}

export default InputShare