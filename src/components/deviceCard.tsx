import { DeviceGuide } from "../util/deviceGuide";


interface DeviceSelectorProps {
    deviceId: number;
    count: number;
    onCountChange: (count: number) => void;
}

export const DeviceCard = ({ deviceId, count, onCountChange }:DeviceSelectorProps) => {
    const device = DeviceGuide.get(deviceId)!

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        const newValue = isNaN(value) || value < 0 ? 0 : value;
        onCountChange(newValue);
    };

    // const incrementCount = () => onCountChange(count + 1);
    // TODO: REMOVE THE 0 CHECK
    // const decrementCount = () => onCountChange(count > 0 ? count - 1: 0);


    return (
        <div className="flex flex-col bg-slate-500">
            <h3>{device.name}</h3>
            <p>Count: {count}</p>
            <div>
                <input 
                    disabled = {deviceId == 0}
                    type="number"
                    value={count}
                    onChange={handleInputChange}
                />
            </div>
        </div>
    )
}