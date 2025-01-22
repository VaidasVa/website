import "../static/style/Photos.css"
import {Backdrop, Box, Modal} from "@mui/material";
import React from "react";

export default function PhotosBody() {

    const [modalOpen, setModalOpen] = React.useState(false);
    const [year, setYear] = React.useState(2025);
    const [selectedPic, setSelectedPic] = React.useState(null);

    const handleOpen = () => setModalOpen(true);
    const handleClose = () => setModalOpen(false);

    const style = {
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        maxWidth: "90vw",
        maxHeight: "95vh", bgcolor: 'background.paper', outline: 'none', p: 1, m: 0,
    };

    return (<section className={"mainSection"}>
        <div className={"intro"}>
            I’ve always loved capturing moments through photography—it’s my way of telling stories, freezing emotions in
            time, keeping memories and impressions. I created this page to share my photos with others, hoping they
            bring as much joy and inspiration as I felt while taking them.
        </div>
        <div className={"photosYearSelector"}>
            <div onClick={() => setYear(2024)}>2024</div>
            <div onClick={() => setYear(2025)}>2025</div>
        </div>
        <div className={"photosContainer"}>
            {itemData.map((item) => item.year === year ? (<img
                    className={"photo"}
                    key={item.img}
                    src={item.thumb}
                    alt={item.title}
                    onClick={() => {
                        setSelectedPic(item.img);
                        handleOpen();
                    }}
                />) : null)}
            <Backdrop
                sx={(theme) => ({color: '#fff', zIndex: theme.zIndex.drawer + 1})}
                open={modalOpen}
                onClick={handleClose}
            >
                <Modal
                    open={modalOpen}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    {/*todo carousel here is better*/}
                    <Box sx={style}>
                        {itemData.map(item => item.img === selectedPic ?
                            <img src={item.img} key={item.img} alt={item.title}
                            style={{maxWidth: "90vw"}}
                            /> :
                            null)}
                    </Box>
                </Modal>
            </Backdrop>
        </div>
    </section>)
}

const itemData = [{
    img: '../src/static/photos/1.jpeg', thumb: '../src/static/photos/1thumb.jpeg', title: 'Breakfast', year: 2024,
}, {
    img: '../src/static/photos/2.jpeg', thumb: '../src/static/photos/2thumb.jpeg', title: 'Breakfast', year: 2024,
}, {
    img: '../src/static/photos/3.jpeg', thumb: '../src/static/photos/3thumb.jpeg', title: 'Breakfast', year: 2024,
}, {
    img: '../src/static/photos/4.jpeg', thumb: '../src/static/photos/4thumb.jpeg', title: 'Breakfast', year: 2024,
}, {
    img: '../src/static/photos/5.jpeg', thumb: '../src/static/photos/5thumb.jpeg', title: 'Breakfast', year: 2024,
}, {
    img: '../src/static/photos/6.jpeg', thumb: '../src/static/photos/6thumb.jpeg', title: 'Breakfast', year: 2024,
}, {
    img: '../src/static/photos/7.jpeg', thumb: '../src/static/photos/7thumb.jpeg', title: 'Breakfast', year: 2024,
}, {
    img: '../src/static/photos/8.jpeg', thumb: '../src/static/photos/8thumb.jpeg', title: 'Breakfast', year: 2024,
}, {
    img: '../src/static/photos/9.jpeg', thumb: '../src/static/photos/9thumb.jpeg', title: 'Breakfast', year: 2024,
}, {
    img: '../src/static/photos/10.jpeg', thumb: '../src/static/photos/10thumb.jpeg', title: 'Breakfast', year: 2024,
}, {
    img: '../src/static/photos/11.jpeg', thumb: '../src/static/photos/11thumb.jpeg', title: 'Breakfast', year: 2024,
}, {
    img: '../src/static/photos/12.jpeg', thumb: '../src/static/photos/12thumb.jpeg', title: 'Breakfast', year: 2024,
}, {
    img: '../src/static/photos/13.jpeg', thumb: '../src/static/photos/13thumb.jpeg', title: 'Breakfast', year: 2024,
}, {
    img: '../src/static/photos/14.jpeg', thumb: '../src/static/photos/14thumb.jpeg', title: 'Breakfast', year: 2024,
}, {
    img: '../src/static/photos/15.jpeg', thumb: '../src/static/photos/15thumb.jpeg', title: 'Breakfast', year: 2025,
}, {
    img: '../src/static/photos/16.jpeg', thumb: '../src/static/photos/16thumb.jpeg', title: 'Breakfast', year: 2025,
}, {
    img: '../src/static/photos/17.jpeg', thumb: '../src/static/photos/17thumb.jpeg', title: 'Breakfast', year: 2025,
}, {
    img: '../src/static/photos/18.jpeg', thumb: '../src/static/photos/18thumb.jpeg', title: 'Breakfast', year: 2025,
}, {
    img: '../src/static/photos/19.jpeg', thumb: '../src/static/photos/19thumb.jpeg', title: 'Breakfast', year: 2025,
},];