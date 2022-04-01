import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    partialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 30,
  },
};

const images = [
  "https://s3-ap-southeast-1.amazonaws.com/foodvista.1/2d0df88f-08fd-47ee-9299-42703cc42cd5.jpg",
  "https://s3-ap-southeast-1.amazonaws.com/foodvista.1/3d05d982-e3e0-4051-968f-aed93e9a6a4a.jpg",
  "https://s3-ap-southeast-1.amazonaws.com/foodvista.1/0dbf9d10-975d-4a2e-9521-6768ef740802.jpg",
  "https://s3-ap-southeast-1.amazonaws.com/foodvista.1/210a67bb-07c8-47f1-b17e-d0465244a405.png",
  "https://s3-ap-southeast-1.amazonaws.com/foodvista.1/e6b4ddc9-aa4c-4d82-9568-17f4150d70a6.jpg",
  "https://s3-ap-southeast-1.amazonaws.com/foodvista.1/207d2e5a-d747-4c9d-b338-1a96d4785724.jpeg",
  "https://s3-ap-southeast-1.amazonaws.com/foodvista.1/456e646b-281d-4c53-9c6b-c388976ed455.jpg",
  "https://s3-ap-southeast-1.amazonaws.com/foodvista.1/88c83a19-d81b-481b-8604-2304474c50b0.jpg",
];

const NavCarousel = () => {
  return (
    <Carousel
      ssr
      partialVisible
      autoPlay="true"
      infinite="true"
      itemClass="image-item"
      responsive={responsive}
    >
      {images.slice(0, 7).map((image) => {
        return (
          <img
            draggable={false}
            style={{
              width: "100%",
              height: "100%",
              boxSizing: "border-box",
              padding: "30px",
            }}
            src={image}
            alt=""
            key={image}
          />
        );
      })}
    </Carousel>
  );
};

export default NavCarousel;
