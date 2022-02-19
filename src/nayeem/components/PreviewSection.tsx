import React from 'react';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import MonkeyImage1 from "../../assets/image/monkey-coin.jpg";
import MonkeyImage2 from "../../assets/image/monkey-coin2.jpg";
import MonkeyImage3 from "../../assets/image/monkey-coin3.jpg";

import Slider from "react-slick";

export const previewSectionStyles = makeStyles((theme) =>

    createStyles({
        root: {
            textAlign: "center",
            padding: "35px",
            "& *": {
                fontFamily: "ExoRegular !important",
            },

            "& .container": {
                display: "inline-block",
                width: 1250,

                [theme.breakpoints.down('md')]: {
                    width: "100%",
                    display: "block",
                },

                "& .title": {
                    textAlign: "center",
                    fontSize: 40,
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    color: "#ffffff",
                    marginBottom: 40,
                },

                "& .image-card": {
                    height: 370,
                    borderRadius: 10,
                    backgroundPosition: "center",
                    backgroundSize: "100% !important",
                    backgroundRepeat: "no-repeat",
                    margin: 15,
                    border: "2px solid #ffffff",
                },
            }
        },
    }),
);

const PreviewSection = () => {
    const classes = previewSectionStyles();


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        autoplay: true,
        arrows: false,
        autoPlaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div className={classes.root} id={"preview_section"}>
            <div className={"container"}>
                <div className={"title"}>Preview</div>
                {/*<Grid container spacing={4}>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <div className={"image-card"} style={{background: `url(${MonkeyImage1})`}}/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <div className={"image-card"} style={{background: `url(${MonkeyImage2})`}}/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <div className={"image-card"} style={{background: `url(${MonkeyImage3})`}}/>
                    </Grid>
                </Grid>*/}

                <Slider {...settings}>
                    <div>
                        <div className={"image-card"} style={{background: `url(${MonkeyImage1})`}}/>
                    </div>
                    <div>
                        <div className={"image-card"} style={{background: `url(${MonkeyImage2})`}}/>
                    </div>
                    <div>
                        <div className={"image-card"} style={{background: `url(${MonkeyImage3})`}}/>
                    </div>

                    <div>
                        <div className={"image-card"} style={{background: `url(${MonkeyImage1})`}}/>
                    </div>
                    <div>
                        <div className={"image-card"} style={{background: `url(${MonkeyImage2})`}}/>
                    </div>
                    <div>
                        <div className={"image-card"} style={{background: `url(${MonkeyImage3})`}}/>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default PreviewSection;
