import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectedProduct, addToCart, removeFromCart, clearCart } from '../redux/shopping/shoppingActions'


function Cart({ styles }) {


    const cart = useSelector(state => state.cartHandle)
    const dispatch = useDispatch()


    return (

        cart.cart.length > 0 ?

            <div style={styles} className='cart-wrapper'>

                <div className='checkout'>
                    <p id='title'>checkout</p>

                    {cart.cart.map(el =>
                        <div key={el.id} id='items'>
                            <Link to="/product">
                                <img onClick={() => dispatch(selectedProduct(el))} alt='item' src={el.image}></img>
                            </Link>

                            <div className='add-minus-cont'>
                                <p id='qty'> </p>
                                <button id='add' ><i className="fa-solid fa-plus"></i></button>
                                <button id='sub' onClick={() => dispatch(removeFromCart(el))}><i className="fa-solid fa-minus"></i></button>
                                <p>${el.price}</p>
                            </div>
                        </div>
                    )}

                    <p id='total'>Total = ${cart.totalPrice}</p>
                    <button id='clear-cart' onClick={() => dispatch(clearCart())}>Clear cart</button>

                </div>
            </div>

            :

            <h1 style={{ textAlign: "center" }}>No added products!</h1>

    )
}

export default Cart