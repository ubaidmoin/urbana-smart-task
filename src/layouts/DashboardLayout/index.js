import React from 'react';
import {
    AppBar,
    Box,
    CssBaseline,
    IconButton,
    Toolbar,
    Typography
} from '@mui/material';
import {
    Menu as MenuIcon
} from '@mui/icons-material';

const drawerWidth = 240;

export default function ResponsiveDrawer(props) {
    const {children} = props
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100%)` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Urbana Smart Solutions Task
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                {children}
            </Box>
        </Box>
    );
}
