import axios from "axios";
import { createSlice ,createAsyncThunk } from '@reduxjs/toolkit';

export const getProduct = createAsyncThunk(
    "GET_PRODUCT",
    async(keyword) => {
        try{
            // `https://my-json-server.typicode.com/paidagogogos/react-1/productList?q=${keyword}`
            // `/data/db.json/productList?q=${keyword}`	
            // `/db.json/productList?q=${keyword}`
            const res = await axios.get(`https://my-json-server.typicode.com/paidagogogos/react-1/productList?q=${keyword}`);
            return res.data;
        }catch(err){
            console.log(err)
        }
    }
)
const productSlice = createSlice({
    name: 'product',
    initialState:{
        value:[]
    },
    reducers:{
    },
    extraReducers: (builder) => {
        builder.addCase(getProduct.fulfilled,(state,action)=>{
            state.value=action.payload
        })
    }

})
export default productSlice.reducer