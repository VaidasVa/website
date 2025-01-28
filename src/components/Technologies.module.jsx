import {FaAws, FaDocker, FaGitAlt, FaJava, FaJenkins, FaReact} from "react-icons/fa";
import {SiApachekafka, SiSpringboot} from "react-icons/si";
import {IoLogoJavascript} from "react-icons/io";
import {DiMysql} from "react-icons/di";

export default function Technologies() {
    return (
        <div className={"technologies"}>
            <h2 style={{paddingBottom:"40px"}}>Technology stack</h2>
            <div className={"technologies-container"}>
                <div className="techItemContainer">
                    <FaJava/><h4>Java</h4>
                </div>
                <div className="techItemContainer">
                    <SiSpringboot /><h4>SpringBoot</h4>
                </div>
                <div className="techItemContainer">
                    <FaReact/><h4>React</h4>
                </div>
                <div className="techItemContainer">
                    <IoLogoJavascript /><h4>JavaScript</h4>
                </div>
                <div className="techItemContainer">
                    <FaAws /><h4>AWS</h4>
                </div>
                <div className="techItemContainer">
                    <SiApachekafka /><h4>Kafka</h4>
                </div>
                <div className="techItemContainer">
                    <DiMysql /><h4>MySQL</h4>
                </div>
                <div className="techItemContainer">
                    <FaGitAlt /><h4>Git</h4>
                </div>
                <div className="techItemContainer">
                    <FaJenkins /><h4>Jenkins</h4>
                </div>
                <div className="techItemContainer">
                    <FaDocker /><h4>Docker</h4>
                </div>
                <div className="techItemContainer">
                    <img src={"../src/static/images/apigee.png"} alt={"Apigee logo"}
                         style={{height:'1rem', width:'2.5rem', margin:".75rem 0 .75rem 0"}}
                    /><h4>Apigee</h4>
                </div>
                <div className="techItemContainer">
                    <img src={"../src/static/images/optimizely.png"} alt={"Optimizely logo"}
                         style={{height:'2.5rem', width:'2.5rem'}}
                    />
                    <h4>Optimizely</h4>
                </div>
            </div>
        </div>
    )
}