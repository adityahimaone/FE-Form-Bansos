/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { IDropdown, IInitialStateDropdown } from './types';

import TransformDataReactSelect from '@/utils/transform-react-select';

const InitialStateProvince: IInitialStateDropdown = {
  loading: false,
  data: {
    provinces: [],
    regencies: [],
    districts: [],
    villages: [],
  },
  error: null,
};

export const getProvinces = createAsyncThunk('get/fetchProvinces', async () => {
  const response = await axios.get('http://www.emsifa.com/api-wilayah-indonesia/api/provinces.json');
  return response.data;
});

export const getRegencies = createAsyncThunk('get/fetchRegencies', async (provinceId: string) => {
  const response = await axios.get(`http://www.emsifa.com/api-wilayah-indonesia/api/regencies/${provinceId}.json`);
  return response.data;
});

export const getDistricts = createAsyncThunk('get/fetchDistricts', async (regencyId: string) => {
  const response = await axios.get(`http://www.emsifa.com/api-wilayah-indonesia/api/districts/${regencyId}.json`);
  return response.data;
});

export const getVillages = createAsyncThunk('get/fetchVillages', async (villagesId: string) => {
  const response = await axios.get(`http://www.emsifa.com/api-wilayah-indonesia/api/villages/${villagesId}.json`);
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
      .addCase(getProvinces.fulfilled, (state, action: PayloadAction<IDropdown[]>) => {
        state.loading = false;
        state.data.provinces = TransformDataReactSelect(action.payload);
        state.error = null;
      })
      .addCase(getProvinces.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      })
      .addCase(getRegencies.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRegencies.fulfilled, (state, action: PayloadAction<IDropdown[]>) => {
        state.loading = false;
        state.data.regencies = TransformDataReactSelect(action.payload);
        state.error = null;
      })
      .addCase(getRegencies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      })
      .addCase(getDistricts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDistricts.fulfilled, (state, action: PayloadAction<IDropdown[]>) => {
        state.loading = false;
        state.data.districts = TransformDataReactSelect(action.payload);
        state.error = null;
      })
      .addCase(getDistricts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      })
      .addCase(getVillages.pending, (state) => {
        state.loading = true;
      })
      .addCase(getVillages.fulfilled, (state, action: PayloadAction<IDropdown[]>) => {
        state.loading = false;
        state.data.villages = TransformDataReactSelect(action.payload);
        state.error = null;
      })
      .addCase(getVillages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default dropdownSlice.reducer;
