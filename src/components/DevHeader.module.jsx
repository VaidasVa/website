import "../static/style/Dev.css"
import "../static/style/global.css"

export default function DevHeader() {
    return (
        <a href={"/"}>
        <div className={"header"}>
            <img src={"/images/devLogo.png"} loading="lazy" alt={"Vaidas Dev logo"}/>
        </div>
        </a>
    )
}