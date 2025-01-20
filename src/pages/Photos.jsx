import "../static/style/Photos.css"
import PhotosHeader from "../components/PhotosHeader.module.jsx"
import PhotosBody from "../components/PhotosBody.module.jsx";
import PhotosFooter from "../components/PhotosFootage.module.jsx";

export default function Photos() {
    return (
        <>
            <PhotosHeader />
            <PhotosBody />
            <PhotosFooter/>
        </>
    )
}