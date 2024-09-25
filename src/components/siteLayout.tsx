import { deviceColours, DeviceIndex } from "../models/device"
import { useEffect, useState } from "react"
import { SiteLayoutProperties } from "../util/siteLayout"
import { createSiteLayout } from "../util/siteLayout"
import { DeviceGuide } from "../util/deviceGuide"

interface SiteLayoutProps {
    layout: number[][]
}

export const SiteLayout = ({layout}: SiteLayoutProps) => {
    return (
        <div className="flex flex-col items-start">
            <h1>
                Site Layout Preview
            </h1>

            <div>
                {layout.length < 1 && <></>}
                {layout.map((row, i) => {
                    return(
                        <div key={i} className="flex flex-row">
                            {row.map((deviceId, j) => {
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

    return (
        <div
            className={`border-2 border-white rounded-xl p-3 ${deviceColours.get(id)}`}
            style={{
                width: device.width * 10,
                height: device.height * 10
            }}
        >
        </div>
    )

}