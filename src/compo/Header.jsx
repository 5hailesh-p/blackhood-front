import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Header = () => {
    return (
        <>

            <AppBar position="static" color="transparent" elevation={0}>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1, color: "primary.main" }}>
                        BLACKHOOD
                    </Typography>
                    <Button color="secondary">Services</Button>
                    <Button color="secondary">About</Button>
                    <Button variant="contained" color="primary">
                        Contact
                    </Button>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header