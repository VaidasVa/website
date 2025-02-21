import "/public/style/Dev.css"
import "/public/style/global.css"

export default function DevHeader() {
    return (
        <a href={"/"}>
        <div className={"header"}>
            <img src={"/images/devLogo_old.png"} loading="lazy" alt={"Vaidas Dev logo"}/>
        </div>
        </a>
    )
}