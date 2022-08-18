import React from 'react';
import Card from '../Card/Card';

const CardGroup = () => {
    const products = [
        {id:1, name: 'laptop Pro', price:350000},
        {id:2, name: 'laptop Crow', price:350000},
        {id:3, name: 'laptop Grow', price:350000},
    ]
    return (
        <div>
            <h2>This is my card</h2>
            <div className='card-group'>
                {
                    products.map(product=> <Card 
                        key={product.id} 
                        product={product}
                        ></Card>)
                }
            </div>
        </div>
    );
};

export default CardGroup;