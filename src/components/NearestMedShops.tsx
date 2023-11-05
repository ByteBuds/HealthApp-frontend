import React from 'react'
import { useState } from 'react';
import { useAtom } from "jotai";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

import { medicalShopsIndex } from '../atoms';

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import BillingList from './BillingList';

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

const NearestMedShops = () => {
    const [index, setIndex] = useAtom(medicalShopsIndex)
    return (
        <div>
            {index === 0 ? (
                <div>
                    <Card sx={{
                        borderRadius: 5, mt: "1.5rem", ':hover': {
                            boxShadow: 5, cursor: "pointer"
                        },
                    }} onClick={() => setIndex(1)}>
                        <CardContent>
                            <Grid container direction="row" justifyContent="space-between">
                                <Grid item>
                                    <Typography sx={{ fontWeight: 700, fontSize: "1.2rem" }}>Medicare Pharmacy</Typography>
                                    <Typography>Address: 123 Elm Street, Cityville</Typography>
                                    <Typography>Phone: (555) 123-4567</Typography>

                                    <Stack direction="row" spacing={1}>
                                        <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} size='small' readOnly />
                                        <Typography sx={{ fontSize: "0.9rem" }}>Good</Typography>
                                        <Typography sx={{ fontSize: "0.9rem" }}>(46 ratings)</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item sx={{ my: "auto" }}>
                                    <Stack direction="column" alignItems="center" justifyContent="center" onClick={() => console.log("clicked")} sx={{ cursor: "pointer" }} >
                                        <LocationOnOutlinedIcon />
                                        <Typography sx={{ fontSize: "0.9rem" }}>3.2 km</Typography>

                                    </Stack>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <Card sx={{
                        borderRadius: 5, mt: "1.5rem", ':hover': {
                            boxShadow: 5, cursor: "pointer"
                        },
                    }} onClick={() => setIndex(1)}>
                        <CardContent>
                            <Grid container direction="row" justifyContent="space-between">
                                <Grid item>
                                    <Typography sx={{ fontWeight: 700, fontSize: "1.2rem" }}>PharmaFirst Dispensary</Typography>
                                    <Typography>Address: 555 Spruce Court, Lakeview</Typography>
                                    <Typography>Phone: (555) 678-2345</Typography>
                                    <Stack direction="row" spacing={1}>
                                        <Rating name="half-rating-read" defaultValue={2} precision={0.5} size='small' readOnly />
                                        <Typography sx={{ fontSize: "0.9rem" }}>Poor</Typography>
                                        <Typography sx={{ fontSize: "0.9rem" }}>(59 ratings)</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item sx={{ my: "auto" }}>
                                    <Stack direction="column" alignItems="center" justifyContent="center" onClick={() => console.log("clicked")} sx={{ cursor: "pointer" }} >
                                        <LocationOnOutlinedIcon />
                                        <Typography sx={{ fontSize: "0.9rem" }}>5.6 km</Typography>

                                    </Stack>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </div>

            ) : (
                <div>
                    <BillingList />
                </div>
            )}

        </div>

    )
}

export default NearestMedShops