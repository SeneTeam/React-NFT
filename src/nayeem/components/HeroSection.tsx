import React from 'react';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import HeroBanner from "../../assets/image/hero-banner.jpg";

export const heroSectionStyles = makeStyles((theme) =>
    createStyles({
        root: {
            height: 550,
            background: `url(${HeroBanner})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        },
    }),
);

const HeroSection = () => {
    const classes = heroSectionStyles();

    return (
        <div className={classes.root}/>
    );
};

export default HeroSection;
