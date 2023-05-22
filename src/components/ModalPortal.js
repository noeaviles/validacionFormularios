import React from 'react'
import ReactDOM from 'react-dom';
import "./Modal.css";
const ModalPortal = ({children,isOpen,closeModal}) => {
    
    const handleModalContainerClick = (e)=>e.stopPropagation();/*Permite que no se cierre el modal al dar click en el */

  return ReactDOM.createPortal(
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
        <div className='modal-container' onClick={handleModalContainerClick}>
            <button className='modal-close' onClick={closeModal}>X</button>
            {children}
        </div>
    </article>,
    document.getElementById("modal")
  )
}

export default ModalPortal