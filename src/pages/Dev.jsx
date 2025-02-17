import "/public/style/Dev.css"

import {useTranslation} from 'react-i18next';

import LanguageSwitcher from "../components/LanguageSwitcher.jsx";
import DevHeader from "../components/DevHeader.module.jsx";
import DevFooter from "../components/DevFooter.module.jsx";
import Contacts from "../components/Contacts.module.jsx";
import Technologies from "../components/Technologies.module.jsx";
import Projects from "../components/Projects.module.jsx";
import Git from "../components/Git.module.jsx";
import Feedback from "../components/DevFeedback.module.jsx"

const Dev = () => {
    const {t} = useTranslation();

    return (<div className="devContainer">
        {/*<LanguageSwitcher/>*/}
        <DevHeader/>
        <section className="info">
            <div className="intro innerMargin">
                <h2>
                    Hi, I'm Vaidas
                </h2>
                <p>
                    I’m a backend developer with a foundation in <i>Java, Spring Boot, and microservices</i>,
                    building
                    scalable and efficient applications. My experience includes integrating third-party services (e.g.,
                    on-demand TV platforms, various modules, new functions, etc.), developing <i>web applications and backend services</i>, and working with
                    Jenkins,
                    AWS, and Apigee to streamline development and deployment.
                    </p><p>
                    I’ve transitioned into backend development full-time, but my <i>long-term goal is to master
                    full-stack
                    development</i>, currently focusing on React and Go.
                </p>
                <h3>Key Skills</h3>
                <p>
                    ‣ Java, Spring Boot, REST APIs, microservices <br/>
                    ‣ AWS, Apigee, CI/CD (Git, Jenkins) <br/>
                    ‣ System integration, automation, scalable architecture <br/>
                    ‣ Problem-solving, adaptability, continuous learning <br/>
                </p>
                <h3>Past Work & Other Experience</h3>
                <p>
                    Before switching back to the area of my educational background in IT and software development, I
                    managed various government IT projects, coordinating
                    teams, handling security challenges, and driving large-scale implementations. While not directly
                    coding, this experience sharpened my ability to analyze complex systems, optimize workflows, and
                    solve problems - all of which I now apply in development.
                </p>
                <h3>Let’s Connect!</h3>
                <p>
                    I’m looking for new challenges where I can contribute my backend experience and grow as a developer.
                    Open to collaboration, learning opportunities, and meaningful projects — let’s talk!
                </p>
                <br/>
                <Contacts/>
            </div>

        </section>
        <Technologies/>
        <Projects/>
        <Feedback />
        <Git/>
        <DevFooter/>
    </div>);
};

export default Dev;