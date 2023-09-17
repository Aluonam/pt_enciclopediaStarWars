import React, { createContext, useState, useEffect } from 'react';

export const ListadoContext = createContext(); 

export const ContextAppProvider = (props) => {


    //---useState con un objeto que guarda los datos originales y los datos actuales
    const [dataAPI, setDataAPI] = useState({originData:[],actualData:[]})


    
    useEffect(() => {
        apiCall()
    }, [])

    
    const apiCall = async () => {
        try{
        const call = await fetch(`https://swapi.dev/api/people`);
        const data = await call.json()
        // console.log(data.results)
        setDataAPI({originData:data.results, actualData:data.results.slice(0,5)})

        }catch(error){"error detected", error}
    }

    //variables que va a compartir el context:
    const valuesProvider = {
        dataAPI,
        setDataAPI,
    };

  return (
    
    <ListadoContext.Provider value={valuesProvider}>
      {props.children} 
    </ListadoContext.Provider>

  );
}