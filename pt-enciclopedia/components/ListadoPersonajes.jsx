import React, { useEffect, useState } from 'react'

import Paginado from '@/components/Paginado.jsx'

const ListadoPersonajes = () => {

    const [dataAPI, setDataAPI] = useState([])

    useEffect(() => {
      llamadaApi()
    }, [])
    

    const llamadaApi = async () => {
        try{
        const call = await fetch(`https://swapi.dev/api/people`);
        const data = await call.json()
        // console.log(data.results)
        setDataAPI(data.results)

        }catch(error){"error detected", error}
    }

    const listado = dataAPI.map((actualElement)=>{
        return(
            <ul>
                <li>{actualElement.name}</li>
            </ul>

        )
    })


  return (
    <>
    <div>ListadoPersonajes</div>
    {listado}
    <Paginado></Paginado>
    </>
    
  )
}

export default ListadoPersonajes