import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import React from 'react'

const Services = () => {

    const services = [
        {
            title: "Web Development",
            desc: "Modern, responsive, and fast websites using latest technologies.",
        },
        {
            title: "Custom Software",
            desc: "Tailor-made software solutions for your business needs.",
        },
        {
            title: "Bug Fixing & Support",
            desc: "Fix issues, improve performance, and maintain your systems.",
        },
        {
            title: "Management Systems",
            desc: "ERP, CRM, and business tools to automate and scale operations.",
        },
    ];

    return (
        <>
            <Box sx={{ py: 10, backgroundColor: "background.paper" }}>
                <Container>
                    <Typography variant="h3" textAlign="center" mb={6}>
                        Our Services
                    </Typography>

                    <Grid container spacing={4}>
                        {services.map((service, index) => (
                            <Grid item size={{"md":6, 'sm':12}} key={index}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom>
                                            {service.title}
                                        </Typography>
                                        <Typography color="text.secondary">
                                            {service.desc}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Services

