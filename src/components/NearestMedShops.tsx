import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const NearestMedShops = () => {
    return (
        <Card>
            <CardContent>
                <Typography sx={{ fontWeight: 700, fontSize: "1.2rem" }}>Medicare Pharmacy</Typography>
                <Typography>Address: 123 Elm Street, Cityville</Typography>
            </CardContent>
        </Card>
    )
}

export default NearestMedShops