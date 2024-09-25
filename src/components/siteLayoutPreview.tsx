import { DeviceGuide } from "../util/deviceGuide"
import { Tile } from "./tile"

interface SiteLayoutPreviewProps {
    layout: number[][]
}

const SCALE_FACTOR = 10

export const SiteLayoutPreview = ({layout}: SiteLayoutPreviewProps) => {
    return (
        <div className="flex flex-col items-start p-2">
            <h1 className="text-xl font-semibold dark:text-dark_header_text">
                Site Layout Preview
            </h1>

            <div className="py-2 w-full">
                
                {layout.length < 1 
                    ? <div className="flex flex-col items-center w-11/12 py-10">
                        <p className="text-dark_body_text font-semibold">Add Devices to Preview</p>
                    </div>

                    // Scale
                    : <div className="flex flex-col w-full items-center" style={{ width: 100 * SCALE_FACTOR }} >
                        <p className="text-gray-400 font-semibold">100 ft</p>
                        <div className="flex h-2 bg-gray-300 dark:bg-dark_body_text w-[99%]"></div>
                    </div> }

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