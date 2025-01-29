import projectData from "../static/projects.json"
import icons from "./Icons.jsx"
import {Box, Divider, Modal, Popover, Tooltip} from "@mui/material";
import React, {useState} from "react";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {FaGithub} from "react-icons/fa";
import ReactMarkdown from "react-markdown";

export default function Projects() {
    const [modalOpen, setModalOpen] = useState(false)
    const [selected, setSelected] = React.useState(0)

    function projects(type) {
        return (<div className="subprojects">
            {filter(type).map((project, index) => (
                <div className="projectCard" key={index}>
                    <div className={"projectTitle"}>
                        {project.title}
                    </div>
                    <div className={"projectTech"}>
                        {project.technologies.map((technology) => (icons
                            .filter((tech) => technology === tech.id)
                            .map((icon) => (
                                <Tooltip title={icon.id} key={`${icon.id}-${project.title}-${Math.random()}`}>
                                    <span>{icon.icon}</span>
                                </Tooltip>))))}
                    </div>
                    <Tooltip title={"More info"}>
                        <button className={"button"}
                                onClick={() => {
                                    setModalOpen(true);
                                    setSelected(project.id - 1)
                                }}
                        >
                            <MoreHorizIcon/>
                        </button>
                    </Tooltip>
                    <Modal open={modalOpen} onClick={() => {
                        setModalOpen(false)
                    }}>
                        <Box direction={"row"} align={"center"} className={"modalBox"}
                             onAuxClick={() => setModalOpen(false)}>
                            <div className={"closeButton"} onClick={() => setModalOpen(false)}>
                                &times;
                            </div>
                            <h2>{projectData[selected].title}</h2>
                            {projectData[selected].category === "personal" ?
                                (<a href={projectData[selected].github} target={"_blank"} rel={"noreferrer"}>
                                    <FaGithub fontSize={"30px"} style={{color: "black"}}/>
                                </a>) : null}
                            <div className={"projectInfo"}>
                                <div className={"projectInfo-description"}>
                                    <ReactMarkdown>{projectData[selected].description}</ReactMarkdown></div>
                                <div style={{textAlign: "justify"}} className={"projectInfo-tech"}>
                                    <h5>Technologies used:</h5>
                                    {projectData[selected].technologies.map((technology) => (icons
                                        .filter((tech) => technology === tech.id)
                                        .map((icon) => (
                                            <ul key={icon.id}>
                                                <li>
                                                    <span style={{
                                                        marginRight: "20px",
                                                        fontSize: "20px"
                                                    }}>{icon.icon}</span>
                                                    <span>{icon.id}</span>
                                                </li>
                                            </ul>
                                        ))))}
                                </div>
                            </div>
                            <h3>Screenshots</h3>
                            <br/>
                            <div className={"projectInfo-screenshots"}>
                                {projectData[selected].screenshots.length > 0 ?
                                    projectData[selected].screenshots.map((img, index) => (
                                            <img src={img} alt={`Screenshot ${index + 1}`} loading={"lazy"}/>
                                    )) : <span>None for this project.</span>
                                }
                            </div>
                        </Box>
                    </Modal>
                </div>))}
        </div>)
    }

    return (
        <section title={"My Projects"} className={"projects innerMargin"}>
            <h2>Projects</h2>
            <Divider textAlign="left" style={{padding: "20px 0 0 0"}}> <span className={"subprojectHeader"}>Personal Projects</span></Divider>
            {projects("personal")}
            <Divider textAlign="left" style={{padding: "20px 0 0 0"}}><span
                className={"subprojectHeader"}>Work Projects</span></Divider>
            {projects("work")}
        </section>
    )
}

function filter(type) {
    let filtered = [];
    projectData.filter((item) => {
        item.category === type ? filtered.push(item) : null;
    })
    return filtered;
}

