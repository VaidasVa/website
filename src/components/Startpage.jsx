import "../static/style/Startpage.css"

export default function startpage() {
    return (
        <div className={"startPageContainer"}>
            <a href={"#"}>
                <div className={"dev"}>
                    <img src="src/static/images/devLogo.png" alt={"Software Development"}/>
                </div>
            </a>
            <a href={"#"}>
                <div className={"photos"}>
                    <img src="src/static/images/photoLogo.png" alt={"Photography"}/>
                </div>
            </a>
        </div>
    )
}