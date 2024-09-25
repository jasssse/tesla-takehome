import Card from '@mui/material/Card';

interface MetricsAreaProps {
    energy: number,
    cost: number,
    rowCount: number,
    width: number
}

export const MetricsArea = ({energy, cost, rowCount, width} : MetricsAreaProps) => {
    const formattedCost = cost.toLocaleString("en-US", {style:"currency", currency:"USD"});

    return(
        <Card className='p-4 w-[90%]'>
            <div className="flex flex-col items-start">
                <h1 className="text-xl font-semibold mb-2">
                    Site Metrics
                </h1>

                <div className='flex flex-row justify-evenly w-full py-4 font-semibold'>
                    <div className='flex flex-col space-y-2'>
                        <p className='text-3xl'>
                            {formattedCost}
                        </p>
                        <p>Estimated Total Cost</p>
                    </div>

                    <div className='flex flex-col space-y-2'>
                        <p className='text-3xl text-green-500'>
                            {energy} MWh
                        </p>
                        <p>Total Energy Capacity</p>
                    </div>

                    <div className='flex flex-col space-y-2'>
                        <p className='text-3xl text-blue-600 '>
                            {rowCount * 10} ft x {width} ft
                        </p>
                        <p>Dimensions</p>
                    </div>

                </div>
            </div>
        </Card>
    )
}