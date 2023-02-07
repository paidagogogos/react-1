import React from 'react';
import "./ProductList.css";
import {useState, useEffect } from "react";
import ProductItem from "./ProductItem"
import counterSlice from '../store/counter/counterSlice';

const ProductList= () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        getProductData();
    },[])
    return (
        <div className="product-list">
             <h2 className="product-list-title">상품 목록</h2>
             <div className="product-item-container">
                {
                    products && products.map(item=>{
                        return <ProductItem key={item.id} item={item} />
                    })
                }
             </div>
        </div>


    )
}

export default ProductList;