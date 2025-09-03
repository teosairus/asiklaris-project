import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import { Container, Divider, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo-white.png";

function Footer() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box component="footer" sx={{ mt: "auto" }}>
      <Box
        sx={{
          backgroundColor: theme.palette.grey[800],
          color: "grey.300",
          py: 4,
          px: { xs: 2, md: 10 },
          textAlign: "left",
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <Grid
              size={{ xs: 12, sm: 12, md: 3 }}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={logo} alt="agali-studios-logo" height={150} />
            </Grid>

            <Grid
              size={{ xs: 12, sm: 4, md: 3 }}
              sx={{ color: theme.palette.text.secondary }}
            >
              <Typography variant="h5" gutterBottom>
                {t("footer.contact")}
              </Typography>
              <Divider
                sx={{ backgroundColor: theme.palette.secondary.main, mb: 2 }}
              />
              <Typography variant="body2" sx={{ mb: 1 }}>
                <Link
                  href="tel:+306977777777"
                  underline="hover"
                  color="inherit"
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <LocalPhoneIcon />
                  +30 697 777 7777
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <Link
                  href="tel:+306988888888"
                  underline="hover"
                  color="inherit"
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <LocalPhoneIcon />
                  +30 698 888 8888
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <Link
                  href="mailto:asiklaris-project.@gmail.com"
                  underline="hover"
                  color="inherit"
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <EmailIcon />
                  asiklaris-project.@gmail.com
                </Link>
              </Typography>
            </Grid>

            <Grid
              size={{ xs: 12, sm: 4, md: 3 }}
              sx={{ color: theme.palette.text.secondary }}
            >
              <Typography variant="h5" gutterBottom>
                {t("footer.additionalInfo")}
              </Typography>
              <Divider
                sx={{ backgroundColor: theme.palette.secondary.main, mb: 2 }}
              />
              <Box sx={{ mb: 2 }}>
                <Link
                  href="https://maps.app.goo.gl/XcvvNXDaQZnSRezZA"
                  underline="hover"
                  color="inherit"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <LocationPinIcon sx={{ color: theme.palette.error.main }} />
                  <Typography variant="body2">
                    {t("footer.howToCome")}
                  </Typography>
                </Link>
              </Box>
            </Grid>

            <Grid
              size={{ xs: 12, sm: 4, md: 3 }}
              sx={{ color: theme.palette.text.secondary }}
            >
              <Typography variant="h5" gutterBottom>
                {t("footer.followUs")}
              </Typography>
              <Divider
                sx={{ backgroundColor: theme.palette.secondary.main, mb: 2 }}
              />

              <Box sx={{ mb: 2 }}>
                <Link
                  href="https://www.instagram.com/"
                  underline="hover"
                  color="inherit"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <InstagramIcon sx={{ color: theme.palette.text.secondary }} />
                  <Typography variant="body2">Instagram</Typography>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          py: 2,
          px: 3,
          backgroundColor: theme.palette.grey[900],
          textAlign: "center",
        }}
      >
        <Container maxWidth="xl">
          <Typography variant="body2" color="text.secondary">
            © 2025 {t("footer.title")}
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default Footer;
