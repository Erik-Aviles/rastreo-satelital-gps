import React from 'react'
import {TfiClose} from 'react-icons/tfi';
import '../styles/ButtonSalir.css'

const ButtonSalir = ({children}) => {
  return (
    <div className="Continer_button-salir">
    <TfiClose className='TfiClose'   size={20} />
   </div>
  )
}

export default ButtonSalir
