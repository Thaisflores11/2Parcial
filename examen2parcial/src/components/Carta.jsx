import React from 'react'
import './Styles/Carta.css'
function Carta(props) {
    const carta=props.carta;
    return (
    <section>
        <div className='banner'>
            <img src={carta.imgbanner} alt="" />
        </div>
        <div className='profile'>
            <img src={carta.imgprofile} alt="" />
            <img src={carta.imgopcion} alt="" />
        </div>
        <div>
            <p>{carta.parrafofinal}</p>
        </div>
      
    </section>
  )
}

export default Carta
