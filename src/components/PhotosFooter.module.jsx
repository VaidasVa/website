import "../static/style/Photos.css"
import {Tooltip} from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";

export default function PhotosFooter() {
    return (
        <div className={"photosFooter"}>
        <span>vaidas.digital</span>
        <Tooltip
            title={"The content of this website is protected and is not allowed to be copied, shared in any way without the permission of the author."}>
            <sup><CopyrightIcon size="sm" style={{
                color:"black",
                height:"17px",
                verticalAlign: "super"
            }}/></sup>
        </Tooltip>

        <Tooltip title={"My Instagram Account"}>
            <a href={"https://www.instagram.com/vaidasphoto/"} target="_blank" rel="noopener noreferrer">
            <img src={"/images/instagram-color-svgrepo-com.svg"} alt={"Instagram"}/>
            </a>

        </Tooltip>

        <Tooltip title={"My Flickr Account"}>
            <a href={"https://flickr.com/photos/200260558@N05"} target="_blank" rel="noopener noreferrer">
                <img src={"/images/flickr-svgrepo-com.author-edent.svg"} alt={"Flickr"}/>
            </a>
        </Tooltip>
    </div>)
}