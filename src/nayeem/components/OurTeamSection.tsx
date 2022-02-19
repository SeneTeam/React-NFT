import React from 'react';
import {createStyles, makeStyles} from "@material-ui/core/styles";

export const ourTeamSectionStyles = makeStyles((theme) =>
    createStyles({
        root: {
            textAlign: "center",
            padding: "35px",
            "& *": {
                fontFamily: "ExoRegular !important",
            },

            "& .container": {
                display: "inline-block",
                width: 800,

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
                    marginBottom: 20,
                },

                "& .description": {
                    fontSize: 14,
                    color: "#ffffff",
                },
            }
        },
    }),
);

const OurTeamSection = () => {
    const classes = ourTeamSectionStyles();

    return (
        <div className={classes.root} id={"team_section"}>
            <div className={"container"}>
                <div className={"title"}>Our Team</div>

                <p className={"description"}>
                    
                    Our core team includes members from Generation X, Y & Z from Southeast Asia, Australia & UK. Although some of our team members are Millennials working from a basement, our management team (Gen X & Y) have a wealth of experience in finance, Marketing and business development.
                    <br />
                    <br />

                    In addition to this, we have former casino management staff working closely with us in the area of collaboration and forming partnership deals with the top online casinos globally.</p>
            </div>
        </div>
    );
};

export default OurTeamSection;
