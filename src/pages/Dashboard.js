import React from 'react';
import {Container, makeStyles} from "@material-ui/core";
import Banner from "../components/dashboard/Banner";
import Products from '../components/dashboard/Products';

const useStyles = makeStyles((theme) =>({
    container:{
        paddingTop: 20,
        paddingBottom: 20,
    }

}))

const Dashboard = () => {
    const classes = useStyles()
    return (
        <Container maxWidth="lg" className = {classes.container}>
            <Banner/>
            <Products/>
        </Container>
    )
}

export default Dashboard;
