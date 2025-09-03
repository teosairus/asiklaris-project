import { Container, Divider, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import SlideInSection from "../../widgets/SlideInSection";

export default function Home() {
  const { t } = useTranslation();

  return (
    <Container
      maxWidth="xl"
      sx={{
        py: 3,
        display: "flex",
      }}
    >
      <Grid container>
        <Grid size={{ xs: 12 }} sx={{ px: { xs: 3, sm: 6 } }}>
          <Box component="section">
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{ textAlign: "center", textTransform: "uppercase" }}
            >
              {t("home.title")}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Typography variant="body1" sx={{ textAlign: "center" }}>
                {t("home.text1")}
              </Typography>
              <Typography variant="body1" sx={{ textAlign: "center" }}>
                {t("home.text2")}
              </Typography>
              <Typography variant="body1" sx={{ textAlign: "center" }}>
                {t("home.text3")}
              </Typography>
              <Typography variant="body1" sx={{ textAlign: "center" }}>
                {t("home.text4")}
              </Typography>
            </Box>
          </Box>
        </Grid>

        <SlideInSection direction="left" stagger={0.2}>
          <Grid size={{ xs: 12 }} sx={{ px: { xs: 3, sm: 6 } }}>
            <Divider sx={{ my: "2rem" }} />
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{
                textAlign: "center",
                textTransform: "uppercase",
                mb: "unset",
              }}
            >
              {t("home.rooms")}
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "center" }}>
              {t("home.roomsDesc")}
            </Typography>
            {/* <LocationCards type="rooms" /> */}
          </Grid>
        </SlideInSection>

        <SlideInSection direction="right" stagger={0.1}>
          <Grid size={{ xs: 12 }} sx={{ px: { xs: 3, sm: 6 } }}>
            <Divider sx={{ my: "2rem" }} />
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{
                textAlign: "center",
                textTransform: "uppercase",
                mb: "unset",
              }}
            >
              {t("home.sights")}
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "center" }}>
              {t("home.sightsDesc")}
            </Typography>
            {/* <LocationCards type="location" /> */}
          </Grid>
        </SlideInSection>
      </Grid>
    </Container>
  );
}
