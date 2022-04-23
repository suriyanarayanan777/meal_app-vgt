import React from 'react'
import {useNavigate} from "react-router-dom"
import { useState } from 'react'
import Purchase from './purchase'

const CheckoutPage = () => {
    const [shipaddress, setshipaddress] = useState('')
    const [phno, setphno] = useState('')
    const navigate = useNavigate();

  return (
    <div>
        <input type='text' placeholder='Enter shipping address' onChange={(e)=>setshipaddress(e.target.value)}/>
        <input type='number' placeholder='Enter phone no'onChange={(e)=>setphno(e.target.value)}/>  
      
      <h2>Ship address: {shipaddress}</h2>
      <h3>Moblie no:  {phno}</h3>
      <button className="cart_button" onClick={()=> navigate("/purchase")}>Confirm Purchase</button>
    </div>
  )
}

export default CheckoutPage

//(<Purchase shipaddress={shipaddress} phno={phno}/>)