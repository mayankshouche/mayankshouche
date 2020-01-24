import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/link'

//TODO: https://material-ui.com/components/lists/#simple-list


const NavBar = () => {
    return (
        <React.Fragment>
            <AppBar position = "fixed">
                <Toolbar>
                    <Typography variant = "h6" color = "inherit" aria-label ="menu">
                        Mayank Shouche
                    </Typography>
                    
                    <List component = "nav">
                        <ListItem component = "div">
                            <ListItemText inset>
                                   <Link color = "inherit" component = {RouterLink} to = "/"> Home </Link>
                            </ListItemText>

                            <ListItemText inset>
                                   <Link color = "inherit" component = {RouterLink} to = "/contact"> Contact </Link>
                            </ListItemText>

                            <ListItemText inset>
                                   <Link color = "inherit" component = {RouterLink} to = "/about"> About </Link>
                            </ListItemText>
                        </ListItem>
                    </List>
                    
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

export default NavBar;