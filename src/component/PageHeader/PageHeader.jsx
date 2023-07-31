import React from "react";
import "./PageHeader.css";
import homepagevid from "../../asset/videos/homepage.mp4";
import logo from "./../../asset/images/logo.svg";
import Navbar from "../Navbar/Navbar";
const PageHeader = () => {
    return (
        <>
            <div id="PageHeader">
                <video muted autoPlay loop width={"100%"} height={"100%"} id="myVideo">
                    <source src={homepagevid} type="video/mp4" />
                </video>
                <div id="detail">
                    <div id="header">
                        <img src={logo} alt="" />
                        <Navbar />
                    </div>
                    <div id="homedetail">
                        <div>
                            <div>
                                <h1>FLY</h1>
                            </div>
                            <div>
                                <h1>TO EARN </h1>
                            </div>
                        </div>
                        <div id="button">
                            FLY YOUR DRONE, COLLECT IMAGERY, EARN REWARDS
                            <br />
                            <span style={{ display: "flex", alignItems: "center" }}>
                                <button id="btn">FLY WITH US</button>
                                <div></div>
                                <button id="btn">LEARN HOW IT WORKS</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PageHeader;
