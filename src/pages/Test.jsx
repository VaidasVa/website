import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Test(){
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            width: "90vw",
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            width: "90vw"
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            width: "90vw"
        }
    };
    return (
      <div style={{position:"relative", top:30, right:0, bottom: 30, maxHeight:"90dvh", backgroundColor:"black"}}>
          <Carousel
              swipeable={true}
              draggable={true}
              showDots={true}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={false}
              keyBoardControl={true}
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              style={{position:"relative"}}
              renderDotsOutside={true}
          >
              <div style={{backgroundColor:"blue", minWidth:"90vw"}}>Item 1</div>
              <div style={{backgroundColor:"red", width:"90vw", height: "400px"}}>Item 2</div>
              <div style={{backgroundColor:"yellow", width:"90vw", height: "400px"}}>Item 3</div>
              <div style={{backgroundColor:"grey", width:"90vw", height: "400px"}}>Item 4</div>
          </Carousel>
        </div>
    )
}