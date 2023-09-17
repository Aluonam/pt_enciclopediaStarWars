import React, { useEffect, useLayoutEffect, useState } from 'react'

import Paginado from '@/components/Paginado.jsx'

const ListadoPersonajes = () => {

    //---useState con un objeto que guarda los datos originales y los datos actuales
    const [dataAPI, setDataAPI] = useState({originData:[],actualData:[]})

    //---useState guarda pág actual que inicie en 1
    const [currentPage, setCurrentPage] = useState(1)


    useLayoutEffect(() => {
        apiCall()
    }, [])
    
    //---lógica para meter los datos en el paginado de 5 en 5
    useEffect(() => {
         handlePaginationData()
    }, [currentPage])


    //lógica paginado (el 5 porque quiero que lo divida de 5 en 5)
    const handlePaginationData = () => {
        const initialDataForPage = (currentPage*5)-5
        const finalDataForPage = currentPage*5
        const newArrayData = dataAPI.originData.slice(initialDataForPage,finalDataForPage)
        setDataAPI({...dataAPI, actualData:newArrayData})
        
    }
    

    const apiCall = async () => {
        try{
        const call = await fetch(`https://swapi.dev/api/people`);
        const data = await call.json()
        // console.log(data.results)
        setDataAPI({originData:data.results, actualData:data.results.slice(0,5)})

        }catch(error){"error detected", error}
    }

    const listado = dataAPI.actualData.map((actualElement)=>{
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
    <Paginado currentPage={currentPage} setCurrentPage={setCurrentPage} totalResults={dataAPI.originData.length}></Paginado>
    </>
    
  )
}

export default ListadoPersonajes