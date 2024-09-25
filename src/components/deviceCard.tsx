import TextField from '@mui/material/TextField';
import { DeviceGuide } from "../util/deviceGuide";


interface DeviceSelectorProps {
    deviceId: number;
    count: number;
    onCountChange: (count: number) => void;
}

export const DeviceCard = ({ deviceId, count, onCountChange }:DeviceSelectorProps) => {
    const device = DeviceGuide.get(deviceId)!
    const formattedCost = device.cost.toLocaleString("en-US", {style:"currency", currency:"USD"});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        const newValue = isNaN(value) || value < 0 ? 0 : value;
        onCountChange(newValue);
    };

    return (
        <div className="flex flex-col items-start space-y-4">
            <div className="w-full h-40 overflow-hidden flex items-center justify-center rounded-md">
                <img src={device.imagePath} alt={'image'} className="object-cover rounded-md" />
            </div>

            <div className="flex flex-col items-start text-sm">
                <p>
                    <b>Cost:</b> {formattedCost}
                </p>
                <p>
                    <b>Energy:</b> {device.energy} MWh
                </p>
                <p>
                    <b>Dimensions:</b> {device.width} ft x {device.height * 10} ft
                </p>
                {
                    device.releaseYear && 
                    <p>
                        <b>Release Year:</b> {device.releaseYear}
                    </p>
                }
            </div>

            <TextField
                fullWidth
                disabled = {deviceId == 0}
                id="outlined-number"
                label={`Number ${deviceId == 0 ? '(Fixed)' : ''}`}
                type="number"
                slotProps={{
                    inputLabel: {
                        shrink: true,
                    },
                }}
                value={count}
                onChange={handleInputChange}
            />
        </div>
    )
}