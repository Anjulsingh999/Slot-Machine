import React from 'react'
import Navbar from './Navbar'
import './index.css'
import Machine from './Machine'


const App=()=>{
    return(
        <>
            <div className='container'>
            <Navbar/>
            <Machine/>
            </div>
        </>
    )
}

export default App;