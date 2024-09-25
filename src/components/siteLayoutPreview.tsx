import { deviceColours } from "../models/device"
import { useState } from "react"
import { DeviceGuide } from "../util/deviceGuide"

interface SiteLayoutPreviewProps {
    layout: number[][]
}

export const SiteLayoutPreview = ({layout}: SiteLayoutPreviewProps) => {
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
                                return (
                                    <Tile id={deviceId} />
                                )
                            })}
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

interface TileProps {
    id: number
}

const Tile = ({id} : TileProps) => {
    const device = DeviceGuide.get(id)!
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className={`relative flex items-center justify-center border-8 border-[#fafafa] rounded-2xl p-4 ${deviceColours.get(id)}`}
            style={{
                width: device.width * 10,
                height: device.height * 10
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {isHovered && (
                <span className="absolute text-white text-center px-2 py-1 bg-black bg-opacity-50 rounded">
                    {device.name}
                </span>
            )}
        </div>
    )

}