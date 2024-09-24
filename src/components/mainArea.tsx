import { useState } from "react";
import { DeviceIndex } from "../models/device";

interface MainAreaProps {
    deviceIndex: DeviceIndex;
}

export const MainArea = ({ deviceIndex }: MainAreaProps) => {
    const [rowCount, setRowCount] = useState(0)
    const [layoutWidth, setLayoutWidth] = useState(0)

    return (
        <div className="flex flex-col">
            {/* Metrics area */}

            {/* Site Layout */}

        </div>
    )
}