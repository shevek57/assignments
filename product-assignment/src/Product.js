import React from 'react'

// function Product({ name, price, description }) {
//     return (
//         <div className="product">
//             <h3>Name: {name}</h3>
//             <h3>Price: ${price}</h3>
//             <h3>Description: {description}</h3>
//             <hr />
//         </div>
//     )
// }

function Product (props) {
    return (
        <div>
                        <h2>{props.product.name}</h2>
            <p>{props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })} - {props.product.description}</p>
        </div>
    )
}

export default Product