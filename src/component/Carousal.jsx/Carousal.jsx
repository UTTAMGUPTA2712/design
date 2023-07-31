import React, { useState } from "react";
import "./Carousal.css";
import car1 from "../../asset/images/car1.png";
import car2 from "../../asset/images/car2.png";
import car3 from "../../asset/images/car3.png";
import CarousalCard from "../CarousalCard/CarousalCard";
const carousalData = [
    {
        image: car1,
        title: "Organizations",
        data: "If you need to monitor, analyze, or track physical infrastructure, buildings, or resources, we can help.",
        color: "#bcdeeb",
    },
    {
        image: car2,
        title: "Developers",
        data: "Would your app or platform benefit from accessing ultra-high resolution, frequently updated Earth imagery?",
        color: "#e0e6f2",
    },
    {
        image: car3,
        title: "Data Partners",
        data: "Would your clients benefit from accessing our imagery?",
        color: "#eae7ff",
    },
];
const Carousal = () => {
    const [data, setdata] = useState(0);
    return (
        <>
            <div id="carousal">
                <div>
                    <h1>COLLECT IMAGERY, EARN REWARDS, HELP THE PLANET</h1>
                    <span id="navbtndiv">
                    <button disabled={data===0} onClick={()=>setdata(data-1)} id="navbtn">{'<'}</button>
                    <button disabled={data===2} onClick={()=>setdata(data+1)} id="navbtn">{'>'}</button>
                    </span>
                </div>
                <br />
                <br />
                <div id="carosaldata">
                    {carousalData.map((carData, index) => (
                        <div key={index} onClick={() => setdata(+index)}>
                            {console.log(data === index, index, data)}
                            <CarousalCard data={carData} show={index === data} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Carousal;
