// src/components/Layout.tsx
import { Grid, useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';
import ImageCarousel from '../../widgets/ImageCarousel';
import Footer from '../Footer';
import Header from '../Header';

export default function Layout() {
  const theme = useTheme();
  return (
    <Grid container direction="column" sx={{ minHeight: '100vh', minWidth: '100vw' }}>
      <Header />

      {/* Main content centered and contained */}
      <Grid
        size={{ xs: 12 }}
        sx={{ flexGrow: 1, width: '100%', backgroundColor: theme.palette.secondary.main }}
      >
        <ImageCarousel />

        <Outlet />
      </Grid>

      {/* Footer full width */}
      <Grid size={{ xs: 12 }} sx={{ width: '100%' }}>
        <Footer />
      </Grid>
    </Grid>
  );
}
