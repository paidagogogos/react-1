import React from 'react';
import {useParams} from "react-router-dom"
import './Detail.css'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Detail = () => {
    let params = useParams();
    const navigate= useNavigate();
    const swal = () => {
        Swal.fire(
            '결제 완료',
            '구매해주셔서 감사합니다!',
            'success'
          )
    }
    console.log('파라미터 아이디',params.id)
    return (
        <div className='detail-box'>
            <h2 className='detail-title'>상품 상세 페이지</h2>
            <h3 className='detail-description'>선택하신 제품의 아이디는 {params.id}번입니다.</h3>
            <h3 className='detail-description'>아래 표시된 ARS 연결 버튼을 눌러 결제를 완료하세요.</h3>
            <img className='card' src="/img/card.png" alt=""></img>
            <button className='buyBtn' onClick={() => {
                swal();
                setTimeout(() => navigate('/'), 1000);
            }}>ARS 연결하기</button>
        </div>
    );
};

export default Detail;