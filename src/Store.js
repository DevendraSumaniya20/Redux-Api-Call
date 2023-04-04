import {configureStore} from '@reduxjs/toolkit';
import CallApiSlice from './ApiSlice';

const store = configureStore({
  reducer: {
    CallApi: CallApiSlice,
  },
});

export default store;
