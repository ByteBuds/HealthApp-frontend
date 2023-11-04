import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Activities = () => {
    return (
        <Grid container direction="column" spacing={2} sx={{ paddingY: "2rem", paddingX: "5rem" }}>
            <Grid item>
                <Card sx={{ backgroundColor: "#fff" }}>
                    <CardContent>
                        <Typography sx={{ fontWeight: "bold" }}>Prescribed Medicines</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item>
                <Card sx={{ backgroundColor: "#fff" }}>
                    <CardContent>
                        <Typography sx={{ fontWeight: "bold" }}>Nearest Medical Shops</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item>
                <Card sx={{ backgroundColor: "#fff" }}>
                    <CardContent>
                        <Typography sx={{ fontWeight: "bold" }}>Diet Plan</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item>
                <Card sx={{ backgroundColor: "#fff" }}>
                    <CardContent>
                        <Typography sx={{ fontWeight: "bold" }}>Next Appointment</Typography>
                    </CardContent>
                </Card>
            </Grid>


        </Grid>
    )
}

export default Activities