import React, { useEffect, useState } from 'react'
import Logo from '../image/Daha_Daha.svg'
import "bootstrap/dist/css/bootstrap.css";
import '../style/menu.scss'
import { Link } from 'react-router-dom'
import axios from 'axios';
import 'bootstrap'

const Menu = () => {

    const [icon, setIcon] = useState([])
    useEffect(() => {
        axios.get('https://api.extrazone.com/tags/list', {
            headers: {
                'X-Country-Id': 'TR',
                'X-Language-Id': 'TR'
            }

        }).then((result) => {
            const iconArray = []
            console.log(result)

            result.data.map((item) => {
                iconArray.push(item)
                return iconArray
            })
            setIcon(iconArray)

        })
    }, [])

    return (
        <div>
            <nav className='menu container'>
                <ul>
                    <li><img src={Logo} alt='Logo bulunamadı' /></li>
                    <li>
                        <Link to={'/'} id='login' type='button' >
                            <button className='btn btn-danger'>Giriş Yap</button>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'} className='icon'></Link>
                    </li>

                </ul>
            </nav>

            <nav className='navbar'>
                <ul className='pl-3'>
                    {
                        icon.map((result, index) => {
                            return (
                                <li key={result.Id}>
                                    <a href='/' style={{ border: '1px solid #dddddd', paddingLeft: '5px' }} className='btn'>
                                        <img id='search' src={result.IconUrl} alt='icon bulunamadı' />{result.Name}</a>
                                </li>
                            )
                        })
                    }

                    
                </ul>
            </nav>




        </div>
    )
}

export default Menu