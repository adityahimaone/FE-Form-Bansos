/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialStatePreview } from '@/utils/InitialValues';
import { IInitialValuesFormData } from '@/utils/Types';

import { IInitialStatePreview, IInitialFormData } from './types';

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
