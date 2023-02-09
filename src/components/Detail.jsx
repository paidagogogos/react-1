import React from 'react';
import {useParams} from "react-router-dom"
import './Detail.css'
import { Link } from 'react-router-dom';

const Detail = () => {
    let params = useParams();
    console.log('파라미터 아이디',params.id)
    return (
        <div className='detail-box'>
            <h2 className='detail-title'>상품 상세 페이지</h2>
            <h3 className='detail-description'>선택하신 제품의 아이디는 {params.id}번입니다.</h3>
            <h3 className='detail-description'>아래 표시된 ARS 연결 버튼을 눌러 결제를 완료하세요.</h3>
            <img className='card' src="/img/card.png" alt=""></img>
            <button className='buyBtn'><Link to='/'>ARS 연결하기</Link></button>
        </div>
    );
};

export default Detail;