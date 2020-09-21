import { GenerateQrState } from 'app/containers/GenerateQr/types';
import { ScanQrState } from 'app/containers/ScanQr/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  generateQr?: GenerateQrState;
  scanQr?: ScanQrState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
