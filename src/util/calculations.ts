import { DeviceIndex } from "../models/device";

export const calculateRequiredTransformers = (deviceIndex: DeviceIndex): number => {
    const nonTransformerCount = Object.entries(deviceIndex)
      .filter(([id]) => parseInt(id) !== 0) // Exclude transformers (ID 0)
      .reduce((total, [, count]) => total + count, 0); // Sum the counts of non-transformer devices

    return Math.ceil(nonTransformerCount / 4); // 1 transformer per 4 non-transformer devices
};