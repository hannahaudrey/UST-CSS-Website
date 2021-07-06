import React from 'react';
import { Grid, Link } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../theme/fontawesome';


class Footer extends React.Component {
    render() {
        return (
            <Grid container display='flex' spacing={4} justify='center'>
                <Grid item>
                    <Link href='#'><FontAwesomeIcon icon={['fab', 'facebook']} size='3x' color='#000000'/></Link>
                </Grid>
                <Grid item>
                    <Link href='#'><FontAwesomeIcon icon={['fab', 'instagram']} size='3x' color='#000000'/></Link>
                </Grid>
                <Grid item>
                    <Link href='#'><FontAwesomeIcon icon={['fab', 'twitter']} size='3x' color='#000000'/></Link>
                </Grid>
            </Grid>
        )
    }
};

export default Footer;