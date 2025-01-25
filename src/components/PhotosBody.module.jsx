import "../static/style/Photos.css"
import {Backdrop, Box, Modal} from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";


export default function PhotosBody() {

    const [modalOpen, setModalOpen] = React.useState(false);
    const [year, setYear] = React.useState(2025);
    const [selectedPic, setSelectedPic] = React.useState(null);

    const handleOpen = () => setModalOpen(true);
    const handleClose = () => setModalOpen(false);

    const filteredItems = itemData.filter((item) => item.year === year);
    const initialSlideIndex = filteredItems.findIndex((item) => item.img === selectedPic);

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "90vw",
        height: "90vh",
        outline: "none",
        p: 1,
        m: 0,
    };

    return (
        <section className={"mainSection"}>
        <div className={"intro"}>
            I’ve always loved capturing moments through photography—it’s my way of telling stories, freezing emotions in
            time, keeping memories and impressions. I created this page to share my photos with others, hoping they
            bring as much joy and inspiration as I felt while taking them.
        </div>
        <div className={"photosYearSelector"}>
             {/*todo make selected one bold*/}
            <div onClick={() => setYear(2022)}>2022</div>
            <div onClick={() => setYear(2023)}>2023</div>
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
                open={modalOpen}>
                <Modal
                    open={modalOpen}
                    onClose={handleClose}>

                    <Box sx={style}>
                        <div
                            onClick={handleClose}
                            style={{
                                position: "absolute",
                                top: "10px",
                                right: "10px",
                                background: "transparent",
                                border: "none",
                                fontSize: "30px",
                                color: "#fff",
                                cursor: "pointer",
                                zIndex: 10, // Ensure it stays on top of other elements
                            }}
                        >
                            &times; {/* Close button symbol */}
                        </div>
                        <Swiper
                            modules={[Navigation, Pagination]}
                            navigation
                            pagination={{ clickable: true }}
                            lazy={true}
                            initialSlide={initialSlideIndex !== -1 ? initialSlideIndex : 0}
                            spaceBetween={10}
                            slidesPerView={1}
                            loop={false}
                            keyboard={{
                                enabled: true,
                            }}
                            mousewheel={true}
                            // style={{
                            //     color: "white"
                            // }}
                        >
                            {filteredItems.map((item) => (
                                <SwiperSlide key={item.img}>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            margin: "15px auto",
                                            width: "fit-content",
                                            height: 'fit-content',
                                            maxWidth: "100%",
                                            maxHeight: "90%",
                                            padding: "20px 0 10px 0"
                                        }}
                                    >
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            style={{
                                                maxWidth: "100%",
                                                maxHeight: "90%",
                                                objectFit: "contain", // Ensures the image fits within the box while maintaining aspect ratio
                                                // display: "block",
                                                margin: "0 auto"
                                            }}
                                        />
                                        <div style={{color: "white"}}>
                                        <p>{item.title}, {item.year}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Box>

                </Modal>
            </Backdrop>
        </div>
    </section>
    )
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