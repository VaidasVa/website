import {Tooltip} from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Contacts() {
    const addr = "moc.liamg@sadiav.sinokilav"
    const styles = {
        backgroundColor:"transparent",
        color:"white",
        marginRight:"10px",
        cursor:"pointer"
    }

    const getEmail = () => {
        let x = addr.split('').reverse().join('');
        document.location.href ="mailto:" + x;
    }

    return (
        <div className={"contacts"}>
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
        </div>
    )
}