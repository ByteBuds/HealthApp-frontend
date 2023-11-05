import React, { useState } from 'react'
import { useAtom } from "jotai";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

import { activityIndex } from '../atoms';
import { medicalShopsIndex } from '../atoms';
import MedicinesToTake from './MedicinesToTake';
import NearestMedShops from './NearestMedShops';

const Activities = () => {
    const [index, setIndex] = useAtom(activityIndex)
    const [shopIndex, setShopIndex] = useAtom(medicalShopsIndex)
    const [appointment, setAppointment] = useState(false)
    const [diet, setDiet] = useState(false)

    const handleCloseAppointment = () => {
        setAppointment(false)
    }
    const handleCloseDiet = () => {
        setDiet(false)
    }

    return (
        <Grid container direction="column" sx={{ paddingY: "2rem", paddingX: { xs: "2rem", lg: "5rem" } }}>
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
                        }} onClick={() => {
                            // setIndex(3)
                            setDiet(true)
                        }}>
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
                        }} onClick={() => {
                            // setIndex(4)
                            setAppointment(true)

                        }}>
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
                        <IconButton onClick={() => {
                            setIndex(0)
                        }}>
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
                        <IconButton onClick={() => {
                            if (shopIndex === 0) {
                                setIndex(0)
                            } else {
                                setShopIndex(0)
                            }
                            // setIndex(0)
                            // setShopIndex(0)
                        }}>
                            <ArrowBackRoundedIcon />
                        </IconButton>
                        <Typography sx={{ fontWeight: 600, fontSize: "2rem" }}>Nearest Medical Shops</Typography>
                    </Stack>

                    <NearestMedShops />
                </div>
            )}

            {/* Dialog for next appointment */}
            <Dialog
                onClose={handleCloseAppointment}
                aria-labelledby="customized-dialog-title"
                open={appointment}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    Next Appointment
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleCloseAppointment}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        Your next appointment with Dr.John Doe is schduled on 29-09-2023
                    </Typography>
                    {/* <Typography gutterBottom>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                    </Typography>
                    <Typography gutterBottom>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
                        magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
                        ullamcorper nulla non metus auctor fringilla.
                    </Typography> */}
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleCloseAppointment} variant='contained'>
                        Reschedule
                    </Button>
                    <Button autoFocus onClick={handleCloseAppointment} variant='contained'>
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Dialog for diet plan */}
            <Dialog
                onClose={handleCloseDiet}
                aria-labelledby="customized-dialog-title"
                open={diet}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    Diet Plan
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleCloseDiet}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
                    </Typography>
                    <Typography gutterBottom>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                    </Typography>
                    <Typography gutterBottom>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
                        magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
                        ullamcorper nulla non metus auctor fringilla.
                    </Typography>
                </DialogContent>
                <DialogActions>

                    <Button autoFocus onClick={handleCloseDiet} variant='contained'>
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </Grid>

    )
}

export default Activities