import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'

const Home = () => {
    return (
        <React.Fragment>
            <Container maxWidth = "xl">
                <Grid container spacing = {0} direction = "column" alignItems = "center" justify = "center" style = {{ minHeight: '100vh' }}>
                    <Grid item xs = {12}>
                        <Typography variant = "h2">Hi, my name is <b>Mayank Shouche</b>!</Typography>
                    </Grid>
                    <Grid item xs = {12}>
                        <Typography variant = "h4">I'm a student at UT Austin,</Typography>
                    </Grid>
                    <Grid item xs = {12}>
                        <Typography variant = "h4">full stack developer in training,</Typography>
                    </Grid>
                    
                    <Grid item xs = {12}>
                        <Typography variant = "h4">and computer engineer.</Typography>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default Home;