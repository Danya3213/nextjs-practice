import type {ReactElement} from "react";
import {Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip} from 'recharts';
import {Box} from '@mui/material';
import {CustomDot} from './Components/Dot';
import {CustomTooltip} from './Components/ToolTip';

export const Chart = (): ReactElement => {

    const data = [
        { name: 'Point 1', value: 26.7 },
        { name: 'Point 2', value: 28 },
        { name: 'Point 3', value: 26 },
        { name: 'Point 4', value: 27.5 },
        { name: 'Point 5', value: 29 },
        { name: 'Point 5', value: 28 },
    ];

    return (
        <Box
            sx={{
                borderRadius: '16px',
                width: '100%',
                maxWidth: '900px',
            }}
        >
            <Box
                sx={{
                    background: '#4A56E21A',
                    position: 'relative',
                }}
            >

                <ResponsiveContainer width="100%" height={190}>
                    <AreaChart
                        data={data}
                        margin={{ right: 1, left: 1 }}
                    >
                        <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">

                                <stop offset={"0%"} stopColor="#FFFFFF" />
                                <stop offset={"20%"} stopColor="#FFFFFF89" />
                                <stop offset={"40%"} stopColor="#FFFFFF45" />
                                <stop offset={"60%"} stopColor="#FFFFFF27" />
                                <stop offset={"80%"} stopColor="#FFFFFF00" />
                            </linearGradient>
                        </defs>

                        <XAxis
                            dataKey="name"
                            hide={true}
                        />
                        <YAxis
                            hide={true}
                            domain={[25, 31]}
                        />
                        <Area
                            type="monotoneX"
                            dataKey="value"
                            stroke="#ff6b6b"
                            strokeWidth={2}
                            fill="url(#colorValue)"
                            dot={<CustomDot />}
                        />
                        <Tooltip content={<CustomTooltip />}/>
                    </AreaChart>
                </ResponsiveContainer>
            </Box>
        </Box>
    );
}