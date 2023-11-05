import React from 'react'
import { useState } from 'react';
import { useAtom } from "jotai";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import paracetamol from "../assets/paracetamol.png"

import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import LocalDiningRoundedIcon from '@mui/icons-material/LocalDiningRounded';

const MedicinesToTake = () => {
    const [openDiet, setOpenDiet] = useState(false);
    const [openSideEffects, setOpenSideEffects] = useState(false);


    const handleClose = () => {
        setOpenDiet(false)
    }

    return (
        <div>
            <Card sx={{ borderRadius: 8 }}>
                <Grid container direction="row">
                    <Grid item xs={2}>
                        <CardMedia sx={{ height: 180, width: 180, }} component="img"
                            image={paracetamol}
                            title="paracetamol"
                        />
                    </Grid>

                    <Grid item container direction="column" gap={2} xs={9} sx={{ pt: 5 }}>
                        <Typography sx={{ fontWeight: 600, fontSize: "1.2rem" }}>Paracetamol 500mg</Typography>
                        <Grid item container gap={2} direction="row">
                            <Typography sx={{ border: 1, width: "fit-content", borderRadius: 5, px: 3 }}>26/5/2023</Typography>
                            <Typography sx={{ border: 1, width: "fit-content", borderRadius: 5, px: 3 }}>30/5/2023</Typography>
                        </Grid>
                        <Stack direction="row" spacing={1}>
                            <Chip icon={<LightModeRoundedIcon />} label="Morning" />
                            <Chip icon={<LocalDiningRoundedIcon />} label="After Meal" />

                        </Stack>
                    </Grid>
                </Grid>
                <CardContent>
                    <Stack direction="row" spacing={3}>
                        <Button variant="outlined" sx={{ borderRadius: 8 }} onClick={() => setOpenDiet(true)}>Risk Groups</Button>
                        <Button variant="outlined" sx={{ borderRadius: 8 }} onClick={() => setOpenSideEffects(true)}>Side Effects</Button>
                    </Stack>

                </CardContent>
            </Card>

            {/* Dialog - Risk groups*/}
            <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={openDiet}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    Risk groups
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
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
                    <Button autoFocus onClick={handleClose} variant='contained'>
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Dialog - Side Effects */}
            <Dialog
                onClose={() => setOpenSideEffects(false)}
                aria-labelledby="customized-dialog-title"
                open={openSideEffects}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    Side Effects
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={() => setOpenSideEffects(false)}
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
                    <Button autoFocus variant='contained' onClick={() => setOpenSideEffects(false)}>
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>

        </div>

    )
}

export default MedicinesToTake