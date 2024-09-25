import { useEffect, useState, useMemo } from "react";
import { DeviceIndex } from "../models/device";
import { MetricsArea } from "./metricsArea";
import { SiteLayoutPreview } from "./siteLayoutPreview";
import { createSiteLayout } from "../util/createSiteLayout";

interface MainAreaProps {
    deviceIndex: DeviceIndex;
}

export const MainArea = ({ deviceIndex }: MainAreaProps) => {
    const [layoutWidth, setLayoutWidth] = useState(0)
    const [rowCount, setRowCount] = useState(0)
    const [layout, setLayout] = useState<number[][]>([])
    const [energy, setEnergy] = useState(0)
    const [cost, setCost] = useState(0)

    const siteLayout = useMemo(() => {
        return createSiteLayout(deviceIndex);
    }, [deviceIndex])

    useEffect(() => {
        const { deviceMap, siteWidth, rowCount, cost, energy} = siteLayout

        setLayout(deviceMap)
        setLayoutWidth(siteWidth)
        setRowCount(rowCount)
        setCost(cost)
        setEnergy(energy)

    }, [siteLayout])

    return (
        <div className="flex flex-col p-2 w-11/12 space-y-4">
            <MetricsArea energy={energy} cost={cost} rowCount={rowCount} width={layoutWidth}/>
            <SiteLayoutPreview layout={layout}/>
        </div>
    )
}