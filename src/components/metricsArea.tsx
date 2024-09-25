

interface MetricsAreaProps {
    energy: number,
    cost: number,
    rowCount: number,
    width: number
}

export const MetricsArea = ({energy, cost, rowCount, width} : MetricsAreaProps) => {
    const formattedCost = cost.toLocaleString("en-US", {style:"currency", currency:"USD"});
    
    return(
        <div className="flex flex-col items-start">
            <h1>
                Metrics
            </h1>
            <div className="flex flex-col items-start">
                {[
                    {
                        title: "Cost",
                        value: `${formattedCost}`
                    },
                    {
                        title: "Energy Capacity",
                        value: `${energy} MWh`
                    },
                    {
                        title: "Dimensions",
                        value: `${rowCount * 10} ft x ${width} ft`
                    }

                ].map(item => (
                    <p key = {item.title}>
                        <b>{item.title}:</b> {item.value}
                    </p>
                ))}

            </div>

        </div>
    )
}