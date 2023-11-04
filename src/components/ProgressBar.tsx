import React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


import CircularProgress, {
    CircularProgressProps,
} from '@mui/material/CircularProgress';

const ProgressBar = () => {
    const [progress, setProgress] = useState(82);

    return (
        <Box sx={{ position: 'relative', display: 'inline-flex', mt: "1rem" }}>
            <CircularProgress variant="determinate" value={progress} size={80}
                thickness={4} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    variant="caption"
                    component="div"
                    color="text.secondary"
                >82%</Typography>
            </Box>
        </Box>
    )
}

export default ProgressBar