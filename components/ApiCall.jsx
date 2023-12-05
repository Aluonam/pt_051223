import React, { useState } from 'react'
import ModalANT from './ModalANT';

const ApiCall = () => {

    const [dataAPI, setDataAPI] = useState([])

    const apiConsume = async ()=>{
        try{
            const url = await fetch(`https://reqres.in/api/users?page=2`);
            const data = await url.json();
            console.log(data.data)
            setDataAPI(data.data)
        }catch(error){error,"error detected"}
    }

  return (
    <>
    <ModalANT apiConsume={apiConsume} dataAPI={dataAPI}></ModalANT>
    </>
  )
}

export default ApiCall