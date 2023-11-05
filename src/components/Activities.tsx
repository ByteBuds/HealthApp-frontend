import React from 'react'
import { useAtom } from "jotai";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';


import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

import { activityIndex } from '../atoms';
import MedicinesToTake from './MedicinesToTake';
import NearestMedShops from './NearestMedShops';

const Activities = () => {
    const [index, setIndex] = useAtom(activityIndex)
    return (
        <Grid container direction="column" sx={{ paddingY: "2rem", paddingX: "5rem" }}>
            {index === 0 && (
                <Grid container direction="column" spacing={5} >
                    <Grid item>
                        <Card sx={{
                            backgroundColor: "#fff", ':hover': {
                                boxShadow: 5,
                            },
                        }} onClick={() => setIndex(1)}>
                            <CardContent>
                                <Typography sx={{ fontWeight: "bold" }}>Prescribed Medicines</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card sx={{
                            backgroundColor: "#fff", ':hover': {
                                boxShadow: 5,
                            },
                        }} onClick={() => setIndex(2)}>
                            <CardContent>
                                <Typography sx={{ fontWeight: "bold" }}>Nearest Medical Shops</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card sx={{
                            backgroundColor: "#fff", ':hover': {
                                boxShadow: 5,
                            },
                        }} onClick={() => setIndex(3)}>
                            <CardContent>
                                <Typography sx={{ fontWeight: "bold" }}>Diet Plan</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card sx={{
                            backgroundColor: "#fff", ':hover': {
                                boxShadow: 5,
                            },
                        }} onClick={() => setIndex(4)}>
                            <CardContent>
                                <Typography sx={{ fontWeight: "bold" }}>Next Appointment</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            )}
            {index === 1 && (
                <div>
                    <Stack direction="row" alignItems="center" gap={2} sx={{ mb: "1rem" }}>
                        <IconButton onClick={() => { setIndex(0) }}>
                            <ArrowBackRoundedIcon />
                        </IconButton>
                        <Typography sx={{ fontWeight: 600, fontSize: "2rem" }}>Prescribed Medicines</Typography>
                    </Stack>

                    <MedicinesToTake />
                </div>
            )}
            {index === 2 && (
                <div>
                    <Stack direction="row" alignItems="center" gap={2} sx={{ mb: "1rem" }}>
                        <IconButton onClick={() => { setIndex(0) }}>
                            <ArrowBackRoundedIcon />
                        </IconButton>
                        <Typography sx={{ fontWeight: 600, fontSize: "2rem" }}>Nearest Medical Shops</Typography>
                    </Stack>

                    <NearestMedShops />
                </div>
            )}

        </Grid>

    )
}

export default Activities