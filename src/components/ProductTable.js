import React, {useState}  from 'react'
import ProductRow from './ProductRow'

function ProductTable(props) {
    const {products} = props
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((elem, index) => {
                        return <ProductRow key={index} product={elem}/>
                    })
                }
            </tbody>
            
        </table>
    )
}

export default ProductTable
