import "/public/style/Startpage.css"

export default function startPage() {
    return (
        <div className={"startPageContainer"}>
            <div className="box-inner"></div>
            <a href={"/dev"}>
                <div className={"dev"}>
                    <img src="/images/devLogo.png" alt={"Software Development"}/>

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