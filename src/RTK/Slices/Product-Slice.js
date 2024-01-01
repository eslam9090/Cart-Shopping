import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
  "productSlice/getProducts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data, "data");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getCategories = createAsyncThunk(
  "productSlice/getCategories",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("https://fakestoreapi.com/products/categories");
      const data = await res.json();
      console.log(data, "data");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const specificeCategory = createAsyncThunk(
  "productSlice/specificeCategory",
  async (cat, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(
        `https://fakestoreapi.com/products/category/${cat}`
      );
      const data = await res.json();
      console.log(data, "data");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: "productSlice",
  initialState: { products: [], isloading: false, error: null, categories: [] },
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.isloading = true;
      state.error = null;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.isloading = false;
      state.products = action.payload;
      console.log(action.payload, "action");
    },
    [getProducts.rejected]: (state, action) => {
      state.isloading = false;
      state.error = action.payload;
    },

    //////////////Categories Actions//////////////////////////////////

    [getCategories.pending]: (state, action) => {
      state.isloading = true;
      state.error = null;
    },
    [getCategories.fulfilled]: (state, action) => {
      state.isloading = false;
      state.categories = action.payload;
    },
    [getCategories.rejected]: (state, action) => {
      state.isloading = false;
      state.error = action.payload;
    },
    //////////////Specifice Category Actions//////////////////////////////////

    [specificeCategory.pending]: (state, action) => {
      state.isloading = true;
      state.error = null;
    },
    [specificeCategory.fulfilled]: (state, action) => {
      state.isloading = false;
      state.products = action.payload;
    },
    [specificeCategory.rejected]: (state, action) => {
      state.isloading = false;
      state.error = action.payload;
    },
  },
});
// export const {} = bookSlice.actions;
export default productSlice.reducer;

// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const getProducts = createAsyncThunk(
//   "productSlice/getProducts",
//   async (_, thunkAPI) => {
//     try {
//       const res = await fetch("https://jsonplaceholder.typicode.com/users");
//       const data = await res.json();
//       return data;
//     } catch (error) {
//       return error;
//     }
//   }
// );

// const productSlice = createSlice({
//   initialState: { products: [] },
//   name: "productSlice",
//   extraReducers: {
//     [getProducts.fulfilled]: (state, action) => {
//       state.products = action.payload;
//       console.log(action);
//     },
//   },
// });

// export default productSlice.reducer;
