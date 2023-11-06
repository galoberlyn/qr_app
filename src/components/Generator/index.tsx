
import { useState } from 'react';
import {QRCodeSVG} from 'qrcode.react';
import Form from 'react-bootstrap/Form';
import { Button, Container } from 'react-bootstrap';

export function GenerateQr() {

  const [qrValue, setQrValue] = useState('');
  const [isGenerate, setGenerate] = useState(false);

  const handleGenerate = () => {
    setGenerate(true);
  }

  const handleChange = (val: string) => {
    setQrValue(val);
    setGenerate(false);
  }

  return (
    <Container>
      <div id="qr">
        { isGenerate && (
          <div className="qr">
            <QRCodeSVG value={qrValue} size={256} />
          </div>
        )}
        <br />
      </div>
      <div style={{ display: 'flex'}}>
        <Form.Control value={qrValue} onChange={e => handleChange(e.target.value)}/>&nbsp;
        <Button onClick={handleGenerate}>Generate!</Button>
      </div>
    </Container>
  );
}
