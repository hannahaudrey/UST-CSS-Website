import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Grid, Link } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import CSSBlack from '../../assets/images/CSSBlack.png';
import NavbarItems from './navbarItems';
import theme from '../theme/theme';


const flexContainer = {
    display: 'flex',
    flexDirection: 'row',
    padding: 0
};

class Header extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <AppBar color='primary.light'>
                    <Toolbar>

                        <IconButton>
                            <img src={CSSBlack} alt='CSS' width='65em' height='50em' />
                        </IconButton>
                        <Typography display='inline' color='palette.primary.main'>
                            <Box fontSize='h6.fontSize'>
                                <Box fontWeight={700} display='inline'> UST </Box>
                                COMPUTER SCIENCE SOCIETY
                            </Box>
                        </Typography>

                        <Box ml='auto'>
                            <Grid container display='flex' spacing={4} justify='center'>
                                {NavbarItems.map((item, index) => {
                                    return (
                                        <Grid item key={index}>
                                            <Link href={item.link}>{item.title}</Link>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </Box>

                    </Toolbar>
                </AppBar>
            </MuiThemeProvider>
        )
    }
}

export default Header;