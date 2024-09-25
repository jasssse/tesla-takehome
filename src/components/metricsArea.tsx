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
        <Card className='p-4 w-10/12'>
            
            <div className="flex flex-col items-start">
                <h1 className="text-xl font-semibold mb-2">
                    Site Metrics
                </h1>

                {[
                    {
                        title: "Estimated Total Cost",
                        value: `${formattedCost}`
                    },
                    {
                        title: "Total Energy Capacity",
                        value: `${energy} MWh`
                    },
                    {
                        title: "Site Dimensions",
                        value: `${rowCount * 10} ft x ${width} ft`
                    }

                ].map(item => (
                    <p key = {item.title}>
                        <b>{item.title}:</b> {item.value}
                    </p>
                ))}

            </div>

        </Card>
        
    )
}