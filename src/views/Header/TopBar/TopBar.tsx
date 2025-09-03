import LanguageIcon from "@mui/icons-material/Language";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import deFlag from "../../../assets/flags/de.svg";
import frFlag from "../../../assets/flags/fr.svg";
import enFlag from "../../../assets/flags/gb.svg";
import grFlag from "../../../assets/flags/gr.svg";
import itFlag from "../../../assets/flags/it.svg";

function TopBar() {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (lang?: string) => {
    setAnchorEl(null);
    if (lang) {
      i18n.changeLanguage(lang);
    }
  };

  const languages = [
    { code: "gr", label: "GR", flag: grFlag },
    { code: "en", label: "EN", flag: enFlag },
    { code: "de", label: "DE", flag: deFlag },
    { code: "fe", label: "FR", flag: frFlag },
    { code: "it", label: "IT", flag: itFlag },
  ];

  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        bgcolor: theme.palette.secondary.light,
        color: "white",
        py: 1,
      }}
    >
      <Container maxWidth="xl">
        <Grid container justifyContent="flex-end" spacing={2}>
          <Button color="inherit" component={RouterLink} to="/about-us">
            {t("header.aboutUs")}
          </Button>

          <Button color="inherit" component={RouterLink} to="/directions">
            {t("header.directions")}
          </Button>

          <Button color="inherit" component={RouterLink} to="/contact">
            {t("header.contact")}
          </Button>

          <IconButton color="inherit" onClick={handleMenuOpen}>
            <LanguageIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={() => handleMenuClose()}
          >
            {languages.map(({ code, label, flag }) => (
              <MenuItem
                key={code}
                onClick={() => handleMenuClose(code)}
                style={{ display: "flex", alignItems: "center", gap: 8 }}
              >
                <img
                  src={flag}
                  alt={`${label} flag`}
                  style={{ width: 20, height: 14, objectFit: "cover" }}
                />
                {label}
              </MenuItem>
            ))}
          </Menu>
        </Grid>
      </Container>
    </Box>
  );
}

export default TopBar;
