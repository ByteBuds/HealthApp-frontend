import React from 'react'
import { useState } from 'react';
import { useAtom } from "jotai";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

const diseases = [
    {
        id: 1,
        name: "Common cold",
        date: "26-05-2023",
        doctor: "Dr.John Doe",
        docDesciption: "A viral infection of the upper respiratory tract that leads to symptoms like runny nose, sneezing, sore throat, and cough.",
        treatment: "Rest, hydration, and over-the-counter cold remedies.",
        medPrescribed: "Over-the-counter cough syrup",
        severity: "mild"
    },
    {
        id: 2,
        name: "Influenza",
        date: "18-01-2023",
        doctor: "Dr. Sarah Smith",
        docDesciption: "Respiratory illness caused by influenza viruses, leading to symptoms such as high fever, muscle aches, and fatigue.",
        treatment: "Antiviral medications, rest, and flu vaccines for prevention.",
        medPrescribed: "Oseltamivir (Tamiflu)",
        severity: "critical"
    },
    {
        id: 3,
        name: "Dental Cavities",
        date: "12-08-2022",
        doctor: "Dr.John Doe",
        docDesciption: "The erosion of tooth enamel due to bacteria and acids, resulting in cavities, toothache, and dental sensitivity.",
        treatment: "Dental fillings, improved oral hygiene, and regular dental check-ups.",
        medPrescribed: "Dental filling and fluoride toothpaste",
        severity: "mild"
    }
]

const MedicalHistory = () => {
    const [add, setAdd] = useState(false)
    return (
        <div>
            {add ? (
                <div>add a medical history</div>
            ) : (
                <Grid container direction="column" sx={{ paddingY: "2rem", paddingX: "5rem" }}>
                    <Grid item container direction="row" sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Typography sx={{ fontWeight: 600, fontSize: "2rem" }}>
                            Medical History
                        </Typography>
                        <Button sx={{ borderRadius: "5rem" }} onClick={() => setAdd(!add)}>
                            <AddCircleRoundedIcon sx={{ fontSize: "3rem" }} />
                        </Button>
                    </Grid>
                    <Grid item container direction="column">
                        <Typography sx={{ fontWeight: 500, fontSize: "1.2rem" }}>Past Ailments</Typography>
                        <List>
                            {diseases.map((disease, id) => (

                                <div>
                                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "50%" }}>
                                        <ListItem>{disease.name}</ListItem>
                                        <ListItem>{disease.date}</ListItem>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "50%" }}>
                                        <ListItem>Severity:</ListItem>
                                        <ListItem>{disease.severity}</ListItem>
                                    </div>
                                    <div style={{
                                        display: "flex", flexDirection: "row",
                                        justifyContent: "space-between", alignItems: "start", width: "50%"
                                    }}>
                                        <ListItem>Doctor:</ListItem>
                                        <ListItem>{disease.doctor}</ListItem>
                                    </div>

                                    <div style={{
                                        display: "flex", flexDirection: "row",
                                        justifyContent: "space-between", alignItems: "start", width: "50%"
                                    }}>
                                        <ListItem>Doctor's description:</ListItem>
                                        <ListItem>{disease.docDesciption}</ListItem>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "start", width: "50%" }}>
                                        <ListItem>Treatment:</ListItem>
                                        <ListItem>{disease.treatment}</ListItem>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "start", width: "50%" }}>
                                        <ListItem>Medicine Prescribed:</ListItem>
                                        <ListItem>{disease.medPrescribed}</ListItem>
                                    </div>
                                    {/* <Typography>{disease.docDesciption}</Typography> */}
                                    <Divider sx={{ borderBottomWidth: 2 }} />
                                </div>

                            ))}

                        </List>
                    </Grid>
                </Grid>
            )}

        </div>

    )
}

export default MedicalHistory