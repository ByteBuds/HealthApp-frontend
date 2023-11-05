import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

import visit from "../assets/visit.png"

const NextVisit = () => {
    return (
        <Card sx={{ backgroundColor: "#1976d2", borderRadius: "2rem", display: "flex", flexDirection: "row", justifyContent: "left", height: "9rem", mt: { xs: "1rem", md: "3rem" } }}>
            <Grid>
                <CardContent>
                    <Typography sx={{ color: "white", fontWeight: 700, fontSize: "1.5rem" }}>
                        Next visit in 3 days
                    </Typography>
                    <Typography sx={{ color: "white", fontWeight: 400, fontSize: "0.9rem" }}>
                        Call your nearest ambulance service now
                    </Typography>
                </CardContent>
            </Grid>
            <Grid>
                <CardMedia sx={{ height: 100, width: 100, ml: "auto", mr: "1rem" }}
                    image={visit}
                    title="green iguana" />
            </Grid>


        </Card>
    )
}

export default NextVisit