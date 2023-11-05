import React from 'react'
import { useAtom } from "jotai";
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { profileIndex } from '../atoms';
import Activities from './Activities';
import PersonalDetails from './PersonalDetails';
import MedicalHistory from './MedicalHistory';
import DocRemarks from './DocRemarks';

const ProfileRightPane = () => {
    const [index, setIndex] = useAtom(profileIndex)
    return (
        <div>
            <AppBar position='static' elevation={0} sx={{ padding: 0, backgroundColor: "#fff" }}>
                <Grid sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                    <p style={{ color: "#000" }}>
                        {index === 1 ? "Activities" : index === 2 ? "Personal Info" : index === 3 ? "Medical History" : index === 4 ? "Doctor's Remarks" : ""}
                    </p>
                </Grid>
            </AppBar>
            {index === 1 && (
                <Activities />
            )}
            {index === 2 && (
                <PersonalDetails />
            )}
            {index === 3 && (
                <MedicalHistory />
            )}
            {index === 4 && (
                <DocRemarks />
            )}

        </div>


    )
}

export default ProfileRightPane