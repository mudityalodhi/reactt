import React from 'react'

const Product = ({ title, brand, price }) => {
    // const obj = {
    //     title: "iQOO Neo 10R",
    //     brand: "iQOO",
    //     price: 24999
    // }
    return (
        <div>
            <h2>Mobile Name : {title}</h2>
            <h3>Mobile Brand : {brand}</h3>
            <h3>Mobile Price : {price}</h3>
        </div>
    )
}

export default Product