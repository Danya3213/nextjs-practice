import {type DotProps} from "recharts";

interface ICustomDotProps extends DotProps {
    index: number;
}

export const CustomDot = (props: ICustomDotProps) => {
    const { cx, cy, index } = props;

    if (index === 1 || index === 4) {
        return (
            <circle
                cx={cx}
                cy={cy}
                r={5}
                fill="#ff6b6b"
                stroke="#fff"
                strokeWidth={2}
            />
        );
    }
    return null;
};