import { useState } from 'react';
import './App.css';
import { GenerateQr } from './components/Generator';
import { ScanQr } from './components/Scanner';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {isMobile} from 'react-device-detect';

function App() {

  const [key, setKey] = useState('generate');

  return (
    <div className="App">
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
        defaultValue={'generate'}
        activeKey={key}
        onSelect={(k: any) => setKey(k)}
      >
        <Tab eventKey="generate" title="Generate QR">
          <GenerateQr />
        </Tab>
        <Tab eventKey="scan" title="Scan QR">
          <div style={{ width: isMobile ? '100%' : '500px', margin: 'auto'}}>
            <ScanQr />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
