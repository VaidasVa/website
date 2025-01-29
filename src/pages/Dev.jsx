import "../static/style/Dev.css"

import {useTranslation} from 'react-i18next';

import LanguageSwitcher from "../components/LanguageSwitcher.jsx";
import DevHeader from "../components/DevHeader.module.jsx";
import DevFooter from "../components/DevFooter.module.jsx";
import Contacts from "../components/Contacts.module.jsx";
import Technologies from "../components/Technologies.module.jsx";
import Projects from "../components/Projects.module.jsx";
import Git from "../components/Git.module.jsx";

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
                    Transitioning to a backend developer role has been and still is an exciting and rewarding journey.
                    With 15 years in managing diverse,
                    high-stakes projects—including e-Taxation systems, state registries, and cybersecurity initiatives—I
                    bring a results-driven perspective to software development.
                </p>
                <p>
                    As a backend developer, I specialize in Java and Spring Boot, crafting robust applications and
                    integrating innovative solutions like 3rd-party systems for on-demand TV platforms. My hands-on
                    experience spans web applications, backend services, microservices, and modern development practices, enriched by
                    internships and real-world projects that honed my skills in technologies such as Jenkins, AWS, and
                    Apigee.
                </p>
                <p>
                    While currently focused on backend development, my ultimate goal is to become a versatile
                    full-stack developer. This journey is fueled by a passion for lifelong learning, reflected in my
                    ongoing dedication to mastering new technologies such as (currently) React and Go.
                </p>
                <p>
                    I’m ready to bring my energy and expertise to
                    your next challenge and create meaningful solutions that stand out and let’s connect.
                </p>
                <Contacts />
            </div>

        </section>
        <Technologies />
        <Projects />
        <Git />
        <DevFooter/>
    </div>);
};

export default Dev;