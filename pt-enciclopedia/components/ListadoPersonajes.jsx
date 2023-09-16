import React, { useEffect, useState } from 'react'

const ListadoPersonajes = () => {

    const [dataAPI, setDataAPI] = useState()

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

    
  return (
    <div>ListadoPersonajes</div>
  )
}

export default ListadoPersonajes