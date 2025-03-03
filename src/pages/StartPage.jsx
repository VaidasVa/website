import "/public/style/Startpage.css"

export default function startPage() {
    return (
        <div className={"startPageContainer"}>

            <a href={"/dev"}>
                <div className={"dev"}>
                    <div>
                        <img src="/images/devLogo.png" alt={"Software Development"}/>
                    </div>
                    <div className={"box-inner"}></div>
                </div>

            </a>
            <a href={"/photos"}>
                <div className={"photos"}>
                    <img src="/images/photoLogo.png" alt={"Photography"}/>
                </div>
            </a>
        </div>
    )
}