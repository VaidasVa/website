import "../static/style/Dev.css"
import "../static/style/global.css"

export default function DevHeader() {
    return (
        <a href={"/"}>
        <div className={"header"}>
            <img src={"../src/static/images/devLogo.png"}  alt={"Vaidas Dev logo"}/>
        </div>
        </a>
    )
}