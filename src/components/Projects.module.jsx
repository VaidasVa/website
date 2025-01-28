import projectData from "/src/static/projects.json"
import icons from "/src/helpers/icons.jsx"
import {Box, Modal} from "@mui/material";
import React from "react";

export default function Projects() {
    const [modalOpen, setModalOpen] = React.useState(false)
    const [selected, setSelected] = React.useState(0)

    return (<div className={"projects"}>
        <h2>Projects</h2>
        <h3>Personal Projects</h3>
        <div className="personalProjects">
            {projectData.map((project, index) => (<div className="projectCard" key={index}>
                <div className={"projectTitle"}>{project.title}</div>
                <div className={"projectTech"}>
                    {project.technologies.map((technology) => (icons.find((tech) => technology === tech.id)?.icon))}
                </div>
                <button title={"More..."}
                        onClick={() => {
                            setModalOpen(true);
                            setSelected(index)
                        }}
                >...
                </button>
                <Modal open={modalOpen} onClose={() => {
                    setModalOpen(false)
                }}>
                    <Box direction={"row"} align={"center"}
                         style={{
                             backgroundColor: "white",
                             width: "90dvw",
                             minHeight: "50dvh",
                             maxHeight: "90vh",
                             borderRadius: "10px",
                             padding: "10px",
                             margin: "40px auto"
                         }}>
                        <div>{projectData[selected].title}</div>
                        <div>{projectData[selected].id}</div>
                        <p>hi</p>
                    </Box>
                </Modal>
            </div>))}
        </div>
        <h3>Work Projects</h3>
        <div className="workProjects">

        </div>

    </div>)
}