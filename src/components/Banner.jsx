import React from 'react';
import styled from 'styled-components';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Banner = () => {
    const pagination = {
        el:'.pagination-box',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };

    return (
        <BannerSlider>
            <Swiper
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={pagination}
            navigation={{
                nextEl: '.next',
                prevEl: '.prev',
            }}
            modules={[Autoplay, Pagination, Navigation]}
            >
                <SwiperSlide><img src="./img/slide/slide01.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="./img/slide/slide02.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="./img/slide/slide03.png" alt="" /></SwiperSlide>
                <div className='pagination-box'></div>
            </Swiper>
        </BannerSlider>
    );
};
 
export default Banner;

const BannerSlider = styled.div`
    margin-top: -50px;
    width: 100vw;

    & img {
        width: 100vw;
        height: 19.47vw;
    }

    & .pagination-box{
        display: flex;
        justify-content: center;
        margin-bottom: 70px;
    }

    & .pagination-box .swiper-pagination-bullet {
        width: 5px;
        height: 5px;
        opacity: 0.9;
        background-color : #fff;
        border: 2px solid transparent;
        font-size: 0px;
        margin-top: -30px;
        z-index: 50000;
        transition: all 0.2s;
    }

    & .pagination-box .swiper-pagination-bullet.swiper-pagination-bullet-active {
        width: 20px;
        height: 5px;
        border-radius: 10px;
        border: 2px solid transparent;
        background-color: #1d7ecc;
    }
`