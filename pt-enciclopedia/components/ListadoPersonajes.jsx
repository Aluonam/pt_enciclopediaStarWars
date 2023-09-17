import React, { useContext, useEffect, useState } from 'react'

import Paginado from '@/components/Paginado.jsx'
import { ListadoContext } from '@/context/ListadoContext'

const ListadoPersonajes = () => {

    //---useState guarda pág actual que inicie en 1
    const [currentPage, setCurrentPage] = useState(1)


    const {dataAPI, setDataAPI} = useContext(ListadoContext)

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
    <Paginado currentPage={currentPage} setCurrentPage={setCurrentPage} totalResults={dataAPI.actualData.length}></Paginado>
    </>
    
  )
}

export default ListadoPersonajes