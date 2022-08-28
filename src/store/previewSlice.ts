/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import { IInitialStatePreview } from './types';

import { initialStatePreview } from '@/utils/InitialValues';
import { IInitialValuesFormData } from '@/utils/Types';

const InitialStatePreview: IInitialStatePreview = {
  loading: false,
  data: initialStatePreview,
  error: null,
};

const previewSlice = createSlice({
  name: 'preview',
  initialState: InitialStatePreview,
  reducers: {
    setPreviewData: (state, action: PayloadAction<IInitialValuesFormData>) => {
      state.data.name = action.payload.name;
      state.data.nik = parseInt(action.payload.nik, 10);
      state.data.no_kk = parseInt(action.payload.no_kk, 10);
      state.data.img_ktp = action.payload.img_ktp;
      state.data.img_kk = action.payload.img_kk;
      state.data.age = parseInt(action.payload.age, 10);
      state.data.province = action.payload.province;
      state.data.regency = action.payload.regency;
      state.data.district = action.payload.district;
      state.data.village = action.payload.village;
      state.data.address = action.payload.address;
      state.data.rt = parseInt(action.payload.rt, 10);
      state.data.rw = parseInt(action.payload.rw, 10);
      state.data.income_before_pandemic = parseInt(action.payload.income_before_pandemic, 10);
      state.data.income_after_pandemic = parseInt(action.payload.income_after_pandemic, 10);
      state.data.reason = action.payload.reason;
    },
  },
});

export const { setPreviewData } = previewSlice.actions;
export default previewSlice.reducer;
