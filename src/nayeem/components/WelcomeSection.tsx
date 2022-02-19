import React, { useEffect } from 'react';
import App from "../../App";
import Pfp from "../../assets/image/1.jpg";
import "./style.css";

const WelcomeSection = () => {
    useEffect(() => {
        let i = 0;
        let brand_name = 'Casino Monkey';
        let speed = 100;
        const target = document.getElementById("brand_name");

        function typeWriter() {
            if (target) {
                if (i < brand_name.length) {
                    target.innerHTML += brand_name.charAt(i);
                    i++;
                    setTimeout(typeWriter, speed);
                }
            }
        }

        if (target) {
            setInterval(() => {
                i = 0;
                target.innerHTML = '';
                typeWriter();
            }, 2500);
        }
    });

    return (
        <div className='wrap' id={"welcome_section"}>
            <header className="masthead" data-aos="fade-up">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-md-6 ">
                            <h1 className="t-shadow tittle">Casino Monkey Gold</h1><br></br>
                            <p style={{ fontSize: "15px" }}>
                                Casino Monkey Gold offers valuable utility for our NFT holders by earning passive income which will grow and compound over the long term!
                                80% of all commissions received will go back into our community wallet for distribution to NFT holders.
                                Don’t miss your chance to mint one of the 5 “Golden Monkeys” hidden amongst the collection. Casino Monkey Gold members will also have lifetime access to exclusive promotions, competitions and giveaways from our top casino partners…!
                                Become a member of Casino Monkey Gold!
                            </p>
                            <br></br>
                            <App />
                        </div>
                        <div className="col-md-6 text-center ">
                            <img src={Pfp} alt="" className="img img-fluid" />
                        </div>

                    </div>
                </div>
            </header>
        </div>
    );
};

export default WelcomeSection;
