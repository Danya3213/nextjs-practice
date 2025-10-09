import type {TooltipProps} from "recharts";

interface ICustomTooltipProps extends TooltipProps<number, string> {

    payload: {
        payload: {
            value: number;
        };
    }[]
}

export const CustomTooltip = ({ active, payload }: ICustomTooltipProps) => {
    if (active && payload && payload.length) {
        const dataPoint = payload[0].payload;

        return (
            <div style={{
                backgroundColor: '#39009633',
                padding: '10px',
                border: '1px solid #FF868D',
                borderRadius: '4px',
                color: '#fff',
            }}>
                <p className="intro">{dataPoint.value.toFixed(2)}</p>
            </div>
        );
    }
    return null;
};
