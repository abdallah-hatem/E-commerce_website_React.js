import React from 'react'
import { nanoid } from 'nanoid'

import { useSelector } from 'react-redux';

function Buttons({ renderCategory }) {

    const products = useSelector(state => state.allProducts)


    const categories = [];
    if (products) {

        for (let index = 0; index < products.products.length; index++) {
            if (!categories.includes(products.products[index].category)) {

                categories.push(products.products[index].category)
            }
        }
    }




    return (
        <div className='btns'>
            <button onClick={renderCategory} key={nanoid()}>all</button>
            {products &&

                categories.map(el => <button onClick={renderCategory} key={nanoid()}>{el}</button>)
            }

        </div >
    )
}

export default Buttons