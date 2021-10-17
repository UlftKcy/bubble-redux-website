import React from 'react'
import { Card, CardMedia } from '@material-ui/core';
import banner from "../../assets/banner.png";

const Banner = () => {
    return (
        <Card>
            <CardMedia
            component="img"
            image={banner}
            alt="banner"
            />
        </Card>
    )
}

export default Banner;
