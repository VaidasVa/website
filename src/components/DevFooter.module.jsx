import {Tooltip} from "@mui/material";
import Contacts from "./Contacts.module.jsx";
import CopyrightIcon from '@mui/icons-material/Copyright';

export default function DevFooter() {
    return (
        <div className={"devFooter"}>
            <span>vaidas.digital</span>
            <Tooltip
                title={"The content of this website is protected and is not allowed to be copied, shared in any way without the permission of the author."}>
                <sup><CopyrightIcon size="sm" style={{
                    color:"black",
                    marginRight:"50px",
                    height:"17px",
                    verticalAlign: "super"
                }}/></sup>
            </Tooltip>
            <Contacts />
        </div>
    )
}