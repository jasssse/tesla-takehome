
export interface Device {
    name: string;
    width: number;
    height: number;
    energy: number;
    cost: number;
    releaseYear?: number
}


export const DeviceGuide = new Map<number, Device>([
    [
        0, 
        {
            name: "Transformer",
            width: 10,
            height: 10,
            energy: -0.25,
            cost: 10000
        }
    ],
    [
        1,
        {
            name: "Powerpack",
            width: 10,
            height: 10,
            energy: 1,
            cost: 20000,
            releaseYear: 2000
        }
    ],
    [
        2,
        {
            name: "Megapack",
            width: 30,
            height: 10,
            energy: 2,
            cost: 50000,
            releaseYear: 2005
        }
    ],
    [
        3,
        {
            name: "Megapack 2",
            width: 30,
            height: 10,
            energy: 3,
            cost: 80000,
            releaseYear: 2021
        }
    ],
    [
        4,
        {
            name: "Megapack 2XL",
            width: 40,
            height: 10,
            energy: 4,
            cost: 120000,
            releaseYear: 2022
        }

    ]
])