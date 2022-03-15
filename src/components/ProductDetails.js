import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../redux/shopping/shoppingActions'


function ProductDetails() {

    const product = useSelector(state => state.product)
    const cart = useSelector(state => state.cartHandle)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     localStorage.setItem("product", JSON.stringify(product))
    // }, [product])
    // const savedProduct = JSON.parse(localStorage.getItem('product'));


    return (
        <div className='single-card-cont'>
            <div className='single-card'>
                <img alt='item' src={product.image}></img>
                <div className='details-cont'>
                    <div className='single-title-price'>
                        <p id='single-title'>{product.title}</p>
                        <p id='single-price'>${product.price}</p>
                    </div>
                    <div className='single-desc'>
                        <p>{product.description}</p>
                    </div>

                    <button onClick={() => dispatch(addToCart(product))} className='single-add'>Add to cart</button>
                    {/* <button onClick={() => dispatch(removeFromCart(product))} className='single-add'>Remove from cart</button> */}
                </div>

            </div>
        </div>
    )
}

export default ProductDetails