import { createSlice } from '@reduxjs/toolkit'  
import Swal from 'sweetalert2';
//슬라이스 - 툴킷 세팅을 쉽게 해주는 방법  리듀서와 액션크리에이터를 합쳐서 세팅 해놓은것 

const initialState = [];
const cartSlice  = createSlice({
  name: 'cart',
  initialState,
  reducers: {
        addCart : (state,action) => {
            const equalItem = state.findIndex(item => item.id === action.payload.id);
            if(equalItem >=0 ){
              Swal.fire({
                icon: 'error',
                title: '장바구니에 이미 동일한 상품이 있어요',
                text: '동일한 상품은 추가할 수 없어요'
              })
            }else{
                state = state.push(action.payload) ;
                Swal.fire(
                  '장바구니에 추가했어요',
                  '지금 바로 장바구니를 확인해보세요!',
                  'success'
                )
             }
        },
        deleteCart : (state,action) => {
          // console.log(action.payload)
          const num = state.findIndex((ele)=>ele.id ===action.payload[0].id);
          state = state.splice(num,1);
        },
    },

})



export const {addCart,deleteCart} = cartSlice.actions
export default cartSlice.reducer