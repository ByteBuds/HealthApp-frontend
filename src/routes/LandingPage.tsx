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
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

import person1 from "../assets/person1.jpeg"
import medicologo2 from "../assets/medicologo2.png"
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import NextMedication from "../components/NextMedication";
import Emergency from "../components/Emergency";
import CallDoc from "../components/CallDoc";
import NextVisit from "../components/NextVisit";


const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
}));

const LandinPage = () => {
    return (
        <Grid sx={{ backgroundColor: "#d1e3ff", mb: "1rem", height: { xs: "fit-content", lg: "100vh" } }}>
            <Grid container direction="row" sx={{ display: "flex", flexDirection: "row", justifyContent: "left", alignItems: "center", py: "1rem" }}>
                <img src={medicologo2} width="100" height="100" />
                <Typography sx={{ fontWeight: 800 }}>My Medico</Typography>
                <Grid sx={{ display: "flex", flexDirection: "column", mx: "auto", justifyContent: "center", alignItems: "center" }}>
                    <Typography sx={{ fontWeight: 500, mt: 2 }}>Hello, Allie Greer</Typography>
                    <Typography sx={{ fontWeight: 600, fontSize: "1.5rem" }}>How is your health today?</Typography>
                </Grid>

                <Link href="/profile">
                    <Avatar alt="img"
                        src={person1}
                        sx={{ width: 60, height: 60, ml: "auto" }} />
                </Link>

            </Grid>
            {/* <Grid container direction="column" sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", py: "1rem" }}>
                <Avatar alt="img"
                    src={person1}
                    sx={{ width: 120, height: 120 }} />
                <Typography sx={{ fontWeight: 500, mt: 2 }}>Hello, Allie Greer</Typography>
                <Typography sx={{ fontWeight: 600, fontSize: "1.5rem" }}>How is your health today?</Typography>

            </Grid> */}

            <Grid container sx={{ px: "1rem", mt: "3rem", display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: { xs: "center", md: "space-evenly" }, }}>
                <Grid item xs={12} md={5}>
                    <NextMedication />
                </Grid>
                <Grid item xs={12} md={5}>
                    <Emergency />
                </Grid>
                <Grid item xs={12} md={5}>
                    <CallDoc />
                </Grid>
                <Grid item xs={12} md={5}>
                    <NextVisit />
                </Grid>

            </Grid>
        </Grid>
    )
}

export default LandinPage