import React from 'react';
import "./ProductList.css";
import { useEffect } from "react";
import ProductItem from "./ProductItem"
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../store/product/productSlice';

const ProductList= () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.value)


    console.log(products)   


    useEffect(()=>{
        dispatch(getProduct());
    },[])

    return (
        <div className="product-list">
             <h2 className="product-list-title">상품 목록</h2>
             <div className="product-item-container">
                {
                        products.map(item=>{
                            return <ProductItem key={item.id} item={item} />
                        })
                }
             </div>
        </div>


    )
}

export default ProductList;