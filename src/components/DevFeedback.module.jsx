import data from "/public/feedback.json"
import React from "react";

export default function DevFeedback() {

    // todo: parse feedback json object
    // todo flex div with cards
    // todo how to trim text and add ... to indicate there's more?

    return (
        <div className={"devFeedback innerMargin"}>
            <h2>What my colleagues say</h2>
            <div className={"allFeedbacks"}>
            {data.map((item, index) => (
                <div className="feedbackCard" key={index}>
                    <div><h5>{item.name}</h5></div>
                    <div className={"feedbackContent"}>{item.feedback}</div>
                </div>
            ))}
            </div>
        </div>
    )
}