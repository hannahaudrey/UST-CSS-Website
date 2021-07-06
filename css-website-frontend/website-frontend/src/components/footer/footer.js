import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Container, Box } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../theme/theme';
import FooterIcons from './footerIcons';
import FooterBGL from '../../assets/images/FooterBGL.png';


class Footer extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Box style={{backgroundImage: `url(${FooterBGL})`}} p={5}>
                    <Container p={2}>
                        <FooterIcons/>
                        <Box mt={5}>
                            <Typography align='center'> UST Computer Science Society </Typography>
                            <Typography align='center'>
                                All Rights Reserved
                                <Box fontWeight={700} display='inline'> 2020 </Box>
                            </Typography>
                        </Box>
                    </Container>
                </Box>
            </MuiThemeProvider>
        )
    }
};

export default Footer;