import React, { useEffect, useRef, useState } from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Link from '@material-ui/core/Link';

import LogoPage from "../LogoPage/LogoPage";
import Appetizer from "../Appetizer/Appetizer";
import SaladAndSoup from "../SaladAndSoup/SaladAndSoup";
import Alacarte from "../ALaCarte/Alacarte";
import TOC from "../../components/TOC/TOC";
import Cart from "../../components/Cart/Cart";

import "./content.css";

function Contents() {
    const MENU_TOP_OFFSET = 70;
    const [listOfMenuSelections, setListOfMenuSelections] = useState([
        "notSelectedItem"
    ]);
    // const [appetizerStyle, setAppetizerStyle] = useState('notSelectedItem');
    const appetizer = useRef(null);
    const saladAndSoup = useRef(null);
    const alacarte = useRef(null);
    const preventDefault = (event) => event.preventDefault();

    useEffect(() => {
        // Add a Listener to the handleScroll function.
        window.addEventListener('scroll', handleScroll, true);
        
    });

    const handleScrollTo = (event) => {
        event.preventDefault();
        window.scrollTo(0, appetizer.current.offsetTop-MENU_TOP_OFFSET);

    }

    const handleScroll = () => {
        const scrollY = window.scrollY;

        if(appetizer.current.offsetTop <= scrollY+MENU_TOP_OFFSET
            && scrollY+MENU_TOP_OFFSET <= appetizer.current.offsetTop + appetizer.current.offsetHeight
            && listOfMenuSelections[0] === "notSelectedItem")
        {
            console.log("appetizer");
            const newArray = [];
            newArray.fill('notSelectedItem');
            newArray[0] = 'selectedItem';
            setListOfMenuSelections(newArray);
            // setAppetizerStyle('selectedItem');
        }
        // else
        // {
        //     const newArray = new Array(listOfMenuSelections.length).fill('notSelectedItem');
        //     setListOfMenuSelections(newArray);
        // }
        console.log(listOfMenuSelections);
        console.log("scroll y " + scrollY );
        // console.log(appetizer.current.offsetTop);
        // console.log(appetizer.current.offsetHeight);
    }

    const handleSelection = () => {
        return 
    }

    return (
        <div className="root-container" onScroll={handleScroll}>
            <Grid container>
                <Grid item xs>
                    <List component="nav" disablePadding={true} className="toc">
                        <ListItem dense={true} disableGutters={true}>
                            <Typography variant="button">
                                Menus
                            </Typography>
                        </ListItem>
                        <ListItem dense={true} disableGutters={true} className={listOfMenuSelections[0]}>
                        {/* <ListItem dense={true} disableGutters={true} className={appetizerStyle}> */}
                            <Typography variant="body2" display="block">
                                <Link href="#" onClick={handleScrollTo} underline="none" color="textSecondary">
                                    Appetizers
                                </Link>
                            </Typography>
                        </ListItem>
                        <ListItem dense={true} disableGutters={true} ref={saladAndSoup}>
                            <Typography variant="body2" display="block">
                                <Link href="#saladandsoup" underline="none" color="textSecondary">
                                    Salad & Soup
                                </Link>
                            </Typography>
                        </ListItem>
                        <ListItem dense={true} disableGutters={true}>
                            <Typography variant="body2" display="block">
                                <Link href="#" onClick={preventDefault} underline="none" color="textSecondary">
                                    A La Carte
                                </Link>
                            </Typography>
                        </ListItem>
                        <ListItem dense={true} disableGutters={true}>
                            <Typography variant="body2" display="block">
                                <Link href="#" onClick={preventDefault} underline="none" color="textSecondary">
                                    Tempuras
                                </Link>
                            </Typography>
                        </ListItem>
                        <ListItem dense={true} disableGutters={true}>
                            <Typography variant="body2" display="block">
                                <Link href="#" onClick={preventDefault} underline="none" color="textSecondary">
                                    Rolls
                                </Link>
                            </Typography>
                        </ListItem>
                        <ListItem dense={true} disableGutters={true}>
                            <Typography variant="body2" display="block">
                                <Link href="#" onClick={preventDefault} underline="none" color="textSecondary">
                                    Special Rolls
                                </Link>
                            </Typography>
                        </ListItem>
                        <ListItem dense={true} disableGutters={true}>
                            <Typography variant="body2" display="block">
                                <Link href="#" onClick={preventDefault} underline="none" color="textSecondary">
                                    Vegetarian Rolls
                                </Link>
                            </Typography>
                        </ListItem>
                        <ListItem dense={true} disableGutters={true}>
                            <Typography variant="body2" display="block">
                                <Link href="#" onClick={preventDefault} underline="none" color="textSecondary">
                                    Nigiris
                                </Link>
                            </Typography>
                        </ListItem>
                        <ListItem dense={true} disableGutters={true}>
                            <Typography variant="body2" display="block">
                                <Link href="#" onClick={preventDefault} underline="none" color="textSecondary">
                                    Sashimi
                                </Link>
                            </Typography>
                        </ListItem>
                        <ListItem dense={true} disableGutters={true}>
                            <Typography variant="body2" display="block">
                                <Link href="#" onClick={preventDefault} underline="none" color="textSecondary">
                                    Set Dinners
                                </Link>
                            </Typography>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={8}>
                    <LogoPage />
                    <Appetizer setAppetizerLocation={appetizer} />
                    <SaladAndSoup setSaladAndSoupLocation={saladAndSoup} />
                    <Alacarte setAlacarteLocation={alacarte} />
                </Grid>
                <Grid item xs>
                    <Cart />
                </Grid>
            </Grid>
        </div>
    );
}

export default Contents;