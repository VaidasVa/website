import {Tooltip} from "@mui/material";

export default function DevFooter() {
    return (
        <div className={"devFooter"}>
            {/*<span>vaidas.digital</span>*/}
            <Tooltip
                title={"The content of this website is protected and is not allowed to be copied, shared in any way without the permission of the author."}>
                <img src={"../src/static/images/copyright-svgrepo-com.author-solarIcons.svg"} alt={"Copyright protected content"}/>
            </Tooltip>

            <Tooltip title={"GitHub Account"}>
                <a href={"https://github.com/VaidasVa/"} target="_blank" rel="noopener noreferrer">
                    <img src={"../src/static/images/github-142-svgrepo-com.author-bypeople.svg"} alt={"Instagram"}/>
                </a>

            </Tooltip>

            <Tooltip title={"My LinkedIN Account"}>
                <a href={"https://www.linkedin.com/in/vaidasvalikonis"} target="_blank" rel="noopener noreferrer">
                    <img src={"../src/static/images/linkedin-svgrepo-com.autohor-primefaces.svg"} alt={"Flickr"}/>
                </a>
            </Tooltip>
        </div>
    )
}