import data from "/public/feedback.json"
import React from "react";
import { BsArrowsAngleExpand } from "react-icons/bs";


export default function DevFeedback() {

    // todo: parse feedback json object
    // todo flex div with cards
    // todo how to trim text and add ... to indicate there's more?

    // const textContainer = document.querySelector('.feedbackContent');
    // const moreBtn = document.querySelector('.more-btn');
    //
    // if (textContainer.scrollHeight > textContainer.clientHeight) {
    //     moreBtn.style.display = 'block';
    // } else {
    //     moreBtn.style.display = 'none';
    // }

    // document.querySelector(".more-btn").addEventListener("click", () =>
    //     document.querySelector('.feedbackCard').style.height="600px")

    return (
        <div className={"devFeedback innerMargin"}>
            <h2>What my colleagues say</h2>
            <div className={"allFeedbacks"}>
            {data.map((item, index) => (
                <div className="feedbackCard" key={index}>
                    <div><h5>{item.name}</h5></div>
                    <div className={"feedbackContent"}>{item.feedback}</div>
                    <div className={"more-btn"}
                         style={{
                             // padding: "10px 0 0 0",
                             display: item.feedback.length > 100 ? 'block' : 'none'
                         }}
                         onClick={() => {
                             const selectedCard = document.getElementsByClassName('feedbackCard')[index];
                             const contentHeight = selectedCard.querySelector('.feedbackContent').scrollHeight;
                             selectedCard.style.maxHeight.substring(0, selectedCard.style.maxHeight.length-2) < 170 ?
                                  selectedCard.style.maxHeight = contentHeight + 50 + 'px' : selectedCard.style.maxHeight = "156px";
                    }}>
                        <BsArrowsAngleExpand/></div>
                </div>
            ))}
            </div>
        </div>
    )
}