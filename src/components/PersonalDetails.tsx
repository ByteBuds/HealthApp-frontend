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

import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

import { editPageVisible } from '../atoms';

const PersonalDetails = () => {
    const [editPage, setEditPage] = useAtom(editPageVisible)
    return (
        <div>
            {editPage ? (
                <Grid container direction="column" >
                    edit profile
                </Grid>
            ) : (
                <Grid container direction="column" sx={{ paddingY: "2rem", paddingX: "5rem" }}>
                    <Grid item container direction="row" sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Typography sx={{ fontWeight: 600, fontSize: "2rem" }}>
                            Personal Info
                        </Typography>
                        <Button sx={{ borderRadius: "5rem" }} onClick={() => setEditPage(!editPage)}>
                            <EditOutlinedIcon />
                        </Button>
                    </Grid>
                    <Grid item container direction="column">
                        <List>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "50%" }}>
                                <ListItem>Name:</ListItem>
                                <ListItem>Allie Geer</ListItem>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "50%" }}>
                                <ListItem>Email:</ListItem>
                                <ListItem>allie@gmail.com</ListItem>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "50%" }}>
                                <ListItem>DOB:</ListItem>
                                <ListItem>20-06-1985</ListItem>
                            </div>

                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "50%" }}>
                                <ListItem>Age:</ListItem>
                                <ListItem>38</ListItem>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "50%" }}>
                                <ListItem>Phone Number:</ListItem>
                                <ListItem>1234567890</ListItem>
                            </div>
                            <Divider sx={{ marginY: "1rem" }} />
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "50%" }}>
                                <ListItem>Guardian Name:</ListItem>
                                <ListItem>John Geer</ListItem>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "50%" }}>
                                <ListItem>Guardian Email:</ListItem>
                                <ListItem>john@gmail.com</ListItem>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "50%" }}>
                                <ListItem>Guardian Phone:</ListItem>
                                <ListItem>0123456789</ListItem>
                            </div>

                        </List>

                    </Grid>


                </Grid>
            )}

        </div>
    )
}

export default PersonalDetails