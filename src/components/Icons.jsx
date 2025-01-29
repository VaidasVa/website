import {FaAws, FaCss3Alt, FaDocker, FaGitAlt, FaHtml5, FaJava, FaJenkins, FaReact} from "react-icons/fa";
import {SiApachekafka, SiHashicorp, SiMongodb, SiSpring, SiSpringboot, SiThymeleaf} from "react-icons/si";
import {IoLogoJavascript} from "react-icons/io";
import {DiMysql, DiRedis} from "react-icons/di";

export const icons = [
    {"id": "Java", "icon": <FaJava/>,},
    {"id": "SpringBoot", "icon":  <SiSpringboot />},
    {"id": "React", "icon": <FaReact/>,},
    {"id": "Javascript", "icon": <IoLogoJavascript />},
    {"id": "AWS", "icon": <FaAws />},
    {"id": "Kafka", "icon": <SiApachekafka />},
    {"id": "MySQL", "icon": <DiMysql />},
    {"id": "Redis", "icon": <DiRedis />},
    {"id": "MongoDB", "icon": <SiMongodb />},
    {"id": "Git", "icon": <FaGitAlt />},
    {"id": "Jenkins", "icon": <FaJenkins />},
    {"id": "Docker", "icon": <FaDocker />},
    {"id":"Apigee", "icon":  <img src={"../src/static/images/apigee.png"} alt={"Apigee logo"}
                                  style={{height:'1rem', width:'2.5rem', margin:".75rem 0 .75rem 0"}}/>},
    {"id":"Optimizely", "icon":  <img src={"../src/static/images/optimizely.png"} alt={"Optimizely logo"}
                                  style={{height:'2.5rem', width:'2.5rem'}}/>},
   {"id":"jBPM", "icon":  <img src={"https://www.jbpm.org/headerFooter/jBPMLogo_siteheader.png"} alt={"Optimizely logo"}
                                  style={{height:'auto', width:'2.5rem', padding: '1rem 0',
                                      filter:"grayscale(1)"}}/>},
    {"id": "HTML", "icon":  <FaHtml5 />},
    {"id": "CSS", "icon": <FaCss3Alt />},
    {"id": "Thymeleaf", "icon": <SiThymeleaf />},
    {"id": "Spring Cloud Config", "icon": <SiSpring />},
    {"id": "HashiCorp Vault", "icon": <SiHashicorp />},
]

export default icons;