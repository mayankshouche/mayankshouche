import React from 'react';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'


const Contact = () => {
    return (
        <React.Fragment>
            <Container maxWidth = "xl">
                <Grid container spacing = {3} direction = "column" alignItems = "center" justify = "center" style = {{ minHeight: '100vh' }}>
                    <Grid item xs = {6}>
                        <EmailIcon fontSize = "large" color = "primary" />
                    </Grid>
                    <Grid item xs = {6}>
                        <Typography variant = "h3"><a href = "mailto:shouchem@utexas.edu" style = {{ textDecoration: "none" }}>shouchem@utexas.edu</a></Typography>
                    </Grid>

                    <Grid item xs = {6}>
                        <LinkedInIcon fontSize = "large" color = "primary" />
                    </Grid>
                    <Grid item xs = {12}>
                        <Typography variant = "h3" color = "inherit"><a href = "http://linkedin.com/in/mayankshouche" style = {{ textDecoration: "none" }}>linkedin.com/in/mayankshouche</a></Typography>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default Contact;