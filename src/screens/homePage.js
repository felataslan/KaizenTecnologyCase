import React from 'react'
import Menu from '../components/menu.js'
import 'bootstrap'

import Carousel  from '../components/carousel.js'
import BottomMenu from '../components/bottomMenu.js'


const HomePage = () => {
    
    return (
        <div className='homepage'>
            <Menu />
            
            <Carousel />
            <BottomMenu />
        </div>
    )
}

export default HomePage