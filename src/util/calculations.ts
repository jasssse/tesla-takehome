import { DeviceIndex } from "../models/device";

export const calculateRequiredTransformers = (deviceIndex: DeviceIndex): number => {
    const nonTransformerCount = Object.entries(deviceIndex)
      // Exclude transformers (ID 0)
      .filter(([id]) => parseInt(id) !== 0) 
      // Sum the counts of non-transformer devices
      .reduce((total, [, count]) => total + count, 0); 
    
    // 1 transformer per 4 non-transformer devices
    return Math.ceil(nonTransformerCount / 4); 
};