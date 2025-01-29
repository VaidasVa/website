import "../static/style/Photos.css"
import {Tooltip} from "@mui/material";

export default function PhotosFooter() {
    return (<div className={"photosFooter"}>
        {/*<span>vaidas.digital</span>*/}
        <Tooltip
            title={"The content of this website is protected and is not allowed to be copied, shared in any way without the permission of the author."}>
            <img src={"../src/static/images/copyright-svgrepo-com.author-solarIcons.svg"} alt={"Copyright protected content"} loading="lazy"/>
        </Tooltip>

        <Tooltip title={"My Instagram Account"}>
            <a href={"https://www.instagram.com/vaidasphoto/"} target="_blank" rel="noopener noreferrer">
            <img src={"../src/static/images/instagram-color-svgrepo-com.svg"} alt={"Instagram"}/>
            </a>

        </Tooltip>

        <Tooltip title={"My Flickr Account"}>
            <a href={"https://flickr.com/photos/200260558@N05"} target="_blank" rel="noopener noreferrer">
                <img src={"../src/static/images/flickr-svgrepo-com.author-edent.svg"} alt={"Flickr"}/>
            </a>
        </Tooltip>
    </div>)
}