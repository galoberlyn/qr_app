import { useState } from 'react';
import { QrReader } from 'react-qr-reader';

export function ScanQr() {

  const [result, setResult] = useState('No QR Detected');

  return (
    <>
      <QrReader
        onResult={(result: any, error) => {
          if (!!result) {
            setResult(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        constraints={{ facingMode: 'user' }}
      />
      <p>{result}</p>
    </>
  );
}
