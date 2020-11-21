import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { AuthContext } from "../../contexts/auth-context";

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import faviconLogo from '../../assets/nav_logo2.png';

import "./navigationBar.css";

function NavigationBar() {
    const authContext = useContext(AuthContext);
    const [accountDrawerToggle, setAccountDrawerToogle] = useState(false);

    const login = () => {
        authContext.loginUser();
    }

    const logout = () => {
        authContext.logoutUser();
    }

    const toggleAccountDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setAccountDrawerToogle(open);
    }

    const accountDrawerItems = () => (
        <div className="list">
            <List>
                {authContext.isAuth
                ?   <ListItem button="true" key="logout" onClick={logout}>
                        <ListItemText primary="Logout" />
                    </ListItem>
                :   <React.Fragment>
                        <ListItem button="true" key="register" component={Link} to="/register">
                            <ListItemText primary="Sign up" />
                        </ListItem>
                        {/* <ListItem button="true" component={Link} to="/login" key="login"> */}
                        <ListItem button="true" onClick={login} key="login">
                            <ListItemText primary="Login" />
                        </ListItem>
                    </React.Fragment>
                }
            </List>
        </div>
    );
    
    return (
        <AppBar color="default">
            <Toolbar className="navbar">
                <img src={faviconLogo} height="55px" alt="naru_nav_logo" />
                {/* <Typography variant="h6">
                    Naru Sushi
                </Typography> */}
                {/* <div>
                    <IconButton edge="start" color="inherit" aria-label="cart">
                        <ShoppingCartIcon />
                    </IconButton>
                    <React.Fragment key="right">
                        <IconButton 
                            edge="start" 
                            color="inherit" 
                            aria-label="account"
                            onClick={toggleAccountDrawer(true)}
                        >
                            <AccountCircleIcon />
                        </IconButton>
                        <Drawer anchor="right" open={accountDrawerToggle} onClose={toggleAccountDrawer(false)}>
                            {accountDrawerItems()}
                        </Drawer>
                    </React.Fragment>
                </div> */}
            </Toolbar>
        </AppBar>
    );
}

export default NavigationBar;