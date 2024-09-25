import { deviceColours } from "../models/device"
import { useState } from "react"

interface TileProps {
    id: number;
    tileHeight: number;
    tileWidth: number;
    label: string
}

export const Tile = ({id, tileHeight, tileWidth, label} : TileProps) => {
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
                height: tileHeight,
                width: tileWidth
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {isHovered && (
                <span className="absolute text-white text-center px-2 py-1 bg-black bg-opacity-50 rounded">
                    {label}
                </span>
            )}
        </div>
    )

}