import { Button, Container, Typography } from '@mui/material'
import React from 'react'

const Hero = () => {
    return (
        <Container sx={{ py: 10, textAlign: "center" }}>
            <Typography variant="h2" gutterBottom>
                We Build <span style={{ color: "#fbc02d" }}>Powerful Software</span>
            </Typography>
            <Typography variant="h6" color="text.secondary" mb={4}>
                Blackhood is a modern software company delivering secure, scalable,
                and high-performance solutions.
            </Typography>
            <Button size="large" variant="contained" color="primary">
                Get Started
            </Button>
        </Container>
    )
}

export default Hero