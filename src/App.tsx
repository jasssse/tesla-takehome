import React, { useState } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import { MainArea } from './components/mainArea';
import { DeviceIndex, calculateRequiredTransformers, initialDeviceIndex } from './models/device';

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
      <header className="bg-slate-400">
        <h1>Site Layout Tool</h1>
      </header>
      <div className="flex overflow-auto">
        <div>
          <h1>Device Index</h1>
          <ul>
            {Object.entries(deviceIndex).map(([id, count]) => (
              <li key={id}>
                Device {id}: {count}
              </li>
            ))}
          </ul>
          <div className='flex flex-col'>
            <button onClick={() => updateDeviceIndex(1, deviceIndex[1] + 1)}>Increase device 1</button>
            <button onClick={() => updateDeviceIndex(1, deviceIndex[1] - 1)}>Decrease device 1</button>

            <button onClick={() => updateDeviceIndex(2, deviceIndex[2] + 1)}>Increase device 2</button>
            <button onClick={() => updateDeviceIndex(2, deviceIndex[2] - 1)}>Decrease device 2</button>

            <button onClick={() => updateDeviceIndex(3, deviceIndex[3] + 1)}>Increase device 3</button>
            <button onClick={() => updateDeviceIndex(3, deviceIndex[3] - 1)}>Decrease device 3</button>

            <button onClick={() => updateDeviceIndex(4, deviceIndex[4] + 1)}>Increase device 4</button>
            <button onClick={() => updateDeviceIndex(4, deviceIndex[4] - 1)}>Decrease device 4</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
