import { DeviceIndex } from "../models/device"
import { DeviceCard } from "./deviceCard";

interface DeviceListProps {
    deviceIndex: DeviceIndex;
    updateDeviceCount: (id: number, newCount: number) => void;
}

export const DeviceList = ({deviceIndex, updateDeviceCount}: DeviceListProps) => {
    return(
        <div className="flex flex-col">
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
        </div>
    )
}