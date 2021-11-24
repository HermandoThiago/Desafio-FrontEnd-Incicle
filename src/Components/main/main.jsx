import './main.css'
import React from 'react'
import Container from '../container/container.jsx'
import Descricao from '../descricao/desc'
import Quadro from '../quadro/quadro.jsx'
import Posts from '../posts/posts.jsx' 
import { BiPlusMedical } from "react-icons/bi"; 
import Header from '../header/header.jsx'

const Body = () => {

    return(
        <>
            <Header />
            <main>
                <Container>
                    <section className='blog'>
                        <div className='posts'>
                            <div className='title'>
                                <h2>Endomarketing</h2>
                            </div>
                            <div className='botoes'>
                                <select>
                                    <option disable selected value>TIPO</option>
                                    <option value="release">Release</option>
                                    <option value="event">Event</option>
                                </select>
                                <button className='criar'>CRIAR <BiPlusMedical className='plus'/></button>
                            </div>
                            <Posts />
                        </div>
                        <div className='info'>
                            <Descricao />
                            <Quadro />
                        </div>
                    </section>
                </Container>
            </main>
        </>

    )

}

export default Body