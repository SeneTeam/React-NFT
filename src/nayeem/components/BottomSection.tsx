import React from 'react';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import TwitterIcon from "../../assets/image/twitter.png";
import DiscordIcon from "../../assets/image/discord.png";

export const bottomSectionStyles = makeStyles((theme) =>
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
                    textTransform: "sentence",
                    color: "#ffffff",
                    marginBottom: 20,
                },

                "& .flex": {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                },

                "& .right": {
                    textAlign: "right",

                    "& .icons": {
                        display: "flex",
                        justifyContent: "space-between",

                        "& img": {
                            width: 50,
                            marginLeft: 10,
                            marginRight: 10,
                            cursor: "pointer",

                            "&:hover": {
                                opacity: 0.8,
                            }
                        },
                    },
                }
            }
        },
    }),
);

const BottomSection = () => {
    const classes = bottomSectionStyles();

    return (
        <div className={classes.root}>
            <div className={"container"}>
                <div className={"flex"}>
                    <div className={"title"}>Are we good bet for you?</div>
                    <div className={"right"}>
                       <div className={"icons"}>
                           <img src={TwitterIcon} />
                           <img src={DiscordIcon} />
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomSection;
