import { Container, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";

function AboutUs() {
  const { t } = useTranslation();

  return (
    <Container
      maxWidth="xl"
      sx={{
        py: 3,
        display: "flex",
      }}
    >
      <Grid container sx={{ display: "flex", gap: 5 }}>
        <Grid size={{ xs: 12 }} sx={{ px: { xs: 3, sm: 6 }, gap: "1rem" }}>
          <Box component="section">
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{ textAlign: "center", textTransform: "uppercase" }}
            >
              {t("aboutUs.title")}
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Typography variant="body1" sx={{ textAlign: "center" }}>
                {t("aboutUs.text1")}
              </Typography>

              <Typography variant="body1" sx={{ textAlign: "center" }}>
                {t("aboutUs.text2")}
              </Typography>

              <Typography variant="body1" sx={{ textAlign: "center" }}>
                {t("aboutUs.text3")}
              </Typography>

              <Typography variant="body1" sx={{ textAlign: "center" }}>
                {t("aboutUs.text4")}
              </Typography>

              <Typography variant="body1" sx={{ textAlign: "center" }}>
                {t("aboutUs.text5")}
              </Typography>

              <Typography variant="body1" sx={{ textAlign: "center" }}>
                {t("aboutUs.text6")}
              </Typography>

              <Typography variant="body1" sx={{ textAlign: "center" }}>
                {t("aboutUs.text7")}
              </Typography>

              <Typography variant="body1" sx={{ textAlign: "center" }}>
                {t("aboutUs.text8")}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AboutUs;
