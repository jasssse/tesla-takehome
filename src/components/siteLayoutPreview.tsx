import { DeviceGuide } from "../util/deviceGuide"
import { Tile } from "./tile"

interface SiteLayoutPreviewProps {
    layout: number[][]
}

export const SiteLayoutPreview = ({layout}: SiteLayoutPreviewProps) => {
    const SCALE_FACTOR = 10
    return (
        <div className="flex flex-col items-start p-2">
            <h1 className="text-xl font-semibold">
                Site Layout Preview
            </h1>

            <div className="py-2 w-full">
                {layout.length < 1 && <></>}
                {layout.map((row, i) => {
                    return(
                        <div key={i} className="flex flex-row">
                            {row.map((deviceId) => {
                                const device = DeviceGuide.get(deviceId)!
                                return (
                                    <Tile 
                                        id={deviceId} 
                                        tileHeight={device.height * SCALE_FACTOR} 
                                        tileWidth={device.width * SCALE_FACTOR}
                                        label={device.name}
                                    />
                                )
                            })}
                        </div>
                    )
                })}
            </div>

        </div>
    )
}