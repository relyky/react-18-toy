import React from 'react'
import { Outlet } from 'react-router-dom'
import type { FC } from 'react'
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

export const Layout: FC = () => {
    return (
        <Box>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div" sx={{ mr:2 }}>
                        React.v18 Toy
                    </Typography>
                    <Button href="#/" color="inherit">Home</Button>
                    <Button href="#/hello" color="inherit">Hello</Button>
                    <Button href="#/about" color="inherit">About</Button>
                </Toolbar>
            </AppBar>
            <main>
                <Outlet />
            </main>
        </Box>
    )
}

export default Layout;