import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  isLoading: null,
  error: null,
};

export const CallApiSlice = createSlice({
  name: 'CallApi',
  initialState,
  reducers: {
    Started: state => {
      (state.isLoading = true), (state.error = null);
    },

    Success: (state, action) => {
      (state.data = action.payload), (state.isLoading = false);
    },

    Failed: (state, action) => {
      (state.error = action.payload), (state.isLoading = false);
    },
  },
});

export const {Started, Success, Failed} = CallApiSlice.actions;

export const CallApiData = () => async dispatch => {
  dispatch(Started());
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    dispatch(Success(response.data));
  } catch (error) {
    dispatch(Failed(error.message));
  }
};

export const selectedSuccess = state => state.CallApi;

export default CallApiSlice.reducer;
