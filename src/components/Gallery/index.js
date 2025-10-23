import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import {
  GalleryContainer,
  GalleryGrid,
  GalleryImage,
  ViewMoreLink,
  ArrowIcon,
} from "./styledComponents";

import Header from "../Header";

import Footer from "../Footer";

const Gallery = () => {
  const carouselImages = [
    "https://res.cloudinary.com/dn9sdbv1o/image/upload/v1737474029/IMG20250120130930_1_nysukl.jpg",
    "https://res.cloudinary.com/dn9sdbv1o/image/upload/v1737474030/IMG_8386_1_kzlmgl.jpg",
    "https://res.cloudinary.com/dn9sdbv1o/image/upload/v1737466129/IMG_20250120_101134_1_ojeih4.jpg",
  ];

  const galleryImages = [
    "https://res.cloudinary.com/dn9sdbv1o/image/upload/v1737467458/IMG_20250120_120915_1_gvpqig.jpg",
    "https://res.cloudinary.com/dn9sdbv1o/image/upload/v1737467459/IMG_20250120_121037_1_xsc5a8.jpg",
    "https://res.cloudinary.com/dn9sdbv1o/image/upload/v1737467458/IMG_20250120_120852_1_fb0ahf.jpg",
    "https://res.cloudinary.com/dn9sdbv1o/image/upload/v1737467457/IMG_20250120_122659_1_b3aa1i.jpg",
    "https://res.cloudinary.com/dn9sdbv1o/image/upload/v1737467459/IMG_20250120_124122_1_jvrg12.jpg",
    "https://res.cloudinary.com/dn9sdbv1o/image/upload/v1737467458/IMG_20250120_124607_1_pbbklz.jpg",
    "https://res.cloudinary.com/dn9sdbv1o/image/upload/v1737474291/IMG_7893_1_gegj65.jpg",
    "https://res.cloudinary.com/dn9sdbv1o/image/upload/v1737474425/IMG_20250120_120515_2_b6kvar.jpg",
    "https://res.cloudinary.com/dn9sdbv1o/image/upload/v1737474652/IMG_20250120_123909_1_q6azcn.jpg",
  ];

  return (
    <>
      <Header />
      <GalleryContainer>
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={2500}
        >
          {carouselImages.map((img, idx) => (
            <div key={idx}>
              <img src={img} alt={`Carousel ${idx + 1}`} />
            </div>
          ))}
        </Carousel>

        <GalleryGrid>
          {galleryImages.map((img, idx) => (
            <GalleryImage key={idx} src={img} alt={`Gallery ${idx + 1}`} />
          ))}
        </GalleryGrid>

        <ViewMoreLink
          href="https://drive.google.com/drive/folders/1oNXTBB7DdsqxqkROhvodwT8vhK0Mq6SU"
          target="_blank"
          rel="noreferrer"
        >
          View More <ArrowIcon />
        </ViewMoreLink>
      </GalleryContainer>
      <Footer />
    </>
  );
};

export default Gallery;
