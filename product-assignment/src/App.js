/* 
Given a list of products (as an array of objects, as seen in productsData.js)
render a <Product /> component (which you'll also need to create) for each
product in the list.

Make sure to use the array's `.map()` method to create these components, and 
don't forget to pass a `key` prop to it to avoid the warning.
*/

import React from "react"
import productsData from "./vschoolProducts"
import Product from "./Product"

function App() {
 //   const products = productsData.map(product => <Product key={product.id} {...product} />)
    const products = productsData.map(product => <Product key={product.id} product={product} />)
  return (
    <div>
        {products}
    </div>
  )
}

export default App