import "/public/style/Photos.css"
import {Backdrop, Box, Modal} from "@mui/material";
import React, {useMemo, useCallback} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/keyboard";
import "swiper/css/scrollbar";
import {Keyboard, Mousewheel, Navigation, Pagination, Virtual} from "swiper/modules";
import data from "/public/photos.json";


export default function PhotosBody() {

    const [modalOpen, setModalOpen] = React.useState(false);
    const [year, setYear] = React.useState(2025);
    const [selectedPic, setSelectedPic] = React.useState(null);

    const years = useMemo(() => [...new Set(data.map((item) => item.year))], []);

    const handleOpen = useCallback(() => setModalOpen(true), []);
    const handleClose = useCallback(() => setModalOpen(false), []);

    const filteredItems = useMemo(() => data.filter((item) => item.year === year), [year]);

    const initialSlideIndex = useMemo(
        () => filteredItems.findIndex((item) => item.image === selectedPic),
        [filteredItems, selectedPic]
    );

    return (<section className={"mainSection"}>
        <div className={"intro"}>
            <p>
                A few years ago, I picked up photography as a hobby, and it quickly became something more. It’s my way
                to slow down, focus, and take in the details we often overlook. Photography is like meditation for me—it
                clears my mind, helps me see things differently, and lets me capture moments that might otherwise be
                forgotten.
            </p><p>
            Whether it’s a landscape, a street scene, or just an interesting play of light, every photo has a story. I
            created this page to share my shots, hoping they bring you the same joy, curiosity, or sense of calm that I
            get while taking them.
        </p></div>
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
                            virtual
                            className="swiper"
                            modules={[Navigation, Pagination, Keyboard, Mousewheel, Virtual]}
                            navigation
                            pagination={{clickable: true}}
                            scrollbar={{ draggable: true }}
                            initialSlide={initialSlideIndex !== -1 ? initialSlideIndex : 0}
                            spaceBetween={10}
                            slidesPerView={1}
                            loop={false}
                            keyboard={{enabled: true}}
                            mousewheel={true}
                            style={{ height: "90dvh" }}
                        >
                            {filteredItems.map((item) => (
                                <SwiperSlide key={item.image} virtualIndex={item.image}>
                                <div className={"swiperSlide"}>
                                    <div className={"photoWrapper"}>
                                        <img src={item.image} alt={item.location}
                                             className="swiper-lazy"
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
