import {FaAws, FaCss3Alt, FaDocker, FaGitAlt, FaHtml5, FaJava, FaJenkins, FaReact} from "react-icons/fa";
import {
    SiApachekafka,
    SiHashicorp,
    SiMongodb,
    SiOracle,
    SiRabbitmq,
    SiSpring,
    SiSpringboot,
    SiThymeleaf
} from "react-icons/si";
import {IoLogoJavascript} from "react-icons/io";
import {DiMysql, DiRedis} from "react-icons/di";
import {BiLogoGitlab, BiLogoPostgresql} from "react-icons/bi";


// todo : dynamic import of icons
export const icons = [
    {"id": "Java", "icon": <FaJava/>,},
    {"id": "SpringBoot", "icon":  <SiSpringboot />},
    {"id": "AWS", "icon": <FaAws />},
    {"id": "Oracle DB", "icon":<SiOracle/>},
    {"id": "Postgres DB", "icon":<BiLogoPostgresql/>},
    {"id": "MySQL", "icon": <DiMysql />},
    {"id": "MongoDB", "icon": <SiMongodb />},
    {"id": "RabbitMQ", "icon":<SiRabbitmq/>},
    {"id": "Kafka", "icon": <SiApachekafka />},
    {"id": "React", "icon": <FaReact/>,},
    {"id": "Javascript", "icon": <IoLogoJavascript />},
    {"id": "GitLab", "icon":<BiLogoGitlab/>},
    {"id": "Git", "icon": <FaGitAlt />},
    {"id": "Redis", "icon": <DiRedis />},
    {"id": "Docker", "icon": <FaDocker />},
    {"id": "Jenkins", "icon": <FaJenkins />},
    {"id":"Apigee", "icon":  <img src={"/images/Apigee.svg"} alt={"Apigee logo"}
                                  style={{height:'2.5rem', width:'2.5rem'}}
                                  // style={{height:'1rem', width:'2.5rem', margin:".75rem 0 .75rem 0", filter: 'grayscale(100%) contrast(200%) brightness(90%)'}}
        />},
    {"id":"Optimizely", "icon":  <img src={"/images/optimizely.png"} alt={"Optimizely logo"}
                                  style={{height:'2.5rem', width:'2.5rem'}}/>},
   {"id":"jBPM", "icon":  <img src={"https://design.jboss.org/jbpm/logo/final/svg/jbpm_logo_rgb_fullcolor_default.svg"} alt={"Optimizely logo"}
                                  style={{height:'2.5rem', width:'2.5rem', filter:"grayscale(100%) invert(100%)"}}/>},
    {"id": "HTML", "icon":  <FaHtml5 />},
    {"id": "CSS", "icon": <FaCss3Alt />},
    {"id": "Thymeleaf", "icon": <SiThymeleaf />},
    {"id": "Spring Cloud Config", "icon": <SiSpring />},
    {"id": "HashiCorp Vault", "icon": <SiHashicorp />},

]

export default icons;