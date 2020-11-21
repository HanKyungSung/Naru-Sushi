import React, { useEffect, useRef, useState } from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Link from '@material-ui/core/Link';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import LogoPage from '../LogoPage/LogoPage';
import Appetizer from '../Appetizer/Appetizer';
import SaladAndSoup from '../SaladAndSoup/SaladAndSoup';
import Alacarte from '../ALaCarte/Alacarte';
import Tempuras from '../Tempuras/Tempuras';
import Rolls from '../Rolls/Rolls';
import SpecialRolls from '../SpecialRolls/SpecialRolls';
import VegetarianRolls from '../VegetarianRolls/VegetarianRolls';
import NigirisAndSashimi from '../NigirisAndSashimi/NigirisAndSashimi';

import Cart from "../../components/Cart/Cart";

import "./content.css";

function Contents() {
    const MENU_TOP_OFFSET = 70;
    const [listOfMenuSelections, setListOfMenuSelections] = useState(Array(8).fill("notSelectedItem"));
    const [windowSize, setWindowSize] = useState(null);
    const [menuSize, setMenuSize] = useState(8);

    const appetizer = useRef(null);
    const saladAndSoup = useRef(null);
    const alacarte = useRef(null);
    const tempuras = useRef(null);
    const rolls = useRef(null);
    const specialRolls = useRef(null);
    const vegetarianRolls = useRef(null);
    const nigirisAndSashimi = useRef(null);

    useEffect(() => {
        // Add a Scroll Listener to the handleScroll function.
        window.addEventListener('scroll', handleScroll);
        // Add a Resize Listener to the handleResize function.
        window.addEventListener('resize', handleResize);

        // Initialize once.
        // Better practice is here
        // https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
        if(windowSize === null)
        {
            handleResize();
        }

        return () => {
            // Remove the resize listener from the function when component will unmount.
            window.removeEventListener('resize', handleResize);
        }
    });

    const handleScrollTo = (event) => {
        event.preventDefault();
        // The currentTarget property always refers to the element whose event listener triggered the event, 
        // opposed to the target property, which returns the element that triggered the event. (dynamically-generated).
        const componentId = event.currentTarget.id;

        if(componentId === "menu")
        {
            window.scrollTo(0, 65);
        }
        else if(componentId === "appetizer")
        {
            window.scrollTo(0, appetizer.current.offsetTop-MENU_TOP_OFFSET);
        }
        else if(componentId === "saladAndSoup")
        {
            window.scrollTo(0, saladAndSoup.current.offsetTop-MENU_TOP_OFFSET+5);
        }
        else if(componentId === "alacarte")
        {
            window.scrollTo(0, alacarte.current.offsetTop-MENU_TOP_OFFSET+5);
        }
        else if(componentId === "tempuras")
        {
            window.scrollTo(0, tempuras.current.offsetTop-MENU_TOP_OFFSET+5);
        }
        else if(componentId === "rolls")
        {
            window.scrollTo(0, rolls.current.offsetTop-MENU_TOP_OFFSET+5);
        }
        else if(componentId === "specialRolls")
        {
            window.scrollTo(0, specialRolls.current.offsetTop-MENU_TOP_OFFSET+5);
        }
        else if(componentId === "vegetarianRolls")
        {
            window.scrollTo(0, vegetarianRolls.current.offsetTop-MENU_TOP_OFFSET+5);
        }
        else if(componentId === "nigirisAndSashimi")
        {
            window.scrollTo(0, nigirisAndSashimi.current.offsetTop-MENU_TOP_OFFSET+5);
        }
    }

    /**
     * Material-ui default breakpoints
     *  xs, extra-small: 0px
     *  sm, small: 600px
     *  md, medium: 960px
     *  lg, large: 1280px
     *  xl, extra-large: 1920px
     */
    const handleResize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        if(width >= 1920)
        {
            setWindowSize('xl');
            setMenuSize(8);
        }
        else if(width >= 1280)
        {
            setWindowSize('lg');
            setMenuSize(8);
        }
        else if(width >= 960)
        {
            setWindowSize('md');
            setMenuSize(12);
        }
        else if(width >= 600)
        {
            setWindowSize('sm');
            setMenuSize(12);
        }
        else
        {
            setWindowSize('xs');
            setMenuSize(12);
        }
    }

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const currPos = scrollY+MENU_TOP_OFFSET;
        const newArray = [...listOfMenuSelections];

        if(appetizer.current.offsetTop <= currPos
            && currPos <= appetizer.current.offsetTop + appetizer.current.clientHeight)
        {
            // console.log("appetizer");
            if(listOfMenuSelections[0] === "notSelectedItem")
            {
                newArray.fill('notSelectedItem');
                newArray[0] = 'selectedItem';
                setListOfMenuSelections(newArray);
                // We need to remove the scroll listener to prevent listen multiple scroll listeners.
                window.removeEventListener('scroll', handleScroll);
            }
            // Note: Event call setState hook middle of function, the function will not halt.
            // State will be update after execute the function.
        }
        else if(saladAndSoup.current.offsetTop <= currPos
                && currPos <= saladAndSoup.current.offsetTop + saladAndSoup.current.clientHeight)
        {
            if(listOfMenuSelections[1] === "notSelectedItem")
            {
                newArray.fill("notSelectedItem");
                newArray[1] = "selectedItem";
                setListOfMenuSelections(newArray);
                // We need to remove the scroll listener to prevent listen multiple scroll listeners.
                window.removeEventListener('scroll', handleScroll);
            }
        }
        else if(alacarte.current.offsetTop <= currPos
                && currPos <= alacarte.current.offsetTop + alacarte.current.clientHeight)
        {
            if(listOfMenuSelections[2] === "notSelectedItem")
            {
                newArray.fill("notSelectedItem");
                newArray[2] = "selectedItem";
                setListOfMenuSelections(newArray);
                // We need to remove the scroll listener to prevent listen multiple scroll listeners.
                window.removeEventListener('scroll', handleScroll);
            }
        }
        else if(tempuras.current.offsetTop <= currPos
                && currPos <= tempuras.current.offsetTop + tempuras.current.clientHeight)
        {
            if(listOfMenuSelections[3] === "notSelectedItem")
            {
                newArray.fill("notSelectedItem");
                newArray[3] = "selectedItem";
                setListOfMenuSelections(newArray);
                // We need to remove the scroll listener to prevent listen multiple scroll listeners.
                window.removeEventListener('scroll', handleScroll);
            }
        }
        else if(rolls.current.offsetTop <= currPos
                && currPos <= rolls.current.offsetTop + rolls.current.clientHeight)
        {
            if(listOfMenuSelections[4] === "notSelectedItem")
            {
                newArray.fill("notSelectedItem");
                newArray[4] = "selectedItem";
                setListOfMenuSelections(newArray);
                // We need to remove the scroll listener to prevent listen multiple scroll listeners.
                window.removeEventListener('scroll', handleScroll);
            }  
        }
        else if(specialRolls.current.offsetTop <= currPos
                && currPos <= specialRolls.current.offsetTop + specialRolls.current.clientHeight)
        {
            if(listOfMenuSelections[5] === "notSelectedItem")
            {
                newArray.fill("notSelectedItem");
                newArray[5] = "selectedItem";
                setListOfMenuSelections(newArray);
                // We need to remove the scroll listener to prevent listen multiple scroll listeners.
                window.removeEventListener('scroll', handleScroll);
            }  
        }
        else if(vegetarianRolls.current.offsetTop <= currPos
                && currPos <= vegetarianRolls.current.offsetTop + vegetarianRolls.current.clientHeight)
        {
            if(listOfMenuSelections[6] === "notSelectedItem")
            {
                newArray.fill("notSelectedItem");
                newArray[6] = "selectedItem";
                setListOfMenuSelections(newArray);
                // We need to remove the scroll listener to prevent listen multiple scroll listeners.
                window.removeEventListener('scroll', handleScroll);
            }  
        }
        else if(nigirisAndSashimi.current.offsetTop <= currPos
                && currPos <= nigirisAndSashimi.current.offsetTop + nigirisAndSashimi.current.clientHeight)
        {
            if(listOfMenuSelections[7] === "notSelectedItem")
            {
                newArray.fill("notSelectedItem");
                newArray[7] = "selectedItem";
                setListOfMenuSelections(newArray);
                // We need to remove the scroll listener to prevent listen multiple scroll listeners.
                window.removeEventListener('scroll', handleScroll);
            }  
        }
        else
        {
            newArray.fill('notSelectedItem');
            setListOfMenuSelections(newArray);
            window.removeEventListener('scroll', handleScroll);
        }
    }

    const handleTableOfContentDisplay = () => {
        let component = (
            <List component="nav" disablePadding={true} className="toc">
                <ListItem dense={true} disableGutters={true}>
                    <Typography variant="button">
                        Menus
                    </Typography>
                </ListItem>
                <ListItem dense={true} disableGutters={true}>
                    <Typography variant="body2" display="block">
                        <Link id="appetizer" href="#" onClick={handleScrollTo} underline="none" color="textSecondary">
                            <span className={listOfMenuSelections[0]}>Appetizers</span>
                        </Link>
                    </Typography>
                </ListItem>
                <ListItem dense={true} disableGutters={true}>
                    <Typography variant="body2" display="block">
                        <Link id="saladAndSoup" href="#" onClick={handleScrollTo} underline="none" color="textSecondary">
                            <span className={listOfMenuSelections[1]}>Salad & Soup</span>
                        </Link>
                    </Typography>
                </ListItem>
                <ListItem dense={true} disableGutters={true}>
                    <Typography variant="body2" display="block">
                        <Link id="alacarte" href="#" onClick={handleScrollTo} underline="none" color="textSecondary">
                            <span className={listOfMenuSelections[2]}>A La Carte</span>
                        </Link>
                    </Typography>
                </ListItem>
                <ListItem dense={true} disableGutters={true}>
                    <Typography variant="body2" display="block">
                        <Link id="tempuras" href="#" onClick={handleScrollTo} underline="none" color="textSecondary">
                        <span className={listOfMenuSelections[3]}>Tempuras</span>
                        </Link>
                    </Typography>
                </ListItem>
                <ListItem dense={true} disableGutters={true}>
                    <Typography variant="body2" display="block">
                        <Link id="rolls" href="#" onClick={handleScrollTo} underline="none" color="textSecondary">
                        <span className={listOfMenuSelections[4]}>Rolls</span>
                        </Link>
                    </Typography>
                </ListItem>
                <ListItem dense={true} disableGutters={true}>
                    <Typography variant="body2" display="block">
                        <Link id="specialRolls" href="#" onClick={handleScrollTo} underline="none" color="textSecondary">
                        <span className={listOfMenuSelections[5]}>Special Rolls</span>
                        </Link>
                    </Typography>
                </ListItem>
                <ListItem dense={true} disableGutters={true}>
                    <Typography variant="body2" display="block">
                        <Link id="vegetarianRolls" href="#" onClick={handleScrollTo} underline="none" color="textSecondary">
                        <span className={listOfMenuSelections[6]}>Vegetarian Rolls</span>
                        </Link>
                    </Typography>
                </ListItem>
                <ListItem dense={true} disableGutters={true}>
                    <Typography variant="body2" display="block">
                        <Link id="nigirisAndSashimi" href="#" onClick={handleScrollTo} underline="none" color="textSecondary">
                        <span className={listOfMenuSelections[7]}>Nigiris & Sashimi</span>
                        </Link>
                    </Typography>
                </ListItem>
            </List>
        );

        if(windowSize === 'md' || windowSize === 'sm' || windowSize === 'xs')
        {
            const value = listOfMenuSelections.indexOf('selectedItem');
            
            component = (
                <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                    style={{
                        position: "sticky",
                        top: "65px",
                        backgroundColor: "white"
                    }}
                >
                    <Tab label="Menu" id="menu" value={-1} onClick={handleScrollTo} />
                    <Tab label="Appetizer" id="appetizer" value={0} onClick={handleScrollTo} />
                    <Tab label="Salad & Soup" id="saladAndSoup" value={1} onClick={handleScrollTo} />
                    <Tab label="A La Carte" id="alacarte" value={2} onClick={handleScrollTo}/>
                    <Tab label="Tempuras" id="tempuras" value={3} onClick={handleScrollTo}/>
                    <Tab label="Rolls" id="rolls" value={4} onClick={handleScrollTo}/>
                    <Tab label="Special Rolls" id="specialRolls" value={5} onClick={handleScrollTo}/>
                    <Tab label="Vegetarian Rolls" id="vegetarianRolls" value={6} onClick={handleScrollTo}/>
                    <Tab label="Nigiris & Sashimi" id="nigirisAndSashimi" value={7} onClick={handleScrollTo}/>
                </Tabs>
            );
        }

        return component;
    }

    return (
        <div className="root-container" onScroll={handleScroll}>
            <Grid container>
                <Grid item xs className="horizontal-table-of-content">
                    
                    {/* when you have '()' with function, it runs immediately. */}
                    {handleTableOfContentDisplay()}
                </Grid>
                <Grid item xs={menuSize}>
                    <LogoPage />
                    <Appetizer appetizerRef={appetizer} />
                    <SaladAndSoup saladAndSoupRef={saladAndSoup} />
                    <Alacarte alacarteRef={alacarte} />
                    <Tempuras tempurasRef={tempuras} />
                    <Rolls rollsRef={rolls} />
                    <SpecialRolls sepcialRollsRef={specialRolls} />
                    <VegetarianRolls vegetarianRollsRef={vegetarianRolls} />
                    <NigirisAndSashimi nigirisAndSashimiRef={nigirisAndSashimi} />
                </Grid>
                <Grid item xs>
                    {/* <Cart /> */}
                </Grid>
            </Grid>
        </div>
    );
}

export default Contents;