import { Device, DeviceGuide } from "../models/device";

export interface IdToCount {
    [id: number]: number;
}

export interface SiteLayout {
    deviceMap: number[][];
    siteWidth: number;
    rowCount: number;
}

const MAX_WIDTH = 100

export const createSiteLayout = (deviceIndex: IdToCount): SiteLayout => {
    let deviceList: { id: number; width: number }[] = [];

    for (const [idStr, quantity] of Object.entries(deviceIndex)) {
        const id = parseInt(idStr);
        const device = DeviceGuide.get(id);
        if (device) {
            for (let i = 0; i < quantity; i++) {
                deviceList.push({ id: id, width: device.width});
            }
        }
    }

    deviceList.sort(
        (a, b) => {
            if (b.width == a.width) {
                return b.id - a.id
            }
            return b.width - a.width
        }
    )

    // for (const d of deviceList) {
    //     console.log(d)
    // }

    function rowWidth(row: number[]): number {
        return row.reduce((totalWidth, id) => {
            const device = DeviceGuide.get(id);
            const width = device? device.width : 0;
            return totalWidth + width;
        }, 0);
    }
    

    // Greedy algorithm
    let deviceMap: number[][] = [];

    for (const device of deviceList) {
        // LIST = SORTED LIST
        // MAP = LAYOUT
        let bestRowIndex = -1;
        let maxRemainingWidth = -1;

        for (let i = 0; i < deviceMap.length; i++) {
            const currentRow = deviceMap[i];
            const currentWidth = rowWidth(currentRow);
            const remainingWidth = MAX_WIDTH - currentWidth;

            if (device.width <= remainingWidth && remainingWidth > maxRemainingWidth) {
                bestRowIndex = i;
                maxRemainingWidth = remainingWidth
            }
        }

        if (bestRowIndex !== -1) {
            deviceMap[bestRowIndex].push(device.id);
        } else {
            deviceMap.push([device.id])
        }
    }


    const siteWidth = deviceMap.reduce((maxWidth, row) => {
        const rowWidth = row.reduce((width, id) => width + (DeviceGuide.get(id)?.width || 0), 0);
        return Math.max(maxWidth, rowWidth);
    }, 0);

    const rowCount = deviceMap.length

    console.log(deviceMap)
    console.log(siteWidth)
    console.log(rowCount)

    return {
        deviceMap,
        siteWidth,
        rowCount
    }
}