/**
 *
 * Asynchronously loads the component for ScanQr
 *
 */

import { lazyLoad } from 'utils/loadable';

export const ScanQr = lazyLoad(
  () => import('./index'),
  module => module.ScanQr,
);
