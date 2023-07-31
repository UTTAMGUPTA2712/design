import React from "react";
import spexigon from "../../asset/images/spexigon.svg";
import cubevid from "../../asset/videos/cube.mp4";
import "./PageDetail.css";
import Carousal from "../Carousal.jsx/Carousal";
const PageDetail = () => {
    return (
        <>
            <div id="pagedetail">
                <div id="data">
                    <video muted autoPlay loop>
                        <source src={cubevid} type="video/mp4" />
                    </video>
                    <div id="datadiv">
                        <img src={spexigon} />
                        <p id="pdata">THE FIRST PLATFORM OF ITS KIND TO REWARD DRONE PILOTS FOR COLLECTING HIGH RESOLUTION EARTH IMAGERY</p>
                    </div>
                </div>
                <Carousal />
            </div>
        </>
    );
};

export default PageDetail;
