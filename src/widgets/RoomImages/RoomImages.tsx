import { Box } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import photo1 from '../../assets/rooms/1.jpg';
import photo10 from '../../assets/rooms/10.jpg';
import photo11 from '../../assets/rooms/11.jpg';
import photo12 from '../../assets/rooms/12.jpg';
import photo2 from '../../assets/rooms/2.jpg';
import photo3 from '../../assets/rooms/3.jpg';
import photo4 from '../../assets/rooms/4.jpg';
import photo5 from '../../assets/rooms/5.jpg';
import photo6 from '../../assets/rooms/6.jpg';
import photo7 from '../../assets/rooms/7.jpg';
import photo8 from '../../assets/rooms/8.jpg';
import photo9 from '../../assets/rooms/9.jpg';

const itemData = [
  {
    img: photo1,
    title: 'building',
  },
  {
    img: photo2,
    title: 'bed and table',
  },
  {
    img: photo3,
    title: 'table',
  },
  {
    img: photo4,
    title: 'bedding',
  },
  {
    img: photo5,
    title: 'sink',
  },
  {
    img: photo6,
    title: 'bed and view',
  },
  {
    img: photo7,
    title: 'key holder',
  },
  {
    img: photo8,
    title: 'bed and door',
  },
  {
    img: photo9,
    title: 'kitchen',
  },

  {
    img: photo10,
    title: 'bedding 2',
  },
  {
    img: photo11,
    title: 'wc',
  },
  {
    img: photo12,
    title: 'balcony',
  },
];

const RoomImages = () => {
  return (
    <Box sx={{ width: 1, height: 1 }}>
      <ImageList variant="masonry" cols={2} gap={8}>
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            sx={{
              overflow: 'hidden',
              aspectRatio: '4 / 3',
            }}
          >
            <Box
              component="img"
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              sx={{
                width: '100%',
                height: '100%',
                transition: 'transform 0.8s ease',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default RoomImages;
