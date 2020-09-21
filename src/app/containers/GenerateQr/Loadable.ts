/**
 *
 * Asynchronously loads the component for GenerateQr
 *
 */

import { lazyLoad } from 'utils/loadable';

export const GenerateQr = lazyLoad(
  () => import('./index'),
  module => module.GenerateQr,
);
