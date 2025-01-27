import "../static/style/Photos.css"
import {Backdrop, Box, Modal} from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/keyboard";
import "swiper/css/scrollbar";
import {Keyboard, Mousewheel, Navigation, Pagination} from "swiper/modules";


export default function PhotosBody() {

    const [modalOpen, setModalOpen] = React.useState(false);
    const [years, setYears] = React.useState([2019, 2020, 2021, 2022, 2023, 2024, 2025]);
    const [year, setYear] = React.useState(2025);
    const [selectedPic, setSelectedPic] = React.useState(null);

    const handleOpen = () => setModalOpen(true);
    const handleClose = () => setModalOpen(false);

    const filteredItems = itemData.filter((item) => item.year === year);
    const initialSlideIndex = filteredItems.findIndex((item) => item.img === selectedPic);

    return (
        <section className={"mainSection"}>
        <div className={"intro"}>
            I’ve always loved capturing moments through photography—it’s my way of telling stories, freezing emotions and memories in
            time, keeping impressions. I created this page to share my photos with the others, hoping they
            bring as much joy and inspiration as I felt while taking them.
        </div>
        <div className={"photosYearSelector"}>
            { years.map((yearX, index) => (
                <div key={index}
                     style={year === yearX ? {fontWeight: "bold"}: {}}
                     onClick={() => setYear(yearX)}>{yearX}</div>
            ))}
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
                    <Box className={"photoBox"}>
                        <div className={"closeButton"} onClick={handleClose}>
                            &times;
                        </div>
                        <Swiper
                            modules={[Navigation, Pagination, Keyboard, Mousewheel]}
                            navigation
                            pagination={{ clickable: true }}
                            scrollbar={true}
                            lazy={true}
                            initialSlide={initialSlideIndex !== -1 ? initialSlideIndex : 0}
                            spaceBetween={10}
                            slidesPerView={1}
                            loop={false}
                            keyboard={{ enabled: true }}
                            mousewheel={true}
                        >
                            {filteredItems.map((item) => (
                                <SwiperSlide key={item.img}>
                                    <div className={"swiperSlide"}>
                                        <img src={item.img} alt={item.title}/>
                                        <div className={"photoDescription"}>
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