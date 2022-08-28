/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IInitialStatePreview, IInitialFormData } from './types';

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
    setPreviewData: (state, action: PayloadAction<IInitialFormData>) => {
      state.data = action.payload;
    },
  },
});

export const { setPreviewData } = previewSlice.actions;
export default previewSlice.reducer;
