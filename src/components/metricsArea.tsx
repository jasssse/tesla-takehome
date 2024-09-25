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
        <div className={`p-0.5 w-[90%] ${ rowCount > 0 ? 'bg-gradient-to-r' : 'bg-white'} from-white via-emerald-400 to-sky-500 rounded-lg drop-shadow-md`}>
            <div className="w-full h-full rounded-lg bg-white dark:bg-dark_accent flex flex-col items-start p-4">
                <h1 className="text-xl font-semibold mb-2 dark:text-dark_header_text">
                    Site Metrics
                </h1>

                <div className='flex flex-row justify-evenly w-full py-4 font-semibold pb-6'>
                    <div className='flex flex-col space-y-2 dark:text-dark_header_text'>
                        <p className='text-3xl'>
                            {formattedCost}
                        </p>
                        <p className='dark:text-dark_body_text'>Estimated Total Cost</p>
                    </div>

                    <div className='flex flex-col space-y-2'>
                        <p className='text-3xl text-green-400'>
                            {energy} MWh
                        </p>
                        <p className='dark:text-dark_body_text'>Total Energy Capacity</p>
                    </div>

                    <div className='flex flex-col space-y-2'>
                        <p className='text-3xl text-blue-600 '>
                            {rowCount * 10} ft x {width} ft
                        </p>
                        <p className='dark:text-dark_body_text'>Dimensions</p>
                    </div>

                </div>
            </div>
        </div>
    )
}