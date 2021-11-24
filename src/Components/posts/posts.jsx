import './posts.css'
import React from 'react'
import Data from '../../Assets/data.json'
import { IoEllipsisHorizontal } from "react-icons/io5";

const Posts = () => {

    
    const leituraDeDados = Data['data'].map((postagem) => 
            <div className='postagem'>
                <div className='imagem'>
                      <img src={postagem.files[0].file} alt="" />
                </div>
                    <div className='text_post'>
                        <h3>{postagem.title}</h3>    
                        <span className={`${postagem.type} tipo`}>{postagem.type}</span>
                        <span className='data'>|  {postagem.date}</span>
                         <p>{postagem.description}</p>
                </div>
                <div className='icon'>
                    <IoEllipsisHorizontal className='point'/>
                </div>
            </div>
    )

    return(
        <div className='mural'>
            {leituraDeDados}
        </div>
    )

}

export default Posts