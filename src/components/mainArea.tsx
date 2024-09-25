import { useEffect, useState } from "react";
import { DeviceIndex } from "../models/device";
import { MetricsArea } from "./metricsArea";
import { SiteLayout } from "./siteLayout";
import { createSiteLayout } from "../util/siteLayout";

interface MainAreaProps {
    deviceIndex: DeviceIndex;
}

export const MainArea = ({ deviceIndex }: MainAreaProps) => {
    const [layoutWidth, setLayoutWidth] = useState(0)
    const [rowCount, setRowCount] = useState(0)
    const [layout, setLayout] = useState<number[][]>([])
    const [energy, setEnergy] = useState(0)
    const [cost, setCost] = useState(0)

    // Calculate cost and energy

    useEffect(() => {
        const { deviceMap, siteWidth, rowCount, cost, energy} = createSiteLayout(deviceIndex)
        setLayout(deviceMap)
        setLayoutWidth(siteWidth)
        setRowCount(rowCount)
        setCost(cost)
        setEnergy(energy)

    }, [deviceIndex])

    return (
        <div className="flex flex-col">
            {/* Metrics area */}
            <MetricsArea energy={energy} cost={cost} rowCount={rowCount} width={layoutWidth}/>

            {/* Site Layout */}
            <SiteLayout layout={layout}/>
        </div>
    )
}