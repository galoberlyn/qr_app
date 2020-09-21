import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.scanQr || initialState;

export const selectScanQr = createSelector(
  [selectDomain],
  scanQrState => scanQrState,
);
