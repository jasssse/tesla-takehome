# Tesla Energy Sales Engineering Take-Home
This is my submission for a take-home project for a Full-Stack position with Tesla Energy Sales Engineering.

### Project Intro
This is a web application that allows users to preview an industrial energy battery site. Users can add or remove any quantity of 4 following batteries:
- Megapack 2XL
- Megapack 2
- Megapack
- Powerpack
- Transformer (these are a fixed quantity; 1 for every 4 devices)

The app displays a sample layout of batteries, as well as space, energy and cost estimates.

### Running the app
```
npm install
npm run start
```

### Design Decisions
- With the data set being small and straightforward, I opted against a Python or Node-based backend
- Semi-optimal grid algorithm
  - JS/TS logic was used to construct an algorithm for an adequately-optimal battery layout, as opposed to something like a CSS grid
  - This algorithm is not fully greedy – despite inserting batteries from largest to smallest, it attempts to find spaces for smaller batteries in existing rows to minimize overall width when possible. It does this rather than always taking the first available space in the 2D array representation.
  - This algorithm is not fully optimal (for example, it doesn't arrange batteries vertically), but provides a decent improvement over a completely greedy algorithm.
- Typescript was used for static typing and improved readability
- I couldn't find definitive images for each device, thus some may be different shots of the same product. Apologies!

### Small additions
- Dark mode toggle!
- Device name displayed when hovering over tiles
- Accordion-style device selector
- Learn more link to Tesla Megapack page