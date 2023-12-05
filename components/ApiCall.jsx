import React, { useState } from 'react'

const ApiCall = () => {

    const [dataAPI, setDataAPI] = useState([])

    const apiConsume = async ()=>{
        try{
            const url = await fetch(`https://reqres.in/api/users?page=2`);
            const data = await url.json();
            console.log(data.data)
        }catch(error){error,"error detected"}
    }
    apiConsume()
  return (
    <>
    modal
    </>
  )
}

export default ApiCall