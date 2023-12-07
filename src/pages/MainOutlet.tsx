import type { MouseEvent } from 'react'
import { Outlet } from 'react-router-dom'
import { useRef, type FC, useState } from 'react'
import { AppBar, Box, Button, IconButton, Link, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'

export const Layout: FC = () => {
    const refMenuGroupA = useRef(null);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    function openMenu(e: MouseEvent<HTMLButtonElement>) {
        setAnchorEl(e.currentTarget);
    }

    function closeMenu() {
        setAnchorEl(null);
    }

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
                    <Button href="#/indexed-db" color="inherit">Indexed DB</Button>
                    <Button href="#/vis-network" color="inherit">Vis Network</Button>

                    <Button ref={refMenuGroupA} onClick={openMenu} color="inherit" sx={{ ml: 1 }} >
                        React Flow
                    </Button>
                    <Menu anchorEl={refMenuGroupA.current}
                        open={(!!anchorEl && anchorEl === refMenuGroupA.current)}
                        onClose={closeMenu}>
                        <MenuItem onClick={closeMenu} component={RouterLink} to="/react-flow">教學</MenuItem>
                        <MenuItem onClick={closeMenu} component={RouterLink} to="/react-flow-2">Delete Middle Node</MenuItem>
                    </Menu>

                    <Button href="#/affect-network" color="inherit">Affect Network</Button>
                    <Button href="#/about" color="inherit">About</Button>
                    <Box sx={{ flexGrow: 1 }}></Box>
                    <span>v0.1.0</span>
                </Toolbar>
            </AppBar>
            <main>
                <Outlet />
            </main>
        </Box>
    )
}

export default Layout;