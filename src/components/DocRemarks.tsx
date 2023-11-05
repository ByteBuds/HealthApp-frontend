import React from 'react'
import { useState } from 'react';
import { useAtom } from "jotai";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

const DocRemarks = () => {
    return (
        <Grid container direction="column" sx={{ paddingY: "2rem", paddingX: "5rem" }}>
            <Grid item container direction="row" sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Typography sx={{ fontWeight: 600, fontSize: "2rem" }}>
                    Dr. John Doe
                </Typography>
                <Typography sx={{ fontWeight: 600 }}>02-09-2023</Typography>
                <Typography>
                    Based on the diagnostic tests and your symptoms, it appears that you have been experiencing symptoms consistent with Irritable Bowel Syndrome (IBS). I recommend making some dietary and lifestyle changes to manage your symptoms. We'll start with a low-FODMAP diet, and I'll prescribe a medication to help alleviate the abdominal discomfort. Please follow up in four weeks to assess your progress and make any necessary adjustments to your treatment plan.
                </Typography>
                {/* <Button sx={{ borderRadius: "5rem" }} onClick={() => setAdd(!add)}>
                    <AddCircleRoundedIcon sx={{ fontSize: "3rem" }} />
                </Button> */}
            </Grid>
        </Grid>
    )
}

export default DocRemarks