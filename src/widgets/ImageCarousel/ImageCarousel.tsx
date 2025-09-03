// ImageGallery.tsx
import { Box } from "@mui/material";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import photo1 from "../../assets/carousel/1.jpg";
import photo2 from "../../assets/carousel/2.jpg";
import photo3 from "../../assets/carousel/3.jpg";
import photo4 from "../../assets/carousel/4.jpg";
import photo5 from "../../assets/carousel/5.jpg";

const ImageCarousel = () => {
  const images = [photo1, photo2, photo3, photo4, photo5];
  const galleryItems = images.map((url) => ({
    original: url,
    thumbnail: url,
  }));

  return (
    <Box sx={{ width: "100%", height: "auto", maxHeight: "70vh", mx: "auto" }}>
      <ImageGallery
        items={galleryItems}
        autoPlay
        slideInterval={4000}
        infinite
        showPlayButton={false}
        showFullscreenButton={false}
        showThumbnails={false}
        showNav={true}
        showBullets={true}
        renderItem={(item) => (
          <img
            src={item.original}
            alt=""
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "70vh",
              objectFit: "cover",
            }}
          />
        )}
      />
    </Box>
  );
};

export default ImageCarousel;
