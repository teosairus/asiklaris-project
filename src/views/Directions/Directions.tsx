import {
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Link,
} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";

function Directions() {
  const { t } = useTranslation();

  const port = t("directions.fromPort", { returnObjects: true }) as Record<
    string,
    any
  >;
  const airport = t("directions.fromAirport", {
    returnObjects: true,
  }) as Record<string, any>;
  const busStation = t("directions.fromBusStation", {
    returnObjects: true,
  }) as Record<string, any>;
  const coordinates = t("directions.coordinates", {
    returnObjects: true,
  }) as Record<string, any>;

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
              {t("directions.title")}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Typography variant="body1" sx={{ textAlign: "center" }}>
                {t("directions.text1")}
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Divider sx={{ my: 1 }} />
        </Grid>

        {/* From Port */}
        <Grid size={{ xs: 12 }} sx={{ px: { xs: 3, sm: 6 } }}>
          <Typography variant="h5">{port.title}</Typography>
          <Typography variant="body2" paragraph>
            {port.distance}
          </Typography>
          <Card sx={{ my: 1 }}>
            <CardContent>
              <Typography variant="subtitle1">🚗</Typography>
              <Typography variant="body2">{port.car.desc}</Typography>
              <Typography variant="caption" display="block">
                {port.car.cost}
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ my: 1 }}>
            <CardContent>
              <Typography variant="subtitle1">🚌</Typography>
              <Typography variant="body2">{port.bus.desc}</Typography>
              <Typography variant="caption" display="block">
                {port.bus.duration}
              </Typography>
              <Typography variant="caption" display="block">
                {port.bus.cost}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Divider sx={{ my: 1 }} />
        </Grid>

        {/* From Airport */}
        <Grid size={{ xs: 12 }} sx={{ px: { xs: 3, sm: 6 } }}>
          <Typography variant="h5">{airport.title}</Typography>
          <Typography variant="body2" paragraph>
            {airport.distance}
          </Typography>
          <Card sx={{ my: 1 }}>
            <CardContent>
              <Typography variant="subtitle1">🚗</Typography>
              <Typography variant="body2">{airport.car.desc}</Typography>
              <Typography variant="caption" display="block">
                {airport.car.cost}
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ my: 1 }}>
            <CardContent>
              <Typography variant="subtitle1">🚌</Typography>
              <Typography variant="body2">{airport.bus.desc}</Typography>
              <Typography variant="caption" display="block">
                {airport.bus.duration}
              </Typography>
              <Typography variant="caption" display="block">
                {airport.bus.cost}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Divider sx={{ my: 1 }} />
        </Grid>

        {/* From Bus Station */}
        <Grid size={{ xs: 12 }} sx={{ px: { xs: 3, sm: 6 } }}>
          <Typography variant="h5">{busStation.title}</Typography>
          <Typography variant="body2" paragraph>
            {busStation.distance}
          </Typography>
          <Card sx={{ my: 1 }}>
            <CardContent>
              <Typography variant="subtitle1">🚕</Typography>
              <Typography variant="body2">{busStation.taxi.desc}</Typography>
              <Typography variant="caption" display="block">
                {busStation.taxi.cost}
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ my: 1 }}>
            <CardContent>
              <Typography variant="subtitle1">🚌</Typography>
              <Typography variant="body2">{busStation.bus.desc}</Typography>
              <Typography variant="caption" display="block">
                {busStation.bus.note}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Tip & Help */}
        <Grid size={{ xs: 12 }} sx={{ px: { xs: 3, sm: 6 } }}>
          <Typography variant="body2" paragraph>
            {t("directions.tip")}
          </Typography>
          <Typography variant="body2">{t("directions.help")}</Typography>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Divider sx={{ my: 1 }} />
        </Grid>

        {/* Coordinates */}
        <Grid size={{ xs: 12 }} sx={{ px: { xs: 3, sm: 6 } }}>
          <Typography variant="h6">{coordinates.title}</Typography>
          <Link
            href="https://maps.app.goo.gl/XcvvNXDaQZnSRezZA"
            underline="hover"
            color="inherit"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ display: "flex", alignItems: "center", mt: 1 }}
          >
            <Typography variant="body2">{coordinates.address}</Typography>
          </Link>
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

export default Directions;
