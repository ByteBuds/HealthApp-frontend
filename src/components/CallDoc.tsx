import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import emergency from "../assets/emergency.png"
import doctor from "../assets/doctor.png"

const CallDoc = () => {
    return (
        <Card sx={{ backgroundColor: "#1976d2", borderRadius: "2rem", display: "flex", flexDirection: "row", justifyContent: "left", height: "9rem", mt: "1rem" }}>
            <Grid>
                <CardContent>
                    <Typography sx={{ color: "white", fontWeight: 700, fontSize: "1.5rem" }}>
                        Contact Doctor
                    </Typography>
                    <Typography sx={{ color: "white", fontWeight: 400, fontSize: "0.9rem" }}>
                        Call your nearest ambulance service now
                    </Typography>
                </CardContent>
            </Grid>
            <Grid>
                <CardMedia sx={{ height: 100, width: 100, ml: "auto", mr: "1rem" }}
                    image={doctor}
                    title="doctor" />
            </Grid>


        </Card>
    )
}

export default CallDoc