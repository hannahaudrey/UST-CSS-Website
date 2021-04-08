import React from 'react';
import { Container, Grid, Typography,Box } from '@material-ui/core';
import './../styles/lightmode.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        fontFamily: ('Montserrat'),
    }
});

function ExecutiveBoard() {
    return (
        <div className="executiveBoard">
            <Container>
                <MuiThemeProvider theme={theme}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <div className="header">
                                <Typography variant="h3">
                                    <Box fontWeight='700' lineHeight={2}>
                                        <span className="exec">EXECUTIVE </span>BOARD
                                    </Box>
                                </Typography>
                            </div>
                        </Grid>
                        <Container maxWidth='md'>
                            <Grid container spacing={0}>
                                <Grid item xs={6} style={{textAlign:"center"}}>
                                    <Typography variant="h5"><Box fontWeight='700'>Asst. Prof. Jonathan B. Cabero</Box></Typography>
                                </Grid>
                                <Grid item xs={6} style={{textAlign:"center"}}>
                                    <Typography variant="h5"><Box fontWeight='700'>Asst. Prof. Donata D. Acula</Box></Typography>
                                </Grid>
                                <Grid item xs={6} style={{textAlign:"center"}}>
                                    <Typography className="position" variant="subtitle2"><Box lineHeight={2}>Adviser</Box></Typography>
                                </Grid>
                                <Grid item xs={6} style={{textAlign:"center"}}>
                                    <Typography className="position" variant="subtitle2"><Box lineHeight={2}>Co-Adviser</Box></Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={0}>
                                <Grid item xs={12} style={{textAlign:"center"}}>
                                    <Typography variant="h5"><Box fontWeight='700'>Patrick Andrew F. Dy Echo</Box></Typography>
                                </Grid>
                                <Grid item xs={12} style={{textAlign:"center"}}>
                                    <Typography className="position" variant="subtitle2"><Box lineHeight={2}>President</Box></Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={0}>
                                <Grid item xs={6} style={{textAlign:"center"}}>
                                    <Typography variant="h5"><Box fontWeight='700'>John Ross P. Nator</Box></Typography>
                                </Grid>
                                <Grid item xs={6} style={{textAlign:"center"}}>
                                    <Typography variant="h5"><Box fontWeight='700'>Paulo O. Sablaya</Box></Typography>
                                </Grid>
                                <Grid item xs={6} style={{textAlign:"center"}}>
                                    <Typography className="position" variant="subtitle2"><Box lineHeight={2}>Internal Vice President</Box></Typography>
                                </Grid>
                                <Grid item xs={6} style={{textAlign:"center"}}>
                                    <Typography className="position" variant="subtitle2"><Box lineHeight={2}>External Vice President</Box></Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={0}>
                                <Grid item xs={6} style={{textAlign:"center"}}>
                                    <Typography variant="h5"><Box fontWeight='700'>Trixcie Jane S. Mirasol</Box></Typography>
                                </Grid>
                                <Grid item xs={6} style={{textAlign:"center"}}>
                                    <Typography variant="h5"><Box fontWeight='700'>Stephanie Joyce J. Chen</Box></Typography>
                                </Grid>
                                <Grid item xs={6} style={{textAlign:"center"}}>
                                    <Typography className="position" variant="subtitle2"><Box lineHeight={2}>Secretary</Box></Typography>
                                </Grid>
                                <Grid item xs={6} style={{textAlign:"center"}}>
                                    <Typography className="position" variant="subtitle2"><Box lineHeight={2}>Assistant Secretary</Box></Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={0}>
                                <Grid item xs={6} style={{textAlign:"center"}}>
                                    <Typography variant="h5"><Box fontWeight='700'>Marionne Virgil C. Quintana</Box></Typography>
                                </Grid>
                                <Grid item xs={6} style={{textAlign:"center"}}>
                                    <Typography variant="h5"><Box fontWeight='700'>John Angelo C. Algarne</Box></Typography>
                                </Grid>
                                <Grid item xs={6} style={{textAlign:"center"}}>
                                    <Typography className="position" variant="subtitle2"><Box lineHeight={2}>Treasurer</Box></Typography>
                                </Grid>
                                <Grid item xs={6} style={{textAlign:"center"}}>
                                    <Typography className="position" variant="subtitle2"><Box lineHeight={2}>Auditor</Box></Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={0}>
                                <Grid item xs={6} style={{textAlign:"center"}}>
                                    <Typography variant="h5"><Box fontWeight='700'>Maria Juliana S. Rolluqui</Box></Typography>
                                </Grid>
                                <Grid item xs={6} style={{textAlign:"center"}}>
                                    <Typography variant="h5"><Box fontWeight='700'>Andrea Nicolle C. Corpus</Box></Typography>
                                </Grid>
                                <Grid item xs={6} style={{textAlign:"center"}}>
                                    <Typography className="position" variant="subtitle2"><Box lineHeight={2}>Public Relations Officer</Box></Typography>
                                </Grid>
                                <Grid item xs={6} style={{textAlign:"center"}}>
                                    <Typography className="position" variant="subtitle2"><Box lineHeight={2}>Fourth Year Representative</Box></Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={0}>
                                <Grid item xs={6} style={{textAlign:"center"}}>
                                    <Typography variant="h5"><Box fontWeight='700'>Vince Rian M. Misalucha</Box></Typography>
                                </Grid>
                                <Grid item xs={6} style={{textAlign:"center"}}>
                                    <Typography variant="h5"><Box fontWeight='700'>Chlarizza Torres</Box></Typography>
                                </Grid>
                                <Grid item xs={6} style={{textAlign:"center"}}>
                                    <Typography className="position" variant="subtitle2"><Box lineHeight={2}>Third Year Representative</Box></Typography>
                                </Grid>
                                <Grid item xs={6} style={{textAlign:"center"}}>
                                    <Typography className="position" variant="subtitle2"><Box lineHeight={2}>Second Year Representative</Box></Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={0}>
                                <Grid item xs={6} style={{textAlign:"center"}}>
                                    <Typography variant="h5"><Box fontWeight='700'>Hannah Audrey T. Carpio</Box></Typography>
                                </Grid>
                                <Grid item xs={6} style={{textAlign:"center"}}>
                                    <Typography variant="h5"><Box fontWeight='700'>Chelsea Lyca G. Romero</Box></Typography>
                                </Grid>
                                <Grid item xs={6} style={{textAlign:"center"}}>
                                    <Typography className="position" variant="subtitle2"><Box lineHeight={2}>First Year Representative</Box></Typography>
                                </Grid>
                                <Grid item xs={6} style={{textAlign:"center"}}>
                                    <Typography className="position" variant="subtitle2"><Box lineHeight={2}>Chief of Staff</Box></Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={0}>
                                <Grid item xs={6} style={{textAlign:"center"}}>
                                    <Typography variant="h5"><Box fontWeight='700'>Carl Joseph A. Paez</Box></Typography>
                                </Grid>
                                <Grid item xs={6} style={{textAlign:"center"}}>
                                    <Typography variant="h5"><Box fontWeight='700'>Nhel John Paul D.L. Gonzales</Box></Typography>
                                </Grid>
                                <Grid item xs={6} style={{textAlign:"center"}}>
                                    <Typography className="position" variant="subtitle2"><Box lineHeight={2}>Director for Digital Productions</Box></Typography>
                                </Grid>
                                <Grid item xs={6} style={{textAlign:"center"}}>
                                    <Typography className="position" variant="subtitle2"><Box lineHeight={2}>Director for Community Development</Box></Typography>
                                </Grid>
                            </Grid>
                            <Grid container spacing={0}>
                                <Grid item xs={12} style={{textAlign:"center"}}>
                                    <Typography variant="h5"><Box fontWeight='700'>Jahann Patrick G. Delgado</Box></Typography>
                                </Grid>
                                <Grid item xs={12} style={{textAlign:"center"}}>
                                    <Typography className="position" variant="subtitle2">Thomasian Wellness Advocate</Typography>
                                </Grid>
                            </Grid>
                        </Container>
                    </Grid>
                </MuiThemeProvider>
            </Container>
        </div>
    );
}

export default ExecutiveBoard;