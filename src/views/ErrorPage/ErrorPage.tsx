// src/ErrorPage.tsx
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export default function ErrorPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        textAlign: 'center',
        py: 10,
      }}
    >
      <Typography variant="h3" gutterBottom>
        {t('errorPage.error404')}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {t('errorPage.subtitle')}
      </Typography>
      <Button variant="contained" onClick={() => navigate('/')}>
        {t('errorPage.goHome')}
      </Button>
    </Box>
  );
}
