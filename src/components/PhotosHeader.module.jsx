import "../static/style/Photos.css"

export default function PhotosHeader() {
    return (
        <a href={"/"}>
            <div className={"photosHeader"}>
            <img src={"/images/photoLogo.png"}  alt={"Vaidas Photo logo"}/>
        </div>
        </a>

    )
}