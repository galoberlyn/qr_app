/**
 *
 * GenerateQr
 *
 */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import hotdog from '../../assets/images/hot-dog-icon-fast-food-collection-food-icon-isolated_138676-502.jpg';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectGenerateQr } from './selectors';
import { generateQrSaga } from './saga';
import Button from '@material-ui/core/Button';
import './style.scss';
const QRCode = require('qrcode.react');

interface Props {
  history: any;
}

export function GenerateQr(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: generateQrSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const generateQr = useSelector(selectGenerateQr);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();
  return (
    <>
      <div id="qr">
        <div className="qr">
          <QRCode
            value={props.history.location.state}
            renderAs={'svg'}
            size={200}
            imageSettings={{
              src: hotdog,
              x: null,
              y: null,
              height: 30,
              width: 30,
              excavate: false,
            }}
          />
        </div>
        <br />
        <div style={{ textAlign: 'center' }}>
          <Button
            onClick={() => window.history.back()}
            variant="contained"
            color="primary"
          >
            {' '}
            Back{' '}
          </Button>
        </div>
      </div>
    </>
  );
}
