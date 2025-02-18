import data from "/public/feedback.json"
import React from "react";
import {BsArrowsAngleExpand} from "react-icons/bs";
import ReactMarkdown from "react-markdown";

function setFeedbackCardSize(index) {
    const selectedCard = document.getElementsByClassName('feedbackCard')[index];
    const {height: currentHeight, width: currentWidth} = selectedCard.getBoundingClientRect();
    let contentHeight;

    if (currentHeight < 281) {
        contentHeight = selectedCard.querySelector('.feedbackContent').scrollHeight+50;
        selectedCard.style.maxHeight = `${contentHeight}px`;
        setWidth(selectedCard, currentWidth);
    } else {
        selectedCard.style.maxHeight = "256px";
        setWidth(selectedCard, currentWidth);
    }
}

const setWidth = (selectedCard, currentWidth) => {
    return currentWidth < 301 ? selectedCard.style.width = "100%" : selectedCard.style.width = "280px";
}

export default function DevFeedback() {
    return (
        <div className={"devFeedback innerMargin"}>
            <h2>What my colleagues say</h2>
            <div className={"allFeedbacks"}>
                {data.map((item, index) => (
                    <div className="feedbackCard" key={index}>
                        <div><h5>{item.name}</h5></div>
                        <div className={"feedbackContent"}>
                            <ReactMarkdown>
                                {item.feedback}
                            </ReactMarkdown>
                        </div>
                        <div className={"more-btn"}
                             style={{display: item.feedback.length < 240 ? 'none' : 'block'}}
                             onClick={() => setFeedbackCardSize(index)}
                             onTouchEnd={(e) => {
                                 setFeedbackCardSize(index);
                             }}>
                            <div><BsArrowsAngleExpand/></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}