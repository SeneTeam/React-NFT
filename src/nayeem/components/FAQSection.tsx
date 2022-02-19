import React, {useState} from 'react';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

export const faqSectionStyles = makeStyles((theme) =>
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

                "& .content-title": {
                    textAlign: "center",
                    fontSize: 40,
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    color: "#ffffff",
                    marginBottom: 20,
                },

                "& .sub-title": {
                    paddingTop: 20,
                    paddingBottom: 20,
                    paddingLeft: 20,
                    color: "#ffffff",
                    marginBottom: 20,
                },

                "& .description": {
                    fontSize: 14,
                    color: "#ffffff",
                },

                "& .accordion": {
                    border: "1px solid #ffffff",

                    "& *": {
                        textAlign: "left",
                    },

                    "& .title": {
                        padding: "10px",
                        fontSize: 14,
                        border: "1px solid #ffffff",
                        fontWeight: "bold",
                        color: "#ffffff",
                        textTransform: "capitalize",
                        cursor: "pointer",
                    },

                    "& .body": {
                        padding: "10px 0px",
                    }
                }
            }
        },

        subAccordion: {
            marginTop: 5,
            marginBottom: 5,

            "& .title": {
                padding: "10px",
                fontSize: 14,
                color: "#ffffff !important",
                textTransform: "capitalize",
                cursor: "pointer",
                border: "0 !important",
            },
            "& .description": {
                color: "#ffffff",
                paddingLeft: 34,
            },
        },
    }),
);

interface IAccordionProps {
    title?: string,
    description?: string,
}

const FAQSection = () => {
    const classes = faqSectionStyles();

    const Accordion: React.FC<IAccordionProps> = (props) => {
        const [open, setOpen] = useState(false);

        return (
            <div className={"accordion"}>
                <div className={"title"} onClick={() => setOpen(!open)} style={{color: open ? "#ff7b21" : "#ffffff"}}>
                    {open ? <RemoveIcon /> : <AddIcon />}
                    {props.title}
                </div>

                {open && (
                    <div className={"sub-title"}>
                        {props.description}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className={classes.root}>
            <div className={"container"}>
                <div className={"content-title"}>FAQs</div>

                <Accordion title={"When Mint?"} description={"21 February – time announced on Discord"} />
                <Accordion title={"Mint Price?"} description={"0.99 SOL"} />
                <Accordion title={"Total Supply?"} description={"2,000 Casino Monkey Gold"} />
                <Accordion title={"Secondary?"} description={"MAGIC EDEN"} />
            </div>
        </div>
    );
};

export default FAQSection;
