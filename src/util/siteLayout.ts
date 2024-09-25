import { DeviceGuide } from "./deviceGuide";
import { DeviceIndex} from "../models/device";

const MAX_WIDTH = 100

export interface SiteLayoutProperties {
    deviceMap: number[][];
    siteWidth: number;
    rowCount: number;
    cost: number;
    energy: number;
}

export const createSiteLayout = (deviceIndex: DeviceIndex): SiteLayoutProperties => {
    // Create a sorted device list from the Device Index
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
            if (b.width === a.width) {
                return b.id - a.id
            }
            return b.width - a.width
        }
    )

    function rowWidth(row: number[]): number {
        return row.reduce((totalWidth, id) => {
            const device = DeviceGuide.get(id);
            const width = device? device.width : 0;
            return totalWidth + width;
        }, 0);
    }
    
    // Greedy algorithm
    let deviceMap: number[][] = [];
    let totalCost = 0
    let totalEnergy = 0
    for (const device of deviceList) {
        let bestRowIndex = -1;
        let maxRemainingWidth = -1;

        // Find best existing row to fit device
        for (let i = 0; i < deviceMap.length; i++) {
            const currentRow = deviceMap[i];
            const currentWidth = rowWidth(currentRow);
            const remainingWidth = MAX_WIDTH - currentWidth;

            if (device.width <= remainingWidth && remainingWidth > maxRemainingWidth) {
                bestRowIndex = i;
                maxRemainingWidth = remainingWidth
            }
        }

        // No rows OR device does not fit
        if (bestRowIndex !== -1) {
            deviceMap[bestRowIndex].push(device.id);
        } else {
            deviceMap.push([device.id])
        }

        // Sum cost and energy as we go
        totalCost += DeviceGuide.get(device.id)!.cost
        totalEnergy += DeviceGuide.get(device.id)!.energy
    }

    // Calculate site width and row count
    const rowCount = deviceMap.length
    const siteWidth = deviceMap.reduce((maxWidth, row) => {
        const rowWidth = row.reduce((width, id) => width + (DeviceGuide.get(id)?.width || 0), 0);
        return Math.max(maxWidth, rowWidth);
    }, 0);

    return {
        deviceMap,
        siteWidth,
        rowCount,
        cost: totalCost,
        energy: totalEnergy
    }
}