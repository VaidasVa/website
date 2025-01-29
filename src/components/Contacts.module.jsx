import {Tooltip} from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Contacts() {
    const addr = "moc.liamg@sadiav.sinokilav"
    const styles = {
        backgroundColor:"white",
        color:"rgb(23, 23, 44)",
        marginRight:"10px",
        cursor:"pointer",
        width:"2rem",
        height:"2rem"


    }

    const getEmail = () => {
        let x = addr.split('').reverse().join('');
        document.location.href ="mailto:" + x;
    }

    return (
        <section title={"Contacts"} className={"contacts"}>
            <Tooltip title={"Send me an e-mail"}>
                    <EmailIcon style={styles} onClick={getEmail} />
            </Tooltip>
            <Tooltip title={"My LinkedIN Account"}>
                <a href={"https://www.linkedin.com/in/vaidasvalikonis"} target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon style={styles}/>
                </a>
            </Tooltip>
            <Tooltip title={"My GitHub Account"}>
                <a href={"https://github.com/VaidasVa/"} target="_blank" rel="noopener noreferrer">
                   <GitHubIcon style={styles}/>
                </a>
            </Tooltip>
        </section>
    )
}