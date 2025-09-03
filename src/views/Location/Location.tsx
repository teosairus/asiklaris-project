import {
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";

function Location() {
  const { t } = useTranslation();

  const sights = t("location.sights", { returnObjects: true }) as Record<
    string,
    any
  >;
  const activities = t("location.activities", {
    returnObjects: true,
  }) as Record<string, any>;
  const foodList = t("location.food.list", {
    returnObjects: true,
  }) as string[];
  return (
    <Container
      maxWidth="xl"
      sx={{
        py: 3,
        display: "flex",
      }}
    >
      <Grid container sx={{ display: "flex", gap: 5 }}>
        <Grid size={{ xs: 12 }} sx={{ px: { xs: 3, sm: 6 } }}>
          <Box component="section">
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{ textAlign: "center", textTransform: "uppercase" }}
            >
              {t("location.title")}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Typography variant="body1" sx={{ textAlign: "center" }}>
                {t("location.text1")}
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Divider sx={{ my: 1 }} />
        </Grid>

        {/* Sights */}
        <Grid size={{ xs: 12 }} sx={{ px: { xs: 3, sm: 6 } }}>
          <Box component="section">
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{ textAlign: "center", textTransform: "uppercase" }}
            >
              {t("location.sightsTitle")}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Typography variant="body1" sx={{ textAlign: "center" }}>
                {t("location.sightsSubtitle")}
              </Typography>
            </Box>

            {Object.values(sights).map((sight: any, index) => (
              <Card key={index} sx={{ my: 2 }}>
                <CardContent>
                  <Typography variant="h6">{sight.title}</Typography>
                  <Typography variant="body2" paragraph>
                    {sight.desc}
                  </Typography>
                  {sight.time && (
                    <Typography
                      variant="caption"
                      display="block"
                    >{`📍 ${sight.time}`}</Typography>
                  )}
                  {sight.tip && (
                    <Typography
                      variant="caption"
                      display="block"
                    >{`🎟️ ${sight.tip}`}</Typography>
                  )}
                </CardContent>
              </Card>
            ))}
          </Box>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Divider sx={{ my: 1 }} />
        </Grid>

        {/* Activities */}
        <Grid size={{ xs: 12 }} sx={{ px: { xs: 3, sm: 6 } }}>
          <Box component="section">
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{ textAlign: "center", textTransform: "uppercase" }}
            >
              {activities.title}
            </Typography>

            <List>
              {Object.entries(activities)
                .filter(([key]) => key !== "title")
                .map(([key, value]) => (
                  <ListItem key={key}>{value as string}</ListItem>
                ))}
            </List>
          </Box>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Divider sx={{ my: 1 }} />
        </Grid>

        {/* Food */}
        <Grid size={{ xs: 12 }} sx={{ px: { xs: 3, sm: 6 } }}>
          <Box component="section">
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{ textAlign: "center", textTransform: "uppercase" }}
            >
              {t("location.food.title")}
            </Typography>

            <List>
              {foodList.map((item, index) => (
                <ListItem key={index}>· {item}</ListItem>
              ))}
            </List>
          </Box>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Divider sx={{ my: 1 }} />
        </Grid>

        {/* Closing */}
        <Grid size={{ xs: 12 }} sx={{ px: { xs: 3, sm: 6 } }}>
          <Typography variant="body1">{t("location.closing")}</Typography>
        </Grid>

        <Grid
          size={{ xs: 12 }}
          sx={{ minHeight: "30rem", px: { xs: 3, sm: 6 } }}
        >
          <Box component="section" sx={{ width: 1, height: 1 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3255.08078418927!2d25.127453375772085!3d35.32881537270312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x149a5985fa2cf6b5%3A0x65f67acac3f66e27!2zzpvOtc-Jz4YuIM6Rzr3OtM-Bzq3OsSDOoM6xz4DOsc69zrTPgc6tzr_PhSA2NCwgzpfPgc6szrrOu861zrnOvyA3MTMgMDU!5e0!3m2!1sel!2sgr!4v1756911669040!5m2!1sel!2sgr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Location;
