import React, { createContext, useState } from 'react';

export const ListadoContext = createContext(); 

export const ContextAppProvider = (props) => {

  const valuesProvider = {
    
  };

  return (
    
    <ListadoContext.Provider value={valuesProvider}>
      {props.children} 
    </ListadoContext.Provider>
    
  );
}