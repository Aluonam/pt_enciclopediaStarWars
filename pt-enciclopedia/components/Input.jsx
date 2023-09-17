import React from 'react'

const Input = () => {

    const [userText, setUserText] = useState()

  return (
    <>
    <input type='text' onChange={(e)=>{setUserText(e.target.value)}}></input>
    </>
  )
}

export default Input