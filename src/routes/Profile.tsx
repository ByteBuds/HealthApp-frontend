import React from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ProfileLeftPane from "../components/ProfileLeftPane";
import ProfileRightPane from "../components/ProfileRightPane";

const Profile = () => {
    return (
        <div>
            {/* <ProfileNavbar /> */}
            <Grid container direction="row">
                <Grid item sx={{ padding: "0rem", width: "20%", display: { xs: "none", md: "block" } }}>
                    <ProfileLeftPane />
                </Grid>
                <Grid item sx={{ backgroundColor: "#f0f2f6", width: { xs: "100%", md: "80%" } }}>
                    <ProfileRightPane />
                </Grid>
            </Grid>
        </div>

    )
}

export default Profile