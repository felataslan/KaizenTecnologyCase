import React from 'react'
import '../style/bottomMenu.scss'
import Kesfet from '../image/kesfet.svg'
import Portal from '../image/PORTAL.png'
import Star from '../image/star.svg'
import 'bootstrap'

const BottomMenu = () => {
    return (
        <div className='Bmenu fixed-bottom ' >
            <div className='container'>
                <div className='row'>
                    <ul>
                        <li id='kesfet' className='col-4 ' >
                            <img className='btn' src={Kesfet} alt='' />
                        </li>
                        <li id='portal' className='col-4' style={{ position: 'relative', top: '-25px' }}>
                            <img className='btn' src={Portal} alt='' />
                        </li>
                        <li id='star' className='col-4' >
                            <img className='btn' src={Star} alt='' />
                        </li>
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default BottomMenu;