// import FridgeIcon from '@mui/icons-material/Kitchen';
import WifiIcon from '@mui/icons-material/Wifi';
import { Box, Container, Grid, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import BeachIcon from '../../widgets/CustomIcons/BeachIcon';
import BedIcon from '../../widgets/CustomIcons/BedIcon';
import CookingHobIcon from '../../widgets/CustomIcons/CookingHobIcon';
import FloorPlanIcon from '../../widgets/CustomIcons/FloorPlanIcon';
import FridgeIcon from '../../widgets/CustomIcons/FridgeIcon';
import KettleIcon from '../../widgets/CustomIcons/KettleIcon';
import KitchenSetIcon from '../../widgets/CustomIcons/KitchenSetIcon';
import OvenIcon from '../../widgets/CustomIcons/OvenIcon';
import PersonalHygieneIcon from '../../widgets/CustomIcons/PersonalHygieneIcon';
import ShowerIcon from '../../widgets/CustomIcons/ShowerIcon';
import ToasterIcon from '../../widgets/CustomIcons/ToasterIcon';
import TowelsIcon from '../../widgets/CustomIcons/TowelsIcon';
import RoomImages from '../../widgets/RoomImages';

export function Accommodation() {
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <Grid container>
      <Grid
        size={{ xs: 12 }}
        sx={{
          display: 'flex',
          backgroundColor: theme.palette.primary.dark,
          padding: '1rem',
          color: theme.palette.text.secondary,
          width: 1,
          height: 1,
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            py: 3,
            display: 'flex',
          }}
        >
          <Grid container spacing={3} sx={{ display: 'flex', width: 1 }}>
            <Grid
              size={{ xs: 12, sm: 4 }}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <FloorPlanIcon
                sx={{
                  fontSize: {
                    xs: '2rem',
                    sm: '3rem',
                    md: '4rem',
                    lg: '5rem',
                  },
                }}
              />
              <Box>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  {t('accommodation.roomSize')}
                </Typography>
                <Typography variant="body2">{t('accommodation.roomSizeComment')}</Typography>
              </Box>
            </Grid>

            <Grid
              size={{ xs: 12, sm: 4 }}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <BedIcon
                sx={{
                  fontSize: {
                    xs: '2rem',
                    sm: '3rem',
                    md: '4rem',
                    lg: '5rem',
                  },
                }}
              />
              <Box>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  {t('accommodation.bedSize')}
                </Typography>
                <Typography variant="body2">{t('accommodation.bedSizeComment')}</Typography>
              </Box>
            </Grid>

            <Grid
              size={{ xs: 12, sm: 4 }}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <BeachIcon
                sx={{
                  fontSize: {
                    xs: '2rem',
                    sm: '3rem',
                    md: '4rem',
                    lg: '5rem',
                  },
                }}
              />
              <Box>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  {t('accommodation.beach')}
                </Typography>
                <Typography variant="body2">{t('accommodation.beachComment')}</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Grid>

      <Container maxWidth="xl" sx={{ py: 3 }}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12 }}>
            <Box component="section">
              <Typography
                variant="h3"
                component="h1"
                gutterBottom
                sx={{ textAlign: 'center', textTransform: 'uppercase' }}
              >
                {t('accommodation.title')}
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 8 }} sx={{ px: { xs: 3, sm: 3, md: 4, lg: 6 } }}>
            <Box component="section" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography variant="body1" sx={{ textAlign: 'justify' }}>
                {t('accommodation.text1')}
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'justify' }}>
                {t('accommodation.text2')}
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'justify' }}>
                {t('accommodation.text3')}
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'justify' }}>
                {t('accommodation.text4')}
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'justify' }}>
                {t('accommodation.text5')}
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 4 }} sx={{ px: { xs: 3, sm: 2, md: 4, lg: 6 } }}>
            <Grid
              size={{ xs: 12 }}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: theme.palette.primary.dark,
                padding: '1rem',
                color: theme.palette.text.secondary,
                width: 1,
                // height: 1,
              }}
            >
              <Typography variant="h5" sx={{ textAlign: 'center' }}>
                {t('accommodation.amenities')}
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Box>
                  {[
                    {
                      icon: <WifiIcon sx={{ fontSize: '2.5rem' }} />,
                      label: t('accommodation.wifi'),
                    },
                    {
                      icon: <OvenIcon sx={{ fontSize: '2.5rem' }} />,
                      label: t('accommodation.oven'),
                    },
                    {
                      icon: <CookingHobIcon sx={{ fontSize: '2rem' }} />,
                      label: t('accommodation.stove'),
                    },
                    {
                      icon: <KitchenSetIcon sx={{ fontSize: '2.5rem' }} />,
                      label: t('accommodation.kitchenware'),
                    },
                    {
                      icon: <FridgeIcon sx={{ fontSize: '2.5rem' }} />,
                      label: t('accommodation.fridge'),
                    },
                    {
                      icon: <ToasterIcon sx={{ fontSize: '2.5rem' }} />,
                      label: t('accommodation.toaster'),
                    },
                    {
                      icon: <KettleIcon sx={{ fontSize: '2.5rem' }} />,
                      label: t('accommodation.kettle'),
                    },
                    {
                      icon: <ShowerIcon sx={{ fontSize: '2.5rem' }} />,
                      label: t('accommodation.shower'),
                    },
                    {
                      icon: <TowelsIcon sx={{ fontSize: '2.5rem' }} />,
                      label: t('accommodation.towels'),
                    },
                    {
                      icon: <PersonalHygieneIcon sx={{ fontSize: '2.5rem' }} />,
                      label: t('accommodation.hygieneSet'),
                    },
                  ].map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        mb: 1.5,
                      }}
                    >
                      <Box sx={{ width: '4rem', display: 'flex', justifyContent: 'center' }}>
                        {item.icon}
                      </Box>
                      <Typography variant="body2">{item.label}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid size={{ xs: 12 }} sx={{ px: { xs: 3, sm: 2, md: 4, lg: 6 } }}>
            <RoomImages />
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

export default Accommodation;
