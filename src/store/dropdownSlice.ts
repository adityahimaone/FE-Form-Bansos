/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { IProvince, IInitialStateProvince } from './types';

const InitialStateProvince: IInitialStateProvince = {
  loading: false,
  data: {
    provinces: [],
  },
  error: null,
};

export const getProvinces = createAsyncThunk('get/fetchProvinces', async () => {
  const response = await axios.get('http://www.emsifa.com/api-wilayah-indonesia/api/provinces.json');
  return response.data;
});

export const dropdownSlice = createSlice({
  name: 'dropdown',
  initialState: InitialStateProvince,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getProvinces.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProvinces.fulfilled, (state, action: PayloadAction<IProvince[]>) => {
        state.loading = false;
        state.data.provinces = action.payload;
        state.error = null;
      })
      .addCase(getProvinces.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default dropdownSlice.reducer;
