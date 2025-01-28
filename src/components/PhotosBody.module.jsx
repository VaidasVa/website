import "../static/style/Photos.css"
import {Backdrop, Box, Modal} from "@mui/material";
import React, {useEffect} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/keyboard";
import "swiper/css/scrollbar";
import {Keyboard, Mousewheel, Navigation, Pagination} from "swiper/modules";
import data from "/src/static/photos.json";


export default function PhotosBody() {

    const [modalOpen, setModalOpen] = React.useState(false);
    const [years, setYears] = React.useState([]);
    const [year, setYear] = React.useState(2025);
    const [selectedPic, setSelectedPic] = React.useState(null);

    useEffect(() => {
        const yearsDistinct = [];
        data.forEach((item) => {
            if (!yearsDistinct.includes(item.year)) {
                yearsDistinct.push(item.year);
            }
        });
        setYears(yearsDistinct);
    }, [data]);

    // console.log(z);

    const handleOpen = () => setModalOpen(true);
    const handleClose = () => setModalOpen(false);

    const filteredItems = data.filter((item) => item.year === year);
    const initialSlideIndex = filteredItems.findIndex((item) => item.image === selectedPic);

    return (<section className={"mainSection"}>
            <div className={"intro"}>
                I’ve always loved capturing moments through photography—it’s my way of telling stories, freezing
                emotions and memories in
                time, keeping impressions. I created this page to share my photos with the others, hoping they
                bring as much joy and inspiration as I felt while taking them.
            </div>
            <div className={"photosYearSelector"}>
                {years.map((yearX, index) => (<div key={index}
                                                   style={year === yearX ? {fontWeight: "bold"} : {}}
                                                   onClick={() => setYear(yearX)}>{yearX}</div>))}
            </div>
            <div className={"photosContainer"}>
                {data.map((item) => item.year === year ? (<img
                    className={"photo"}
                    key={item.image}
                    src={item.thumbnail}
                    alt={item.location}
                    onClick={() => {
                        setSelectedPic(item.image);
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
                                className="swiper"
                                modules={[Navigation, Pagination, Keyboard, Mousewheel]}
                                navigation
                                pagination={{clickable: true}}
                                scrollbar={true}
                                lazy="true"
                                initialSlide={initialSlideIndex !== -1 ? initialSlideIndex : 0}
                                spaceBetween={10}
                                slidesPerView={1}
                                loop={false}
                                keyboard={{enabled: true}}
                                mousewheel={true}
                            >
                                {filteredItems.map((item) => (<SwiperSlide key={item.image}>
                                        <div className={"swiperSlide"}>
                                            <div className={"photoWrapper"}>
                                                <img src={item.image} alt={item.location}
                                                     onLoad={(e) => {
                                                         const isHorizontal = e.target.naturalWidth > e.target.naturalHeight;
                                                         e.target.style.width = isHorizontal ? "100dvw" : "auto";
                                                          e.target.style.paddingTop = isHorizontal === false ? "3dvh" : "auto";
                                                     }}
                                                />
                                                <div className={"photoDescription"}>
                                                    {item.location}, {item.country}
                                                </div>
                                            </div>

                                        </div>
                                    </SwiperSlide>))}
                            </Swiper>
                        </Box>
                    </Modal>
                </Backdrop>
            </div>
        </section>)
}
