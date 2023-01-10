import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Carousel = () => {
    const [product,setProduct]=useState([])

    // let description=document.querySelector('#description')
    useEffect(()=>{
        axios.get('https://api.extrazone.com/promotions/list?Channel=PWA',{
            headers: {
                'X-Country-Id': 'TR',
                'X-Language-Id': 'TR'
              }

        }).then((result)=>{
            const productArray=[]
            console.log(result)

            result.data.map((item)=>{

                productArray.push(item)
                console.log(item.Title)
                localStorage.setItem('id',item.Id)
                // description.innerHTML=item.Title
                return productArray
            })
            setProduct(productArray)

        })
    },[//description
])

    

    return (
        <div className='container' >
            <div id="carouselExample" className="carousel slide row ">
                <div className="carousel-inner col-12 " >
                    {
                        product.map((result, index) => {
                            
                            return (
                                <div   key={result.Id} className="carousel-item active size " style={{backgroundColor: result.promotionCardColor}}>
                                   <Link to={'/promosyon'} >
                                   <div key={result.Id} >
                                        <img src={result.ImageUrl} className="d-block w-100"  alt="Ürün bulunamadı" />
                                        
                                        {/* <p id='description'></p> */}
                                        <p className="p1"><span style={{color: '#000000'}}><strong>Coca-Cola ve Sprite 2.5L kapaklarında BOŞ YOK!</strong></span></p>
                                        <h2 style={{ color: 'red', textAlign: 'center'}}>Daha Daha</h2>
                                    </div>
                                   </Link>
                                </div>
                            )
                        })
                    }

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel