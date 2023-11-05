import React from 'react'
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';


const medicines = [
    {
        name: "Paracetamol",
        quantity: "500mg",
        cost: 20,
    },
    {
        name: "Amoxicillin",
        quantity: "250mg",
        cost: 35,
    },
    {
        name: "Aspirin",
        quantity: "100mg",
        cost: 25,
    },
    {
        name: "Ciprofloxacin",
        quantity: "250mg",
        cost: 40,
    },
    {
        name: "Omeprazole",
        quantity: "20mg",
        cost: 45,
    },
    // {
    //     name: "Ibuprofen",
    //     quantity: "400mg",
    //     cost: 12,
    // },
    // {
    //     name: "Lisinopril",
    //     quantity: "10mg",
    //     cost: 25,
    // },
    // {
    //     name: "Atorvastatin",
    //     quantity: "20mg",
    //     cost: 35,
    // },
    // {
    //     name: "Metformin",
    //     quantity: "500mg",
    //     cost: 18,
    // },
    // {
    //     name: "Levothyroxine",
    //     quantity: "50mcg",
    //     cost: 22,
    // },
    // {
    //     name: "Amlodipine",
    //     quantity: "5mg",
    //     cost: 28,
    // },
    // {
    //     name: "Prednisone",
    //     quantity: "10mg",
    //     cost: 40,
    // },
    // {
    //     name: "Diazepam",
    //     quantity: "5mg",
    //     cost: 15,
    // },
    // {
    //     name: "Cetirizine",
    //     quantity: "10mg",
    //     cost: 8,
    // },
    // {
    //     name: "Ranitidine",
    //     quantity: "150mg",
    //     cost: 12,
    // },
];


const BillingList = () => {
    return (
        <div>
            <Card sx={{ borderRadius: 5 }}>
                <CardContent>
                    <ol>
                        {medicines.map((medicine, index) => (
                            <li style={{ marginTop: 15 }}>
                                <Grid container direction="row" justifyContent="space-between" alignItems="center">
                                    <Grid item>
                                        <Typography sx={{ fontWeight: 600 }}>{medicine.name}</Typography>
                                        <Typography>{medicine.quantity}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography>{"Rs " + medicine.cost + "/-"}</Typography>
                                    </Grid>
                                </Grid>
                            </li>
                        ))}


                    </ol>
                    {/* <Grid container direction="row" justifyContent="space-between" alignItems="center">
                    <Grid item>
                        <Typography sx={{ fontWeight: 600 }}>Paracetamol</Typography>
                        <Typography>3 Strips, 500mg</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>Rs 39/-</Typography>
                    </Grid>
                </Grid> */}

                </CardContent>
            </Card>

            <Divider sx={{ borderBottomWidth: 2, my: "1rem" }} />

            <Card sx={{ mb: "2rem" }}>
                <CardContent >
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <Typography sx={{ fontWeight: 600 }}>Price(6 items)</Typography>
                        <Typography sx={{ fontWeight: 600 }}>₹ 165/-</Typography>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <Typography sx={{ fontWeight: 600 }}>Discount</Typography>
                        <Typography sx={{ fontWeight: 600, color: "green" }}>₹ -20/-</Typography>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <Typography sx={{ fontWeight: 600 }}>Total Amount</Typography>
                        <Typography sx={{ fontWeight: 600, }}>₹ 145/-</Typography>
                    </div>
                    <Typography sx={{ fontWeight: 600, color: "green" }}>You save ₹20 in this order </Typography>
                    <Grid sx={{ display: "flex", flexDirection: "row", mt: "1rem" }} gap={2}>
                        <Button variant="contained" startIcon={<ShoppingCartOutlinedIcon />} >Buy Online</Button>
                        <Button variant="outlined" startIcon={<LocationOnOutlinedIcon />} >See Location</Button>

                    </Grid>

                </CardContent>
            </Card>

        </div>
    )
}

export default BillingList