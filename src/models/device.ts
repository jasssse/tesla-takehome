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

export const deviceColours = new Map<number, string>([
    [0, "bg-[#4f46e5]"],
    [1, "bg-[#06b6d4]"],
    [2, "bg-[#4ade80]"],
    [3, "bg-[#fb923c]"],
    [4, "bg-[#ef4444]"]
])