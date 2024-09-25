
export interface Device {
    name: string;
    width: number;
    height: number;
    energy: number;
    cost: number;
    imagePath: string;
    releaseYear?: number
}

export interface DeviceIndex {
    [id: number]: number;
}

export const initialDeviceIndex: DeviceIndex = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0
  };


export const calculateRequiredTransformers = (deviceIndex: DeviceIndex): number => {
    const nonTransformerCount = Object.entries(deviceIndex)
      .filter(([id]) => parseInt(id) !== 0) // Exclude transformers (ID 0)
      .reduce((total, [, count]) => total + count, 0); // Sum the counts of non-transformer devices

    return Math.ceil(nonTransformerCount / 4); // 1 transformer per 4 non-transformer devices
};

export const deviceColours = new Map<number, string>([
    [0, "bg-[#1e293b]"],
    [1, "bg-[#8b5cf6]"],
    [2, "bg-[#22d3ee]"],
    [3, "bg-[#fb923c]"],
    [4, "bg-[#ef4444]"]
])