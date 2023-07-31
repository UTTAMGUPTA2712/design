import React from "react";
import "./CarousalCard.css";
const CarousalCard = ({ data, show }) => {
    console.log(data);
    return (
        <>
            <div id="CarousalCard">
                <div
                    id="img"
                    className={show?"show":"notShow"}
                    style={{backgroundImage: `url('${data?.image}')`}}
                />
                <div style={{ backgroundColor: data?.color }} id="CarousalCardData">
                    <div className="divdata">
                        <h2>{data?.title}</h2>
                        <p>{data?.data}</p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default CarousalCard;
