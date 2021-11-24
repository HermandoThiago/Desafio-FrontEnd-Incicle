import '../quadro/quadro.css'
import React from "react";
import Data from '../../Assets/data.json'

const Quadro = () => {

    const cardComercial = Data['data'].slice(0,3).map((card) => 
    
        <div className='card_gestao'>
            <div className='text'>
                <h5>Demonstrativo comercial</h5>
            </div>
            <div className='img_gestao'>
                <div className='card_comercial'><img src={card.files[0].file} alt="" /></div>
                 <div className='card_comercial'><img src={card.files[0].file} alt="" /></div>
                 <div className='card_comercial'><img src={card.files[0].file} alt="" /></div>
                 <div className='card_comercial'><img src={card.files[0].file} alt="" /></div>
            </div>
        </div>

    )

    return(

        <div className='gestao'>
            <h3>Quadro de Gestão à Vista</h3>
            {cardComercial}
        </div>

    )

}

export default Quadro