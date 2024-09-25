import Card from '@mui/material/Card';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { DeviceIndex } from "../models/device"
import { DeviceCard } from "./deviceCard";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Typography from '@mui/material/Typography';
import { DeviceGuide } from '../util/deviceGuide';

interface DeviceListProps {
    deviceIndex: DeviceIndex;
    updateDeviceCount: (id: number, newCount: number) => void;
}

export const DeviceList = ({deviceIndex, updateDeviceCount}: DeviceListProps) => {
    return(
        <Card className='m-2 p-4 w-4/12'>
            <div className='flex flex-col items-start'>
                <h1 className="text-xl font-semibold mb-4">
                    Device Configuration
                </h1>
                {Object.entries(deviceIndex).reverse().map(([idString, count]) => {
                    const id = parseInt(idString)

                    return (
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ArrowDropDownIcon />}
                            >
                                <Typography>{DeviceGuide.get(id)!.name}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <DeviceCard 
                                    deviceId={id} 
                                    count={count} 
                                    onCountChange={(count: number) =>
                                        updateDeviceCount(id, count)
                                    }
                                />
                            </AccordionDetails>
                        </Accordion>
                    )
                })}
            </div>
            {/* <div className="flex flex-col items-start">
                <h1 className='text-lg font-bold'>Devices</h1>
                {Object.entries(deviceIndex).map(([idString, count]) => {
                    const id = parseInt(idString)

                    return (
                        <DeviceCard 
                            key={id}
                            deviceId={id} 
                            count={count} 
                            onCountChange={(count: number) =>
                                updateDeviceCount(id, count)
                            }
                        />
                    )
                })}
            </div>  */}
        </Card>
        
    )
}