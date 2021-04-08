import React from 'react';
import { Container, Grid, Typography,Box } from '@material-ui/core';
import './../styles/lightmode.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        fontFamily: ('Montserrat'),
    }
});

function Committees() {
    return (
        <div className="committee">
            <Container>
                <MuiThemeProvider theme={theme}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <div className="header">
                                <Typography variant="h3">
                                    <Box fontWeight='700' lineHeight={2}>
                                        <span className="exec">COMMITTEES </span>
                                    </Box>
                                </Typography>
                            </div>
                        </Grid>
                        <Container maxWidth='md'>
                            <Grid container spacing={0}>
                                <Grid item xs={5} style={{textAlign:"left"}}>
                                    <Typography variant="h5"><Box fontWeight='700'>Academics Committee</Box></Typography>
                                </Grid>
                                <Grid item xs={7} style={{textAlign:"left"}}>
                                    <Typography variant="h5"><Box fontWeight='700'>Community Development Committee</Box></Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={0}>
                                <Grid item xs={5} style={{textAlign:"left"}}>
                                    <Typography variant="h5"><Box fontWeight='700'>Creatives Committee</Box></Typography>
                                </Grid>
                                <Grid item xs={7} style={{textAlign:"left"}}>
                                    <Typography variant="h5"><Box fontWeight='700'>Documentation Committee</Box></Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={0}>
                                <Grid item xs={5} style={{textAlign:"left"}}>
                                    <Typography variant="h5"><Box fontWeight='700'>Finance Committee</Box></Typography>
                                </Grid>
                                <Grid item xs={7} style={{textAlign:"left"}}>
                                    <Typography variant="h5"><Box fontWeight='700'>Logistics Committee</Box></Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={0}>
                                <Grid item xs={5} style={{textAlign:"left"}}>
                                    <Typography variant="h5"><Box fontWeight='700'>Publicity Committee</Box></Typography>
                                </Grid>
                                <Grid item xs={7} style={{textAlign:"left"}}>
                                    <Typography variant="h5"><Box fontWeight='700'>Social Cultural Committee</Box></Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={0}>
                                <Grid item xs={12} style={{textAlign:"left"}}>
                                    <Typography variant="h5"><Box fontWeight='700'>Sports and Talents Committee</Box></Typography>
                                </Grid>
                            </Grid>
                        </Container>
                    </Grid>
                </MuiThemeProvider>
            </Container>
        </div>
    );
}

export default Committees;