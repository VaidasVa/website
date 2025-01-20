import "../static/style/Photos.css"
import {Box, Modal, Typography} from "@mui/material";
import React from "react";

export default function PhotosBody() {

    const [modalOpen, setModalOpen] = React.useState(false);
    const [year, setYear] = React.useState(2025);
    const [selectedPic, setSelectedPic] = React.useState(null);

    const handleOpen = () => setModalOpen(true);
    const handleClose = () => setModalOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: "80vw",
        maxHeight: "80vh",
        bgcolor: 'background.paper',
        border: '1px solid white',
        boxShadow: 2,
        p: 2.5,
        m: 0,
    };

    return (<section>
        <div className={"intro"}>
            text for intro, text for intro,text for intro,text for intro,text for intro,text for intro,text for
            intro,text for intro,text for intro,text for intro,text for intro,text for intro
        </div>
        <div className={"photosYearSelector"}>
            <div>2024</div>
            <div>2025</div>
        </div>
        <div className={"photosContainer"}>
            {itemData.map((item, index) => (<img className={"photo"}
                                                 key={index}
                                                 src={item.img}
                                                 alt={item.title}
                                                 onClick={() => {
                                                     handleOpen();
                                                     setSelectedPic(index);
                                                     console.log(index);
                                                     console.log(selectedPic)
                                                 }}
                />

            ))}
            <Modal
                open={modalOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                 {/*todo carousel here is better*/}
                <Box sx={style}>
                    <img src={itemData.at(selectedPic).img} />
                </Box>
            </Modal>
        </div>
    </section>)
}

const itemData = [{
    img: 'https://picsum.photos/seed/picsum/400', title: 'Breakfast',
}, {
    img: 'https://picsum.photos/500', title: 'Burger',
}, {
    img: 'https://picsum.photos/400', title: 'Camera',
}, {
    img: 'https://picsum.photos/seed/picsum/400', title: 'Coffee',
}, {
    img: 'https://picsum.photos/seed/picsum/400', title: 'Hats',
}, {
    img: 'https://picsum.photos/seed/picsum/400', title: 'Honey',
}, {
    img: 'https://picsum.photos/seed/picsum/400', title: 'Basketball',
}, {
    img: 'https://picsum.photos/seed/picsum/400', title: 'Fern',
}, {
    img: 'https://picsum.photos/seed/picsum/400', title: 'Mushrooms',
}, {
    img: 'https://picsum.photos/seed/picsum/400', title: 'Tomato basil',
}, {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1', title: 'Sea star',
}, {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6', title: 'Bike',
},];