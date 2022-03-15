import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { selectedProduct, setProducts, addToCart } from '../redux/shopping/shoppingActions'

function Products({ category, styles }) {

    const products = useSelector(state => state.allProducts)
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cartHandle)
    console.log("cart", cart);


    useEffect(() => {

        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => dispatch(setProducts(json)))
    }, [])


    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart])


    return (

        <div style={styles} className='card-cont'>
            {


                category === "all" ?

                    products.products.map(el =>

                        <div key={el.id} className='card'>
                            <Link to="/product">
                                <img onClick={() => dispatch(selectedProduct(el))} alt='item' src={el.image}></img>
                            </Link>
                            <div className='title-price'>
                                <p id='title'>{el.title}</p>
                                <p id='price'>${el.price}</p>
                            </div>
                            <div className='desc'>
                                <p>{el.description}</p>
                            </div>

                            <button onClick={() => dispatch(addToCart(el))} className='add'>Add to cart</button>

                        </div>
                    )

                    :

                    products.products.map(el => el.category === category ?

                        < div key={el.id} className='card' >
                            <Link to="/product">
                                <img onClick={() => dispatch(selectedProduct(el))} alt='item' src={el.image}></img>
                            </Link>
                            <div className='title-price'>
                                <p id='title'>{el.title}</p>
                                <p id='price'>${el.price}</p>
                            </div>
                            <div className='desc'>
                                <p>{el.description}</p>
                            </div>

                            <button onClick={() => dispatch(addToCart(el))} className='add'>Add to cart</button>

                        </div> : ""
                    )

            }

        </div>
    )
}


export default Products