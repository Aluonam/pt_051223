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

    const dataForModal = dataAPI.map((element)=> {
        return(
            <>
            <h4>{element.email}</h4>
            </>
        )
    })

  return (
    <>
    <ModalANT apiConsume={apiConsume} ></ModalANT>
    </>
  )
}

export default ApiCall