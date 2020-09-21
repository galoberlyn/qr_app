import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.generateQr || initialState;

export const selectGenerateQr = createSelector(
  [selectDomain],
  generateQrState => generateQrState,
);
