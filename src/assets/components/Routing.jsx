
import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import TaskList from './TaskList'
import ProductDetail from './ProductDetail'

const Routing = () => {
    return (
        <>
            <BrowserRouter>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/TaskList'>Lista de tareas</Link>
                </nav> 

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/TaskList' element={<TaskList />} />
                    <Route path='/productos/:categoria/:id' element={<ProductDetail/>}/>
                </Routes>

           
            </BrowserRouter>
        </>
    )
}

export default Routing
