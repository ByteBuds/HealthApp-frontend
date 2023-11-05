import React from 'react'
import { useState } from 'react';
import { useAtom } from "jotai";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CircularProgress, {
    CircularProgressProps,
} from '@mui/material/CircularProgress';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import ProgressBar from './ProgressBar';

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';

import person1 from "../assets/person1.jpeg"

import { profileIndex } from '../atoms';
import { activityIndex } from '../atoms';

const ProfileLeftPane = () => {
    const [progress, setProgress] = useState(60);
    const [index, setIndex] = useAtom(profileIndex)
    const [nestedIndex, setNestedIndex] = useAtom(activityIndex)
    return (
        <Grid sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

            <Card elevation={0} sx={{ paddingX: "0rem", marginTop: "2rem" }}>
                <CardMedia component="img"
                    height="194"
                    image={person1}
                    alt="Paella dish"
                    sx={{ borderRadius: "2rem" }} />
            </Card>
            <Typography sx={{ marginTop: "1rem", fontSize: "1.25rem" }}>Allie Greer</Typography>
            <Typography sx={{ fontSize: "1rem", color: "#8f8d8d" }}>Female, 39 years old</Typography>

            <ProgressBar />
            <div style={{ marginTop: "1rem" }}>
                <List sx={{ width: "100%", padding: 0 }}>
                    <ListItem sx={{ width: "100%", borderRadius: "1rem", backgroundColor: `${index === 1 ? "#1976d2" : ""}` }} onClick={() => {
                        setIndex(1)
                        setNestedIndex(0)

                    }}>
                        <ListItemButton>
                            <ListItemIcon sx={{ color: `${index === 1 ? "white" : ""}` }}>
                                <InfoOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText sx={{ color: `${index === 1 ? "white" : ""}` }}>Activities </ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem sx={{ width: "100%", borderRadius: "1rem", backgroundColor: `${index === 2 ? "#1976d2" : ""}` }} onClick={() => {
                        setIndex(2)
                    }}>
                        <ListItemButton>
                            <ListItemIcon sx={{ color: `${index === 2 ? "white" : ""}` }}>
                                <InfoOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText sx={{ color: `${index === 2 ? "white" : ""}` }}>Personal Info</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem sx={{ width: "100%", borderRadius: "1rem", backgroundColor: `${index === 3 ? "#1976d2" : ""}` }} onClick={() => { setIndex(3) }}>
                        <ListItemButton>
                            <ListItemIcon sx={{ color: `${index === 3 ? "white" : ""}` }}>
                                <HistoryOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText sx={{ color: `${index === 3 ? "white" : ""}` }}>Medical History</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem sx={{ width: "100%", borderRadius: "1rem", backgroundColor: `${index === 4 ? "#1976d2" : ""}` }} onClick={() => { setIndex(4) }}>
                        <ListItemButton>
                            <ListItemIcon sx={{ color: `${index === 4 ? "white" : ""}` }}>
                                <MessageOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText sx={{ color: `${index === 4 ? "white" : ""}` }}>Doctor's Remarks</ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
            </div>
        </Grid>

    )
}

export default ProfileLeftPane