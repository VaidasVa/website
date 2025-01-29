import projectData from "/src/static/projects.json"
import icons from "/src/helpers/icons.jsx"
import {Box, Divider, Modal, Tooltip} from "@mui/material";
import React, {useState} from "react";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {FaGithub} from "react-icons/fa";

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
                                <div className={"projectInfo-description"}>{projectData[selected].description}</div>
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
                            <div className={"projectInfo-screenshots"}>

                            </div>
                        </Box>
                    </Modal>
                </div>))}
        </div>)
    }

    return (
        <section title={"My Projects"} className={"projects innerMargin"}>
            <h2>Projects</h2>

            <Divider textAlign="left" style={{padding:"20px"}}> <i>Personal Projects</i></Divider>
            {projects("personal")}
            <Divider textAlign="left" style={{padding:"20px"}}><i>Work Projects</i></Divider>
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

