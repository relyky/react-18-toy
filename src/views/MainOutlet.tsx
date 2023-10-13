import React from 'react'
import { Outlet } from 'react-router-dom'
import type { FC } from 'react'
import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

export const Layout: FC = () => {
    return (
        <Box>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div" sx={{ mr: 2 }}>
                        <Link href="#/" color="inherit" underline="none">
                            React.v18 Toy
                        </Link>
                    </Typography>
                    <Button href="#/vis-network" color="inherit">Vis Network</Button>
                    <Button href="#/about" color="inherit">About</Button>
                    <Box sx={{ flexGrow: 1 }}></Box>
                    <span>v0.08</span>
                </Toolbar>
            </AppBar>
            <main>
                <Outlet />
            </main>
        </Box>
    )
}

export default Layout;