import { Container, Grid, Link } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Trans, useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <Grid container>
      <Container
        maxWidth="xl"
        sx={{
          py: 3,
          display: "flex",
        }}
      >
        <Grid size={{ xs: 12 }} sx={{ px: { xs: 3, sm: 6 } }}>
          <Box component="section">
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{ textAlign: "center", textTransform: "uppercase" }}
            >
              {t("contact.title")}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Typography variant="body1" sx={{ textAlign: "center" }}>
                {t("contact.haveQuestions")}
              </Typography>
              <Typography variant="body1" sx={{ textAlign: "center" }}>
                <Trans
                  i18nKey="contact.onYourService"
                  components={{ strong: <strong /> }}
                />
              </Typography>
              <Typography variant="body1" sx={{ textAlign: "center" }}>
                📞 <strong>{t("contact.contactPhone")}</strong>
                <br />
                <Link
                  href="tel:+306977777777"
                  underline="hover"
                  color="inherit"
                >
                  +30 697 777 7777
                </Link>
                <br />
                <Link
                  href="tel:+306988888888"
                  underline="hover"
                  color="inherit"
                >
                  +30 698 888 8888
                </Link>
              </Typography>
              <Typography variant="body1" sx={{ textAlign: "center" }}>
                ✉️ <strong>{t("contact.email")}</strong>
                <br />
                <Link
                  href="mailto:asiklaris-project.@gmail.com"
                  underline="hover"
                  color="inherit"
                >
                  asiklaris-project.@gmail.com
                </Link>
              </Typography>
              <Typography variant="body1" sx={{ textAlign: "center" }}>
                📍 <strong>{t("contact.location")}</strong>
                <br />
                <Link
                  href="https://maps.app.goo.gl/Yjh4kmKJ8LYDGVyy5"
                  underline="hover"
                  color="inherit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("contact.locationDetails")}
                </Link>
              </Typography>
              <Typography variant="body1" sx={{ textAlign: "center" }}>
                {t("contact.happyToHelp")}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Container>
    </Grid>
  );
}
