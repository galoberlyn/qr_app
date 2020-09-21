/**
 *
 * ScanQr
 *
 */

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectScanQr } from './selectors';
import { scanQrSaga } from './saga';
import './style.scss';
import QrReader from 'react-qr-reader';

interface Props {}

export function ScanQr(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: scanQrSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const scanQr = useSelector(selectScanQr);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();
  const [result, setResult] = useState('No Result');

  const handleScan = data => {
    if (data) {
      setResult(data);
      alert(data);
    }
  };
  const handleError = err => {
    console.error(err);
  };

  return (
    <>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      <p>{result}</p>
    </>
  );
}
