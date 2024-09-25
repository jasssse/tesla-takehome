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
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { ThemeProvider, createTheme, useColorScheme } from '@mui/material/styles';

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});



function App() {
  const [deviceIndex, setDeviceIndex] = useState<DeviceIndex>(initialDeviceIndex)
  const [darkMode, setDarkMode] = useState(false)
  const { mode, setMode } = useColorScheme();

  const theme = createTheme({
    colorSchemes: {
      dark: darkMode,
    },
  });


  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

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
    <ThemeProvider theme={theme}>
      <div className={`${darkMode && "dark"}`}>
        <div className="App overflow-auto bg-[#fafafa] dark:bg-dark_bg ">
          <header className="mx-auto flex text-xl font-semibold justify-between leading-6 p-6">
            <div>
              <a className="text-red-500 font-bold">
                Tesla Energy
              </a>
              <a className='px-2 dark:text-dark_body_text'>
                //
              </a>
              <a className="text-gray-900 dark:text-dark_body_text">
                Site Layout Tool
              </a>
            </div>
            <Button variant="contained" endIcon={<LaunchIcon />} href="https://www.tesla.com/en_ca/megapack" rel="noreferrer" color="error">
              Learn More
            </Button>
            
          </header>

          <div className="flex flex-row  w-full px-2">
            <DeviceList deviceIndex={deviceIndex} updateDeviceCount={updateDeviceIndex}/>
            <MainArea deviceIndex={deviceIndex} />
          </div>
        </div>
        <button 
          className='absolute w-16 h-16 bottom-16 right-16 bg-neutral-800 dark:bg-white rounded-full text-white dark:text-black'
          onClick={toggleDarkMode}
        >
          {darkMode ? <LightModeIcon fontSize='large'/> : <DarkModeIcon fontSize='large'/>}
        </button>
      </div>

    </ThemeProvider>
    
    
  );
}

export default App;
