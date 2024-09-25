import { Device } from "../models/device"

// Sample device data -> this would be lifted into an API if a backend was added
export const DeviceGuide = new Map<number, Device>([
    [
        0, 
        {
            name: "Transformer",
            width: 10,
            height: 10,
            energy: -0.25,
            imagePath: '/images/transformer.png',
            cost: 10000,
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
            imagePath: '/images/powerpack.jpg',
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
            imagePath: '/images/megapack.jpg',
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
            imagePath: '/images/megapack-2.jpg',
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
            imagePath: '/images/megapack-2xl.jpg',
            releaseYear: 2022
        }

    ]
])