import "../static/style/Dev.css"

import {useTranslation} from 'react-i18next';

import LanguageSwitcher from "../components/LanguageSwitcher.jsx";
import DevHeader from "../components/DevHeader.module.jsx";
import DevFooter from "../components/DevFooter.module.jsx";

const Dev = () => {
    const {t} = useTranslation();

    return (<div className="devContainer">
        {/*<LanguageSwitcher/>*/}
        <DevHeader/>
        <section className="info">
            <div className="intro">
                <h3>
                Hi, I'm Vaidas
                </h3>
                <p>
                    Transitioning to a backend developer role has been an exciting and rewarding journey that leverages
                    my extensive experience in project and portfolio management. With 15 years in managing diverse,
                    high-stakes projects—including e-Taxation systems, state registries, and cybersecurity initiatives—I
                    bring a strategic, results-driven perspective to software development. My academic background,
                    including a Bachelor’s in Informatics and a Master’s in Public Administration (e-Governance), equips
                    me with a solid foundation to navigate complex challenges in the tech industry.
                </p>
                <p>
                    As a backend developer, I specialize in Java and Spring Boot, crafting robust applications and
                    integrating innovative solutions like 3rd-party systems for on-demand TV platforms. My hands-on
                    experience spans web applications, backend services, and modern development practices, enriched by
                    internships and real-world projects that honed my skills in technologies such as Jenkins, AWS, and
                    Apigee.
                </p>
                <p>
                    I thrive in multicultural, virtual teams, where my leadership and collaborative mindset drive
                    results. My experience working across EMEA regions ensures a seamless adaptation to any professional
                    setting. While currently focused on backend development, my ultimate goal is to become a versatile
                    full-stack developer. This journey is fueled by a passion for lifelong learning, reflected in my
                    ongoing dedication to mastering new technologies such as React and Go.
                </p>
                <p>
                    If you’re seeking a developer with a rare blend of technical skills, strategic insight, and a proven
                    track record of delivering impactful projects, let’s connect. I’m ready to bring my expertise to
                    your next challenge and create meaningful solutions that stand out.
                </p>

            </div>
        </section>
        <DevFooter/>
    </div>);
};

export default Dev;