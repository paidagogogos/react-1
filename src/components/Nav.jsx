import React from 'react';
import "./Nav.css";
import { useSelector ,useDispatch } from "react-redux";
import {Link,useNavigate} from 'react-router-dom';
import { logout } from './../store/user/userSlice';
const Nav = () => {    
    const cart=useSelector(state=>state.cart)
    const user= useSelector(state=>state.user.value)
    const dispatch = useDispatch();
    const navigate= useNavigate();
    const onSearch = (e) => {
        if(e.key==='Enter'){
            navigate(`?q=${e.target.value}`)
        }
    }
    return (   
        <nav className="nav">
            <div className='box'>
                <h1 className='nav-title'><Link to='/'>Charted</Link></h1>
            </div>
            <div className='search-box'>
                <input type="text" placeholder='원하는 상품을 검색해보세요'  onKeyUp={onSearch} />
            </div>
            <div className='user-box'>
                <span>
                    <Link to='/cart'>
                    <i className="fas fa-shopping-cart">
                        <div className='cart-amount'>{cart.length}</div>
                    </i>
                    </Link>
                </span>
                    {
                         user ? 
                         <i className="fas fa-user" onClick={()=>{dispatch(logout(false))}}></i> :
                         <i className="fas fa-user" onClick={()=>navigate('/login')}></i> 
                    }
            </div>
        </nav>
    );
};

export default Nav;