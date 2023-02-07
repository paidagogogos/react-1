import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProduct = createAsyncThunk(
    "GET_PRODUCT",
    async () => {
        try {
            const res = await axios.get('http://localhost:3004/productList')
            return res.data;
        } catch(err) {
            console.log(err);
        }
    }
);

const productSlice = createSlice({
    name: 'product',
    initialState: {
        value: []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getProduct.fulfilled, (state, action) => {
            state.value = action.payload;
        })
    }
})

export default productSlice.reducer