import React from 'react';
import "./ProductList.css";
import {useEffect } from "react";
import ProductItem from "./ProductItem"
import { useDispatch, useSelector } from 'react-redux';
import {getProduct} from './../store/product/productSlice';
import { useSearchParams } from "react-router-dom";
import Banner from './Banner';
import Footer from './Footer';
import Nav from './Nav';

const ProductList= () => {
    const [query, setQuery] = useSearchParams();
    const keyword = query.get("q") || ''
    const dispatch = useDispatch();
    const products = useSelector((state)=>state.product.value);

    useEffect(()=>{
        dispatch(getProduct(keyword))
    },[keyword, dispatch])

    return (
        <div className="product-list">
            <Nav />
            <Banner />
            <h2 className="product-list-title">오늘의 스타일</h2>
            <h4 className="product-list-subtitle">브랜드 셋업을 추천드려요</h4>
            <div className="product-item-container">
                {
                    products && products.map(item=>{
                        return <ProductItem key={item.id} item={item} />
                    })
                }
             </div>
            <Footer />
        </div>


    )
}
export default ProductList;