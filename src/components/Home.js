import React from 'react'

function Home() {
    return (
        <>
            <img alt="home background" className='home-img' src='https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'></img>
            <div className='text-img'>
                <p id="top" >CHECK OUT <span>THE NEW TRENDS</span></p>
                <p id="bottom">NEW SEASON ARRIVALS </p>
            </div>
            <h1 className='latest-product'>Latest products</h1>
        </>
    )
}

export default Home