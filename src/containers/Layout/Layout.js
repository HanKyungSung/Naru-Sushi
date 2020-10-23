import React from "react";
import Container from '@material-ui/core/Container';
import NavigationBar from "../NavigationBar/NavigationBar";
import Content from "../Content/Content";

const Layout = () => {
    return (
        <React.Fragment>
            <Container maxWidth={false}>
                <NavigationBar />
                <Content className="bg-dark"/>
            </Container>
        </React.Fragment>
    );
}

export default Layout;