import { useState } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import { MainArea } from './components/mainArea';
import { DeviceIndex, initialDeviceIndex } from './models/device';
import { calculateRequiredTransformers } from './util/calculations';
import { DeviceList } from './components/deviceList';
import Button from '@mui/material/Button';
import LaunchIcon from '@mui/icons-material/Launch';

function App() {
  const [deviceIndex, setDeviceIndex] = useState<DeviceIndex>(initialDeviceIndex)

  const updateDeviceIndex = (id: number, quantity: number) => {
    setDeviceIndex((prevIndex) => {
      const updatedIndex = {
        ...prevIndex,
        [id]: quantity > 0 ? quantity : 0
      };

      // Calculate the transformer count
      const requiredTransformers = calculateRequiredTransformers(updatedIndex)
      updatedIndex[0] = requiredTransformers

      return updatedIndex
    });
  };


  return (
    <div className="App">
      <header className="mx-auto flex text-xl font-semibold justify-between leading-6 p-6">
        <div>
          <a className="text-red-500 font-bol">
            Tesla Energy
          </a>
          <a className='px-2'>
            //
          </a>
          <a className="text-gray-900">
            Site Layout Tool
          </a>
        </div>
        <Button variant="contained" endIcon={<LaunchIcon />} href="https://www.tesla.com/en_ca/megapack" rel="noreferrer" color="error">
          Learn More
        </Button>
        
      </header>

      <div className="flex flex-row overflow-auto w-full px-2">
        <DeviceList deviceIndex={deviceIndex} updateDeviceCount={updateDeviceIndex}/>
        <MainArea deviceIndex={deviceIndex} />
      </div>
    </div>
  );
}

export default App;
